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
Footer | public/parts/components/footer.php, public/parts/data/navigation.php, and resources/styles/scss/layout/\_footer.scss | The main footer of the site.
Utility Footer | public/parts/components/util-footer.php, public/parts/data/utility_footer-navigation.php, and resources/styles/scss/layout/\_util-footer.scss | the utility footer may be considered a quick sitemap/contact for the site.
Card | public/parts/components/cards.php, public/parts/components/card.php, public/parts/data/cards.php, resources/styles/scss/components/\_card.scss | Card component for displaying articles or other content in card form.
Article | public/parts/components/article.php, public/parts/data/articles.php, and resources/styles/scss/components/\_article.scss | Aricle component for displaying full articles on a page. Most common usage is blog posts.
Newsletter | public/parts/components/newsletter.php, resources/scripts/js/components/\_newsletter-submit.js, and resources/styles/scss/components/\_newsletter.scss | A mailchimp based newsletter signup form (AJAXED sin jQuery).
Sticky Elements | resources/scripts/js/components/\_sticky-elements.js and resources/styles/scss/components/\_sticky-elements.scss | An element sticking engine that handles header stickiness and random element stickiness relative to their containers.
Swipers | public/parts/components/swiper.php, resources/scripts/js/components/\_swiper.js, public/assets/js/vendor/swiper.min.js, public/assets/css/vendor/swiper.min.css, and resources/styles/scss/components/\_swiper.scss | Using the idangerous swiper which does not require the use of a third party library such as jQuery. The files are included in the html as seperate requests since the slider files should NOT be used on every page. See swiper docs for more info http://idangero.us/swiper/api.

##Helper Classes
These helper classes are easy ways to manipulate elements without having to bloat your css.

ClassNames | Description
--- | ---
.v-center | Vetically centers content (flexbox alternative) within a container with with a height and width. (does not work in something with height or width of 0 and container needs to be positioned relative/absolute/fixed).
.show-on-mobile | Hides the element on desktop resolutions.
.hide-on-mobile | Hides the element on mobile resolutions.
.ul-reset | Resets the UL elements.
.li-inline | Inlines the LI elements. To be applied on the UL element.
.flr | Floats to the right.
.fll | Floats to the left.
.clearfix | Clears elements relative to each other.

##Variables
The following are the variables that manipulate the site as a whole.

VariableNames | Default | Description
--- | --- | ---
$color-primary | #0A94A2 | The main color site color
$color-secondary | #FB9F0F | The complimentary site color
$color-tertiary | #D81E7E | The accenting site color
$color-black | #030001 | Off black
$color-white | #fff | White
__Typography__ | |
$font-size | 16px | The base, general font size.
$fonts | 0: (font-family: Cutive Mono, font-style: normal, font-weight: normal) | A map of all fonts accessible via index
__Media Queries__ | |
$mq | desktop: 1200px, tablet-port: 959px, mobile-land: 767px, mobile-port: 479px | A map of all media queries used throughout the sass. Add/Edit new MQs here to allow propagation throughout.
__Aspect Ratios__ | |
$ratios | 100: 100%, 50: 50%, 30: 30%, widescreen: 56.25% | Sets the allowable ratio classes for content that needs fixed ratio regardless of screen res.
__Layout sizes__ | |
$container-width | 1200px | The base container width.
$layout | 100, 66.666666, 50, 33.333333, 25, 20 | The different layout sizes used via the '.block--x' classes.
__Gutters__ | |
$gutter-width | 20px | The general gap distance between elements across the site.
__Transitions__ | |
$transition-length | 0.25s | The length of css transitions. you should use this var in as many instances as possible even if it's a factor of it (ex. $transition-length * 2) so that if you need to speed up or slow down the site's animation speed overall, it's just a matter of changing one var.
__Header__ | |
$header-height | 90px | The height of the header element
__Main Navigation__ | |
$nav-height | $header-height - 30px | the height of the main navigation within the header.
__Utility header__ | |
$utility-height | $header-height - $nav-height | If there's remaining space between the header height and the nav height, the rest of it is used on the utility header for non essential links like social and settings.
__Footer__ | |
$footer-height | 50px | sets the height of the footer and allows for the footer to be sticky.
