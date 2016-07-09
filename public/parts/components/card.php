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
      <?php if(!empty($card['img'])){ ?>
        <img src="<?= $card['img'] ?>" alt="card placeholder" class="card__img">
      <?php } ?>
      <?php if(!empty($card['title'])){ ?>
        <div class="v-center">
          <div>
            <h2 class="card__title h2"><?= $card['title'] ?></h2>
          </div>
        </div>
      <?php } ?>
    </header>

    <div class="card-body block--100">
      <?php if(!empty($card['date'])){ ?>
        <time class="card--timestamp" datetime="<?= $card['date'] ?>">
          <?= date('F j, Y', strtotime($card['date'])) ?>
        </time>
      <?php } ?>
      <?php if(!empty($card['author'])){ ?>
        <address>
          <a class="card__author" href="#">
            by <?= $card['author'] ?>
          </a>
        </address>
      <?php } ?>
      <?php if(!empty($card['excerpt'])){ ?>
        <p class="card__excerpt"><?= $card['excerpt'] ?></p>
      <?php } ?>
    </div>

    <footer class="card__footer">
      <?php if(!empty($card['tags'])){ ?>
        <ul class="card__tags ul-reset li-inline">
          <?php

            foreach ($card['tags'] as $tag) {
              echo '<li class="card__tag"><a href="#' , $tag , '">' ,
                $tag , '</a></li>';
            }

          ?>
        </ul>
      <?php } ?>
    </footer>
  </article>
</div>
