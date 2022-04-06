<template>
  <div class="carousel">
    <VueSlickCarousel v-bind="settings" :slides-to-scroll="slidesToScroll">
      <div
        v-for="(slider, idx) in sliders"
        :key="idx"
        :style="{
          backgroundImage: `url('${slider.image}');background-size:cover;background-repeat: no-repeat;background-position: center;`,
        }"
        class="h-96 flex justify-center content-center text-right px-5 text-white rounded-md"
      >
        <div class="w-96 ml-auto">
          <h1 class="text-2xl font-normal mt-10 my-3">
            {{ slider.title }}
          </h1>
          <p class="text-xl">{{ slider.decription }}</p>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  props: {
    sliders: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      settings: {
        arrows: true,
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  computed: {
    slidesToScroll() {
      return (process.client &&
        document.getElementsByTagName("html")[0].getAttribute("dir")) === "rtl"
        ? 1
        : 1;
    },
  },
};
</script>
<style scoped>
.carousel {
  margin-bottom: 50px;
}
.carousel >>> .slick-dots li button:before {
  font-size: 14px !important;
}
.carousel .slick-dots {
  bottom: -32px;
}
</style>
