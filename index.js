/*
Do not forget to create a .env file with the following two variables set:

CHROME_PATH=
EMAIL=
PASSWORD=

See documentation for help
*/
import { ChatGPTAPIBrowser } from 'chatgpt'
import whatsappweb from "whatsapp-web.js";

const { Client, LocalAuth } = whatsappweb;
import qrcode from "qrcode-terminal";
import * as dotenv from "dotenv";

dotenv.config();

// Create whatsapp client instance
const whatsapp = new Client({
  puppeteer: {
    executablePath: process.env.CHROME_PATH,
  },
  authStrategy: new LocalAuth(),
});

console.log(process.env.CHROME_PATH);

// Initialize conversation storage
const conversations = {};

whatsapp.initialize();

// This will output a QR code to the console, scan this with the WhatsApp app on the account that will be dedicated to chatGPT
whatsapp.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

whatsapp.on("authenticated", () => {
  console.log("Authentication complete");
});
whatsapp.on("ready", () => {
  console.log("Ready to accept messages");
});



async function main() {
  const chatgpt = new ChatGPTAPIBrowser({
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  })
  
  await chatgpt.initSession()

  whatsapp.on("message", (message) => {
    (async () => {
      console.log(
        `From: ${message._data.id.remote} (${message._data.notifyName})`
      );

      console.log(`Message: ${message.body}`);

      // If added to a chatgroup, only respond if tagged
      const chat = await message.getChat();

      if (
        chat.isGroup &&
        !message.mentionedIds.includes(whatsapp.info.wid._serialized)
      )
        return;

      // Do we already have a conversation for this sender, or is the user resetting this conversation?
      if (
        conversations[message._data.id.remote] === undefined ||
        message.body === "reset"
      ) {
        console.log(`Creating new conversation for ${message._data.id.remote}`);
        if (message.body === "reset") {
          
          message.reply("Conversation reset");
          return;
        }
        conversations[message._data.id.remote] = chatgpt;
      }

      const response = await conversations[message._data.id.remote].sendMessage(
        message.body
      );

      console.log(`Response: ${response.response}`);

      message.reply(response.response);
    })();
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

const sleep = (waitTimeInMs) =>
  new Promise((resolve) => setTimeout(resolve, waitTimeInMs));
