import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'Is this app free?',
      a: (
        <>
          Cleek.id is free to use. You will need to have a working OpenAI API Key in order to use the app. When you use the OpenAI API Key, you pay directly to OpenAI for the amount of credits/tokens you use.
        </>
      ),
    },
    {
      q: 'Where can i get an openAI api key?',
      a: "You can signup directly with OpenAI at https://platform.openai.com/signup",
    },
    {
      q: 'Do I need to pay for ChatGPT Plus ($20/month) to use Cleek.id?',
      a: 'No! A ChatGPT Plus subscription is not needed. You just need to have an OpenAIs API Key. You can see more info on how to get one here: https://openai.com/blog/openai-api',
    },
    {
      q: 'Do I need to pay for OpenAI for a ChatGPT API Key?',
      a: 'Yes. You need to have an OpenAI account and a valid API key to use ChatGPT. We dont sell API keys.',
    },
    {
      q: 'How does this app work?',
      a: 'This is a static web app, it doesnt have any backend server. When you enter your API key, it will be stored locally and securely on your browser. All API requests are sent directly from your browser to OpenAI server to interact with ChatGPT. Think of this as a HTTP client for your ChatGPT API with a lot of convenience features.',
    },
    {
      q: 'How is the API key handled?',
      a: 'Your API is safe and stored locally on your device. This is a static app, which means that it doesnt have a backend. All the data is stored in your browsers local storage. Requests to Open AIs API is sent directly from your current browser (check the Network tab in your console if you want to see it).',
    },
    {
      q: "What's the difference between ChatGPT Plus and ChatGPT API via Cleek?",
      a: "Under the hood, ChatGPT Plus and ChatGPT API offer the same model and the same quality. You can view this on their official announcement here: https://platform.openai.com/docs/guides/chat. The initial system instruction can be a little bit different, which can be configured to make the AI output different messages from time to time.",
    },
  ],
}

export default faq
