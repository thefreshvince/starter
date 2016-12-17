const webpackEntry = require('./resources/scripts/settings/webpack_entry.js'),
      webpackOutput = require('./resources/scripts/settings/webpack_output.js'),
      webpackLoaders = require('./resources/scripts/settings/webpack_loaders.js');

module.exports = {
  entry: webpackEntry.get(),
  output: webpackOutput.get(),
  module: {
    loaders: webpackLoaders.getLoaders()
  },
  plugins: [].concat(webpackLoaders.getUsedPlugins()),
  watch: true,
  devtool: 'source-map'
};
