<?php

  /*
   *
   *  SWIPER
   *  Using the Idangerous Swiper
   *  http://idangero.us/swiper/api
   *
   */

?>

<div class="swiper-container">

    <div class="swiper-wrapper">
      <?php

        for ($i=0; $i < 5; $i++) {

          ?>

            <div class="swiper-slide">
              <div class="swiper-slide__inner">

                <div class="v-center">
                  <div>
                    <h1>Slide <?= $i ?></h1>
                  </div>
                </div>
                
              </div>
            </div>

          <?php

        }

      ?>
    </div>

    <!-- <div class="swiper-pagination"></div> -->

    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- <div class="swiper-scrollbar"></div> -->

</div>
