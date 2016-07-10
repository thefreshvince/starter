<?php

  /*
   *
   *  Article
   *  The general article/blogpost
   *
   */

  // Grab the navigation data
  include_once "parts/data/article.php";

  $article = $ARTICLES[0];

?>

<article class="article block--100 block--no-pad">

  <header class="article__header ratio--30">

    <div class="article__img-container">
      <img src="<?= $article['img'] ?>" class="article__img article__img--taller" alt="Article header photo" />
    </div>

    <div class="v-center">
      <div>
        <h1 class="h1"><?= $article['title'] ?></h1>
        <a href="#author" class="article__author">By Author</a> |
        <time class="article__timestamp" datetime="<?= $card['date'] ?>">
          <?= date('F j, Y', strtotime($article['date'])) ?>
        </time>
      </div>
    </div>

  </header>

  <div class="article__body container container--text">

    <div class="block--100">
      <p><?= $article['content'] ?></p>
    </div>

  </div>

  <footer class="article__footer">
    <?php

      $component_title = 'Related Articles';
      include('parts/components/cards.php');

    ?>
  </footer>

</article>
