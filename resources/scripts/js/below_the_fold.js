
import { ImageLoader } from './components/ImageLoader';

// init our section components class
class SectionComponents {

  /**
   *  Init the class with elements and styles
   */
  constructor(component_class_base) {
    this.component_class_base = component_class_base;
    this.section_components = document.getElementsByClassName(this.component_class_base),
    this.component_class_loaded = this.component_class_base + '--loaded',
    this.component_class_flag = this.component_class_base + '--component-';
    this.components = [];
  }

  /**
   *  Enter your components in here
   *  For each new module you add, add it to this switch case
   *  so that webpack knows to chunk it!
   */
  requireComponents (component_name, el) {

    // Set the component object
    let component_obj = {
      name: component_name,
      el: el
    };

    // For debugging purposes
    // alert('Loading a ' + component_name);

    // Check to see if the class matches any of our components
    switch (component_name) {
      // case 'Class modifier identifier':
      //   require.ensure( ['./components/COMPONENT.js'], () => {
      //     require('./components/COMPONENT.js');
      //     this.loadComponentSection(el);
      //   });
      //   break;

      case 'footer':
        require.ensure( ['./footers/_site.js'], (v) => {
          require('./footers/_site.js');
          this.loadComponentSection(component_obj);
        });
        break;
    }

    // Add this component to the component list
    this.components.push(component_obj);
  }

  /**
   *  Loops through the classes and loads their modules
   */
  loadComponents() {

    // Make a shortcut
    let section_components = this.section_components;

    // Loop through DOM components
    for (let i = 0, l = section_components.length; i < l; i++) {

      // Get the classes that the component has
      let el = section_components[i],
          classes = el.classList,
          component_name = '';

      // Loop through the classes until we reach required component
      for (let j = 0, m = classes.length; j < m; j++) {
        if(classes[j].indexOf(this.component_class_flag) < 0) continue;
        component_name = classes[j].replace(this.component_class_flag, '');
      }

      // Continue to next component if no components were found
      if(component_name == '') continue;

      // Include necessary component
      this.requireComponents(component_name, el);

    }
  }

  /**
   *  Anything you want to do to the compoenent after it loads
   *  ex. add a class
   */
  loadComponentSection (section) {

    // Get the section and create a new image loader object
    let image_loader = new ImageLoader(section.el);

    // Let the console know we loaded the section
    console.log('Loaded a new ' + section.name + ' component!');

    // Check images in section and load the section
    // after they have loaded
    image_loader.loadImages( e => {
      section.el.classList.add(this.component_class_loaded);
    });
  }

}

// New it up!
new SectionComponents('section-component').loadComponents();
