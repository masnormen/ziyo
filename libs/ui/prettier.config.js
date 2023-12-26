const prettierConfig = require('../../prettier.config.js');

module.exports = {
  ...prettierConfig,
  tailwindConfig: './src/config/tailwind.config.js',
};
