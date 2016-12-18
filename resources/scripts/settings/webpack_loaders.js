"use strict";

// Module
const Loaders = {

  // Plugins used by loaders
  plugins: [],

  // Loaders
  loaders: [],

  // Extra settings
  extended_settings: [],

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

  // Returns the used plugins
  get: function () {
    return this.loaders;
  },

  // Returns the loaders
  getUsedPlugins: function () {
    return this.plugins;
  },

  // Extends the base settings
  extend: function (settings) {
    for (var i = 0, l = this.extended_settings.length; i < l; i++) {
      settings[this.extended_settings[i].name] = this.extended_settings[i].settings;
    }
  }

};

// Export the obj
module.exports = Loaders.init();
