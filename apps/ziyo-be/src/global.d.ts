// Environment variables
declare namespace NodeJS {
  interface ProcessEnv {
    TYPESENSE_API_URL: string;
    TYPESENSE_API_KEY: string;
  }
}
