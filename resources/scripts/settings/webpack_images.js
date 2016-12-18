"use strict";

const filePaths = require('./paths.js');

module.exports = {

  init_loader: function(loaders) {

    // The basic loaders
    loaders.loaders = loaders.loaders.concat([

      // Basic css loader/transpiler
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: /resources/,
        loaders: [
            'url?limit=10000&name=../img/[hash].[ext]',
            'img?minimize&optimizationLevel=5&progressive=true'
        ]
      }

    ]);

    // the plugins used
    loaders.plugins = loaders.plugins.concat([]);

  }

}
