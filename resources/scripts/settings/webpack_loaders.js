"use strict";

// Module
const Loaders = {

  // Plugins used by loaders
  plugins: [],

  // Loaders
  loaders: [],

  // Sets the loader inits
  loader_inits: [
    require('./webpack_scss.js'),
    require('./webpack_js.js'),
    require('./webpack_images.js')
  ],

  init: function(){

    // Init loaders
    for (var i = 0, l = this.loader_inits.length; i < l; i++) {
      this.loader_inits[i].init_loader(this);
    }

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
