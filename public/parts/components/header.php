<?php

  /*
   *
   *  HEADER
   *  This file is the master header for the entire site
   *
   */

  include_once "parts/data/navigation.php";

?>

<header class="header">

  <nav class="main-nav">
    <ul>
      <?php

        // Loop through the navigation elements
        foreach ($NAVIGATION as $link_title => $link_value) {

          $link_url = '';

          // Determine if the link has sub navigation
          if(is_string($link_value)) {
            $link_url = $link_value;
          } else {
            $link_url = $link_value['link'];
          }

          echo '<li><a href="' , $link_url , '" class="main-nav__link">' , $link_title , '</a>';

            // If subnav exists, loop through the items
            if(is_array($link_value)) {
              echo '<ul class="main-nav__sub">';
                foreach ($link_value as $subnav_link_title => $subnav_link_value) {
                  echo '<li><a href="' , $subnav_link_value , '" class="main-nav__link main-nav__sub-link">' , $subnav_link_title , '</a></li>';
                }
              echo '</ul>';
            }

          echo '</li>';

        }

      ?>
    </ul>
  </nav>

</header>
