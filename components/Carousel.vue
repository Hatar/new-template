<template>
  <div class="carousel">
    <client-only>
      <VueSlickCarousel v-bind="settings" :slides-to-scroll="slidesToScroll">
        <div
          v-for="(slider, idx) in sliders"
          :key="idx"
          :style="{
            backgroundImage: `url(${slider.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '500px',
          }"
          class="
            h-[300px]
            flex
            justify-center
            content-center
            text-right
            px-5
            text-white
            rounded-md
          "
        >
          <div class="w-96 ml-auto">
            <h1 class="text-2xl font-normal mt-10 my-3">
              {{ slider.title }}
            </h1>
            <p class="text-xl">{{ slider.decription }}</p>
          </div>
        </div>
      </VueSlickCarousel>
    </client-only>
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
