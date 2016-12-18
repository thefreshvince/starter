"use strict";

const webpackEntry = require('./resources/scripts/settings/webpack_entry.js'),
      webpackOutput = require('./resources/scripts/settings/webpack_output.js'),
      webpackLoaders = require('./resources/scripts/settings/webpack_loaders.js'),
      webpackPlugins = require('./resources/scripts/settings/webpack_plugins.js');

let settings =  {
  entry: webpackEntry.get(),
  output: webpackOutput.get(),
  module: {
    loaders: webpackLoaders.get()
  },
  plugins: webpackPlugins.get().concat(
    webpackLoaders.getUsedPlugins()
  ),
  watch: true,
  devtool: 'source-map'
};

// Add extra settings
webpackLoaders.extend(settings);

// Export settings
module.exports = settings;
