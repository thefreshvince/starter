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
      this.public_js_file = '[name].bundle.js'; //'bundle.js';
      this.public_css_file = 'style.css';

    },
    paths = new Paths('./resources/','./public/');
  return paths
})();
