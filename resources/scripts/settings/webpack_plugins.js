"use strict";

const WebpackNotifierPlugin = require('webpack-notifier'),
      CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin");

module.exports = {
  plugins: [
    new WebpackNotifierPlugin({alwaysNotify: true}),
    new CommonsPlugin({
      minChunks: 3,
      name: "common"
    })
  ],
  get: function () {
    return this.plugins;
  }
}
