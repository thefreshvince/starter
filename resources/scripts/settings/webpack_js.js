"use strict";

const filePaths = require('./paths.js');

module.exports = {

  init_loader: function(loaders) {

    // The basic loaders
    loaders.loaders = loaders.loaders.concat([

      // Basic js loader/transpiler
      {
        test: /\.js$/,
        include: /resources\/scripts\/js/,
        loader: 'babel?presets[]=es2015'
      }

    ]);

    // the plugins used
    loaders.plugins = loaders.plugins.concat([

    ]);

  }

}
