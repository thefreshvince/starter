
// Import modules
import { ImageLoader } from './modules/ImageLoader';
import { ComponentList } from './modules/ComponentList';

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
    this.componentList = new ComponentList().getComponent;
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
      el: el,
      start_time: new Date().getTime()
    };

    // For debugging purposes
    // alert('Loading a ' + component_name);

    // Load up the new component
    this.componentList(component_obj);

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
    let image_loader = new ImageLoader(section.el),
        start_time = !section.start_time ? new Date().getTime() : section.start_time ;

    // Check images in section and load the section
    // after they have loaded
    image_loader.loadImages( e => {

      // Sets the end time
      let end_time = new Date().getTime();

      // Let the console know we loaded the section
      console.log('Loaded a new ' + section.name + ' component!');
      console.log('Loaded in: ' + ((end_time - start_time) / 1000) + 's' );
      console.log('============================================');

      // Add the loaded class
      section.el.classList.add(this.component_class_loaded);

    });
  }

}

// New it up!
new SectionComponents('section-component').loadComponents();
