# WhatsGPT?

WhatsGPT is a wrapper for [ChatGPT](https://openai.com/blog/chatgpt/) for personal or family use, that runs inside your own WhatsApp bot.

**It can keep track of several distinct conversations with different users, so your entire family (and friends) can use it**

My family and I find ChatGPT very useful want we want to use it on the go and I was bored on a Saturday morning, so here we are.

It's experimental and relies on the preview release of OpenAI's ChatGPT.

<img width="350" src="https://user-images.githubusercontent.com/18585190/206880862-7bdb74d1-728e-4177-a5c1-e7e7243777b6.jpg" />

## Thanks to

- [chatgpt npm wrapper by Travis Fischer](https://github.com/transitive-bullshit/chatgpt-api)
- [whatsapp-web.js](https://wwebjs.dev/guide/)
- [qrcode-terminal for quickly linking device](https://www.npmjs.com/package/qrcode-terminal)

# Requirements

- A phone number that can receive text messages/voice calls, linked to its own WhatsApp instance.
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

<img src="https://raw.githubusercontent.com/transitive-bullshit/chatgpt-api/HEAD/media/session-token.png" width="500" />

## Find your local path to Chrome

## Configure it

Create a .env file with the following two variables. In this example, we are using Chrome on OSX.

```console
SESSION_TOKEN=[Your session token]
CLEARANCE_TOKEN=[Your clearance token obtained from the cookies]
CHROME_PATH=/Applications/Google Chrome.app/Contents/MacOS/Google Chrome
```

## Run it

```console
npm start
```

## Scan the barcode with your WhatsApp app:

<img width="350" src="https://user-images.githubusercontent.com/18585190/206880813-622c104f-d938-45d2-944d-9e0a7abeedab.jpg" />

<img width="350" src="https://user-images.githubusercontent.com/18585190/206880812-52a6b414-377c-437e-a9ea-52df39795f6b.jpg" />

## Done :)

# Use it

Open a chat with the WhatsApp account linked to the number you just linked to this bot. ChatGPT will answer. This works for several users at the same time and each conversation is separate.
Additionally, you can reset an ongoing conversation by sending this message:

```console
reset
```
