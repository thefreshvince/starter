// Module dependancies
const ExtractTextPlugin = require("extract-text-webpack-plugin"),
      filePaths = require('./paths.js');

// Module
Loaders = {

  // Plugins used by loaders
  plugins: [],

  // Loaders
  loaders: [],

  init: function(){

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

    // return this object
    return this;

  },

  // Returns the loaders
  getUsedPlugins: function () {
    return this.plugins;
  },

  // Returns the used plugins
  getLoaders: function () {
    return this.loaders;
  }

};

// Export the obj
module.exports = Loaders.init();
