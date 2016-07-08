<?php

  /*
   *
   *  Card
   *  The individual card include
   *
   */

?>

<div class="card__wrapper block--100 block--50-ml block--one-third-tp">
  <article class="card">
    <header class="card__header">
      <img src="http://placehold.it/350x200/ffffff/ffffff" alt="card placeholder" class="card__img">
      <div class="v-center">
        <div>
          <h2 class="card__title h2"><?= $card['title'] ?></h2>
        </div>
      </div>
    </header>

    <div class="card-body block--100">
      <time class="card--timestamp" datetime="<?= $card['date'] ?>">
        <?= date('F j, Y', strtotime($card['date'])) ?>
      </time>
      <address>
        <a class="card__author" href="#">
          by <?= $card['author'] ?>
        </a>
      </address>
      <p class="card__excerpt"><?= $card['excerpt'] ?></p>
    </div>

    <footer class="card__footer">
      <ul class="card__tags ul-reset li-inline">
        <?php

          foreach ($card['tags'] as $tag) {
            echo '<li class="card__tag"><a href="#' , $tag , '">' ,
              $tag , '</a></li>';
          }

        ?>
      </ul>
    </footer>
  </article>
</div>
