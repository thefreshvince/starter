export class ComponentList {
  constructor () {}
  getComponent (component_obj){
    switch (component_obj.name) {

      // case 'test':
      //   require.ensure( ['../components/test.js'], (v) => {
      //     require('../components/test.js');
      //     this.loadComponentSection(component_obj);
      //   });
      //   break;

      case 'footer':
        require.ensure( ['../footers/_site.js'], (v) => {
          require('../footers/_site.js');
          this.loadComponentSection(component_obj);
        });
        break;

    }
  }
}
