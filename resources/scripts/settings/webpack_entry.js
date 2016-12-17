// Module dependancies
const filePaths = require('./paths.js');

// Module
module.exports = {
  get: function () {
    return {
      common: [],
      bundle: filePaths.source_entry_js,
  }
}
