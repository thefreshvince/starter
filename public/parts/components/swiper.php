<?php

  /*
   *
   *  SWIPER
   *  Using the Idangerous Swiper
   *  http://idangero.us/swiper/api
   *
   */

  include_once "parts/data/swiper.php";

?>

<div class="swiper-container block--100">

    <div class="swiper-wrapper">
      <?php

        foreach ($SWIPER as $slide_key => $slide) {

          ?>

            <div class="swiper-slide">
              <div class="swiper-slide__inner">

                <div class="v-center">
                  <div>
                    <h1><?= $slide ?></h1>
                  </div>
                </div>

              </div>
            </div>

          <?php

        }

      ?>
    </div>

    <div class="swiper-pagination"></div>

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <div class="swiper-scrollbar"></div>

</div>
