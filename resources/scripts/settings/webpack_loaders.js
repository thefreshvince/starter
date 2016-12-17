// Module dependancies
const webpack_scss = require('./webpack_scss.js');

// Module
Loaders = {

  // Plugins used by loaders
  plugins: [],

  // Loaders
  loaders: [],

  webpack_scss: webpack_scss.init_loader,

  init: function(){

    // init scss loaders
    this.webpack_scss();

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
