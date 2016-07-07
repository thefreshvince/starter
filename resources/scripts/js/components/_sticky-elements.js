/**
 *
 *  Sticky Elements
 *  Sticks the element to the top of the screen relative to the parent and scoll.
 *
 */

(function(){

  var sticky_elements = document.getElementsByClassName('sticky'),
      Sticky = function(el){
        this.el = el;
        this.par = el.parentNode;
        this.el_start = null; // determined by a bunch of things
        this.el_end = null; // determined by a bunch of things
        this.init();
      };

  Sticky.prototype.scroll = function () {};

  Sticky.prototype.resize = function () {};

  Sticky.prototype.init = function () {
    window.addEventListener('resize', this.resize);
    window.addEventListener('scroll', this.scroll);
  };

})();
