"use strict";

const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true})
  ],
  get: function () {
    return this.plugins;
  }
}
