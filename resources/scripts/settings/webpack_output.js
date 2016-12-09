// Module dependancies
const filePaths = require('./paths.js');

// Module
module.exports = {
  get: function () {
    return{
      filename: filePaths.public_js_file,
      path: filePaths.public_js
    };
  }
}
