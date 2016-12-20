"use strict";

module.exports = {

  init_loader: function(loaders) {

    // The basic loaders
    loaders.loaders = loaders.loaders.concat([

      // Basic css loader/transpiler
      {
        test: /\.(woff|woff2|eot|ttf)$/,
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
