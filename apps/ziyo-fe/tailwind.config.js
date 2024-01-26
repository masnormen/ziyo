const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const tailwindConfig = require('../../libs/ui/src/config/tailwind.config');

const config = {
  ...tailwindConfig,
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    ...tailwindConfig.content,
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        ...tailwindConfig.theme.extend.colors,
        kiiro: {
          50: '#FEF9F0',
          100: '#FEF5E6',
          200: '#FDECCE',
          300: '#FCE2B5',
          400: '#FBD99D',
          500: '#FACE83',
          600: '#F7B23B',
          700: '#DD8F09',
          800: '#935F06',
          900: '#4A3003',
          950: '#221601',
        },
      },
    },
  },
};

module.exports = config;
