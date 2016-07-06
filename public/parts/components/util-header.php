<?php

  /*
   *
   *  UTILITY HEADER
   *  This is the top most navigation bar on the website containing non
   *  essential links
   *
   */

  // Grab the navigation data
  include_once "parts/data/utility-navigation.php";

?>

<div class="util-header">

  <?php include 'parts/components/social-nav.php'; ?>

  <ul class="util-header__nav">
    <?php
      foreach ($UTILITYNAVIGATION as $link_title => $link_value) {
        echo '<li class="util-header__item">',
          '<a class="util-header__link" href="' , $link_value , '">' ,
          $link_title ,
          '</a></li>';
      }
    ?>
  </ul>

</div>
