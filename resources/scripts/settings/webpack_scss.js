"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
      filePaths = require('./paths.js');

module.exports = {

  init_loader: function(loaders) {

    // Moves the css into its own file
    let extractSCSS = new ExtractTextPlugin(
      filePaths.relative_base_assets + 'css/' + filePaths.public_css_file
    );

    // The basic loaders
    loaders.loaders = loaders.loaders.concat([

      // Basic css loader/transpiler
      {
        test: /style\.scss$/,
        include: /resources\/styles\/scss/,
        loader: extractSCSS.extract(['css','sass'])
      },

      // Basic css loader/transpiler
      {
        test: /\.scss$/,
        include: /resources\/styles\/scss/,
        exclude: /style\.scss$/,
        loader: 'style!css!sass'
      }

    ]);

    // the plugins used
    loaders.plugins = loaders.plugins.concat([
      extractSCSS
    ]);

  }

}
