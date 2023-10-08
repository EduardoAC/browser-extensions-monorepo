const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const path = require('path');

const contentRoot = path.resolve(__dirname, './src/content-script');
const backgroundRoot = path.resolve(__dirname, './src/background-script');
// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.entry = {
    background_script: [`${backgroundRoot}/background.ts`],
    content_script: [`${contentRoot}/main.tsx`],
  };
  return config;
});
