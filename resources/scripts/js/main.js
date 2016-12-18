/**
 *  Build our styles
 *  Change to style.scss if you want to compile all in one go
 *  however it is not advised to do it like so due to performance purposes
 */
require('../../styles/scss/common.scss');

/**
 *  Sets the filepath relative to the page
 *  @type {String}
 */
__webpack_public_path__ = '/assets/js/';

/**
 *
 */
require.ensure(
  ['./below_the_fold.js'],
  () => require('./below_the_fold.js')
);
