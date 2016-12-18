// Put into strict mode so we can use let, const, etc...
"use strict";

// Grab our Webpack settings
const webpackEntry = require('./resources/scripts/settings/webpack_entry.js'),
      webpackOutput = require('./resources/scripts/settings/webpack_output.js'),
      webpackLoaders = require('./resources/scripts/settings/webpack_loaders.js'),
      webpackPlugins = require('./resources/scripts/settings/webpack_plugins.js');

// Set our Webpack settings object
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
  // uncomment for sourcemaps
  // devtool: 'source-map'
};

// Add extra settings from loaders
webpackLoaders.extend(settings);

// Export settings
module.exports = settings;
