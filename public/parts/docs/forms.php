<?php

  /*
   *
   *  Forms
   *  Lists all the form elements for visual reference
   *
   */

  include_once("parts/data/form-elements.php");

?>

<section class="block--100 block--no-pad">

  <form action="#">

    <div class="container cards">

      <?php

        foreach ($FORMELEMENTS as $name => $element) {

          $code = htmlentities(str_replace('<br/>', "\n", $element));
          $html = $element;

          $card = [
            'title'   => $name,
            'excerpt' => '<pre><code>' . $code . '</code></pre><br/>'.$html,
            'img'     => 'http://placehold.it/350x200/ffffff/ffffff'

          ];

          include("parts/components/card.php");

        }

      ?>

    </div>

  </form>

</section>
