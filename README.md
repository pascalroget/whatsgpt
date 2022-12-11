# WhatsGPT?

WhatsGPT is a wrapper for ChatGPT for personal or family use.
It can keep track of several distinct conversations with different users.
It was coded in a few hours because my family and I find ChatGPT very useful want we want to use it on the go.

Now, you can too.

## Thanks to

- [chatgpt npm wrapper by Travis Fischer](https://github.com/transitive-bullshit/chatgpt-api)
- [whatsapp-web.js](https://wwebjs.dev/guide/)
- [qrcode-terminal for quickly linking device](https://www.npmjs.com/package/qrcode-terminal)

# Requirements

- A dedicated number that can receive text messages/voice calls, linked to its own WhatsApp instance.
- I use a Google Voice number, and run a 2nd instance of WhatsApp on my phone by using the [WhatsApp for Business app](https://business.whatsapp.com/) (it's free!])
- A recent version of NodeJS
- A computer that can run Chrome (headless is OK)

# Installation

## Get the files

Clone the repository:

```console
git clone https://github.com/pascalroget/whatsgpt.git
```

Install dependencies:

```console
npm install
```

## Obtain your session token from ChatGPT:

1. Go to [https://chat.openai.com/chat](https://chat.openai.com/chat) and log in or sign up.
2. Open dev tools
3. Open Application > Cookies
   [screenshot](https://raw.githubusercontent.com/transitive-bullshit/chatgpt-api/HEAD/media/session-token.png)

## Find your local path to Chrome

## Configure it

Create a .env file with the following two variables. In this example, we are using Chrome on OSX.

```console
SESSION_TOKEN=[Your session token]
CHROME_PATH=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

## Run it

```console
npm start
```

## Scan the barcode with your WhatsApp app:

## Done :)
