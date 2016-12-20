"use strict";

module.exports = {

  init_loader: function(loaders) {

    // The basic loaders
    loaders.loaders = loaders.loaders.concat([

      // Basic css loader/transpiler
      {
        test: /\.(png|woff(2)?|eot|ttf|svg)(\?.+)?$/,
        include: /resources/,
        loaders: [
            'url?limit=10000&name=../img/[hash].[ext]',
        ]
      }

    ]);

    // the plugins used
    loaders.plugins = loaders.plugins.concat([]);

  }

}
