# WhatsGPT?

WhatsGPT is a wrapper for ChatGPT for personal or family use.
**It can keep track of several distinct conversations with different users, so your entire family (and friends) can use it**
My family and I find ChatGPT very useful want we want to use it on the go and I was bored on a Saturday morning, so here we are.

Now, you can use it too.

It's experimental and relies on the preview release of OpenAI's ChatGPT.

![f083f0e996e00d0684d685786f808f5d70b5c9d0b4c4cbcc6c9d8ccf47359dc8](https://user-images.githubusercontent.com/18585190/206880862-7bdb74d1-728e-4177-a5c1-e7e7243777b6.jpg | width=150)

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

![ae8275e17747fcc953d760eedab0577facd01d9ce20e1703ed036840cd7c0e92](https://user-images.githubusercontent.com/18585190/206880813-622c104f-d938-45d2-944d-9e0a7abeedab.jpg  | width=150)

![992427a2ae6756d90df1ed849745e9c8fec62de62dba00e3fafed82020a5b698](https://user-images.githubusercontent.com/18585190/206880812-52a6b414-377c-437e-a9ea-52df39795f6b.jpg  | width=150)


## Done :)


