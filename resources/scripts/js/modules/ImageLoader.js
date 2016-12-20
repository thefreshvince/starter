/**
 *
 *  This script loads the images from the data-src
 *  Then sends a callback when they have initd
 *
 */

const imagesloaded = require('imagesloaded');

// Start of loader class
export class ImageLoader {

  /**
   *  Construct the class with the supplied loaded element
   */
  constructor (el) {

    // Set the element
    this.el = el;

    // Get images
    this.imgs = el.getElementsByTagName('img');

  }

  /**
   *  Loads the images within in the defined element
   */
  loadImages (cb) {

    // Loop through all of the images and add
    // the appropriate src values
    for (let i = 0, l = this.imgs.length; i < l; i++) {
      let src = this.imgs[i].getAttribute('data-src');
      if(!src) continue;
      this.imgs[i].setAttribute('src', src);
    }

    // Check if the images have loaded
    let loader = imagesloaded( this.el, { background: true }, cb);

    // Check progress of images in section
    // loader.on('progress', (instance, image) => {
    //   let result = image.isLoaded ? 'loaded' : 'broken';
    //   console.log( 'image is ' + result + ' for ' + image.img.src );
    // });

    // return self
    return this;

  }
}
