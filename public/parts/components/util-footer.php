<?php

  /*
   *
   *  UTILITY FOOTER
   *  A sitemap of sorts that can be found just before the footer
   *
   */

  // Grab the navigation data
  include_once "parts/data/utility_footer-navigation.php";

?>

<section class="util-footer block--100">

  <div class="container">

    <div class="block--100 block--50-ml block--25-dt">
      <h2 class="h5">Link List 1</h2>
      <ul class="ul-reset">
        <?php

          for ($i=0; $i < 5; $i++) {
            echo '<li><a href="#' , $i , '" class="util-footer__link">Link ' , $i , '</a></li>';
          }

        ?>
      </ul>
    </div>

    <div class="block--100 block--50-ml block--25-dt">
      <h2 class="h5">Link List 2</h2>
      <ul class="ul-reset">
        <?php

          for ($i=0; $i < 8; $i++) {
            echo '<li><a href="#' , $i , '" class="util-footer__link">Link ' , $i , '</a></li>';
          }

        ?>
      </ul>
    </div>

    <div class="block--100 block--50-ml block--25-dt">
      <h2 class="h5">Contact</h2>
      <p class="contact-address">
        <span class="street-address">Brocolli Union</span><br>
        <span class="region">Saladville</span><br>
        <span class="postal-code">Z0K 2GP</span><br>
        <span class="country-name">Canada</span>
      </p>
      <p class="tel">+1 (555) 555 5555</p>
      <?php include "parts/components/social-nav.php"; ?>
    </div>

    <div class="block--100 block--50-ml block--25-dt">
      <h2 class="h5">Newsletter</h2>
      <?php include 'parts/components/newsletter.php'; ?>
    </div>

  </div>

</section>
