<template>
    <section class="section section-lg section-shaped overflow-hidden my-0 back1" :style="{'background-image':'url(img/food.png)'}">
       
        <div class="container py-0 pb-lg">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-10 mb-5 mb-lg-0">
                    <!-- Modals -->
                    <modals></modals>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import Modals from "./JavascriptComponents/Modals";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    Modals
  }
};
</script>
<style lang="scss">

.back1 {

//   background-repeat: no-repeat;
  background-attachment: fixed;
//   background-position: center;
//   background-size: auto;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
