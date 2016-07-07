#A simple starter kit for front-end devs
Web development is a lot like cooking... well sorta, I mean you shouldn't go kniving your monitor. Cut your veggies was born out of my personal want to quickly develop deployable non weighted front-end files.

##Components
There are many components that make up this starter. You may pick and choose depending on what best fits your project. Omitting certain components will reduce the overall weight of the project allowing it to better preform on mobile devices and desktops alike.

Component | Locations | Description
--- | --- | ---
Header | public/parts/components/header.php and resources/styles/scss/layout/\_header.scss | The main header for the site containing the main navigation and other necessary navigational links.
Main Navigation | public/parts/components/main-nav.php, public/parts/data/navigation.php, and resources/styles/scss/components/\_main-nav.scss | The principal navigation for the site.
Utility Header | public/parts/components/util-header.php, public/parts/data/utility-navigation.php, and resources/styles/scss/components/\_util-header.scss | The utility header contains all non essential links for the site but still things that may be important for return or decisive visitors.
Social Navigation | public/parts/components/social-nav.php, public/parts/data/social-links.php, and resources/styles/scss/components/\_social-nav.scss | Displays the social links and icons via font-awesome.
Sidetap | public/parts/components/main-nav.php (within), resources/scripts/js/components/\_sidetap.js, and resources/styles/scss/components/\_side-tap.scss | Allows for hamburger menu to be displayed at lower resolutions and is accompanied by a simple class toggling js script.

##Helper Classes

Class | Description
--- | ---
.v-center | Vetically centers content (flexbox alternative) within a container with with a height and width. (does not work in something with height or width of 0 and container needs to be positioned relative/absolute/fixed)
.show-on-mobile | Hides the element on desktop resolutions
.hide-on-mobile | Hides the element on mobile resolutions
.ul-reset | Resets the UL elements
.flr | Floats to the right
.fll | Floats to the left
