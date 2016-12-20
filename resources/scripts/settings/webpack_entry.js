// Module dependancies
const filePaths = require('./paths.js');

// Module
module.exports = {
  get: function () {
    return {
      common: ['imagesloaded'],
      main: filePaths.source_entry_js,
    }
  }
}
