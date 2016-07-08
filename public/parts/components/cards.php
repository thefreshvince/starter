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

<div class="cards-wrapper block--100 block--no-pad">

  <div class="cards container">

    <?php

      foreach ($CARDS as $card) {
        include "parts/components/card.php";
      }

    ?>

  </div>

</div>
