"use strict";

const ExtractTextPlugin = require("extract-text-webpack-plugin"),
      filePaths = require('./paths.js'),
      autoprefixer = require('autoprefixer');

module.exports = {

  init_loader: function(loaders) {

    // Moves the css into its own file
    let extractSCSS = new ExtractTextPlugin(
      filePaths.relative_base_assets + 'css/' + filePaths.common_css_file
    );

    // The basic loaders
    loaders.loaders = loaders.loaders.concat([

      // Basic css loader/transpiler
      {
        // Change to /common\.scss$/ if you want to load all at once
        // However you should use the above/below pattern (see Vince)
        test: /common\.scss$/,
        include: /resources\/styles\/scss/,
        loader: extractSCSS.extract([
          'css',
          'postcss',
          'sass'
        ])
      },

      // Basic css loader/transpiler
      {
        test: /\.scss$/,
        include: /resources\/styles\/scss/,
        exclude: /(style|common)\.scss$/,
        loader: 'style!css!postcss!sass'
      }

    ]);

    // Extended css settings
    loaders.extended_settings = loaders.extended_settings.concat([
      {
        'name': 'postcss',
        'settings': [ autoprefixer({ browsers: ['last 2 versions'] }) ]
      }
    ]);

    // the plugins used
    loaders.plugins = loaders.plugins.concat([
      extractSCSS
    ]);

  }

}
