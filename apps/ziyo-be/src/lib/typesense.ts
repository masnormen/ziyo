import Typesense from 'typesense';

export const typesense = new Typesense.Client({
  nodes: [
    {
      url: process.env.TYPESENSE_API_URL,
    },
  ],
  apiKey: process.env.TYPESENSE_API_KEY,
  connectionTimeoutSeconds: 2,
});
