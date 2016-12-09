module.exports = (function(){
  var Paths = function(entry_base, output_base){
      this.entry_base = entry_base;
      this.output_base = output_base;
      this.relative_base = '../../';
      this.relative_base_assets = this.relative_base + 'assets/';
      this.public_assets = this.output_base + 'assets/';

      // Source files
      this.source_entry_js = entry_base + 'scripts/js/main.js';

      // Output directories
      this.public_css = this.public_assets + 'css/';
      this.public_js = this.public_assets + 'js/';

      // Output files
      this.public_js_file = 'bundle.js';
      this.public_css_file = 'style.css';

      // this.dest = './public/';
      // this.assets = this.dest+'assets/';
      // this.node = './node_modules/';
      //
      // this.scriptsSrc = this.src+'scripts/';
      // this.markupSrc = this.src+'markup/';
      // this.stylesSrc = this.src+'styles/';
      //
      // this.jsSrc = this.scriptsSrc+'js/';
      // this.cssSrc = this.stylesSrc+'css/';
      // this.scssSrc = this.stylesSrc+'scss/';
      // this.htmlSrc = this.markupSrc+'html/';
      //
      // this.jsDest = this.assets+'js/';
      // this.cssDest = this.assets+'css/';
      //
      // this.jsVendors = [
      //   this.jsSrc + 'vendor/**/*.js',
      //   this.node + 'lory.js/dist/lory.min.js'
      // ];
    },
    paths = new Paths('./resources/','./public/');
  return paths
})();
