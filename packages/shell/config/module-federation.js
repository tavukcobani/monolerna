const deps = require('../package.json').dependencies;
const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { UniversalFederationPlugin } = require('@module-federation/node');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'shell',
    filename: 'container.js',
    runtime:false,
    remotes: {},
    shared: [{ react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } }],
  }),
  server: [
    new UniversalFederationPlugin({
      remoteType: 'script',
      name: 'shell',
      isServer: true,
      runtime:false,
      library: { type: 'commonjs-module' },
      filename: 'remoteEntry.js',
      remotes: {},
      shared: [{ react: { singleton: true, eager: true }, "react-dom": { singleton: true, eager: true } }],
    })
  ],
};