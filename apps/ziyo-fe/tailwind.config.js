const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const tailwindConfig = require('../../libs/ui/src/config/tailwind.config');

const config = {
  ...tailwindConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    ...tailwindConfig.content,
    ...createGlobPatternsForDependencies(__dirname),
  ],
};

module.exports = config;
