<?php

  /*
   *
   *  HEADER
   *  This file is the master header for the entire site
   *
   */

?>

<header class="header">

  <?php include "parts/components/util-header.php"; ?>

  <a href="/" class="logo__link fll">
    <svg class="logo" viewbox="0 0 340 60">
      <text fill="#ffffff"
            font-size="35"
            font-family="Cutive Mono"
            alignment-baseline="middle"
            x="0"
            y="32">
        Cut Your Veggies
      </text>
    </svg>
  </a>

  <?php include "parts/components/main-nav.php"; ?>

</header>
