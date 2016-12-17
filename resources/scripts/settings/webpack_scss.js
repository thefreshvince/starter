const ExtractTextPlugin = require("extract-text-webpack-plugin"),
      filePaths = require('./paths.js');

module.exports = {

  init_loader: function() {

    // Moves the css into its own file
    this.extractSCSS = new ExtractTextPlugin(
      filePaths.relative_base_assets + 'css/' + filePaths.public_css_file
    );

    // The basic loaders
    this.loaders = [

      // Basic css loader/transpiler
      {
        test: /style\.scss$/i,
        loader: this.extractSCSS.extract(['css','sass'])
      }

    ];

    // the plugins used
    this.plugins = [this.extractSCSS];

  }

}
