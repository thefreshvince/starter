<?php

  include('functions.php');

?><!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Cut your veggies</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="/assets/css/vendor/swiper.min.css">
  <link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>

  <?php include('parts/components/header.php'); ?>

  <?php include('parts/docs/hero.php'); ?>

  <?php include('parts/components/swiper.php'); ?>

  <?php

    $component_title = 'Cards';
    include('parts/components/cards.php');

  ?>

  <?php include('parts/components/article.php'); ?>

  <?php include('parts/docs/forms.php'); ?>

  <?php include('parts/components/footer.php'); ?>

  <script src="/assets/js/vendor/swiper.min.js" charset="utf-8"></script>
  <script src="/assets/js/all.js" charset="utf-8"></script>

</body>
</html>
