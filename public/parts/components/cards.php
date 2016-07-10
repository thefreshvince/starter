<?php

  /*
   *
   *  Cards
   *  The container for grouped cards
   *
   */

  // Grab the navigation data
  include_once "parts/data/cards.php";

?>

<section class="cards-wrapper block--100 block--no-pad">

  <?php

    if(!empty($component_title)){
      echo "<h1 class=\"h1 cards-title\">$component_title</h1>";
      unset($component_title);
    }

  ?>

  <div class="cards container">

    <?php

      foreach ($CARDS as $card) {
        include "parts/components/card.php";
      }

    ?>

  </div>

</section>
