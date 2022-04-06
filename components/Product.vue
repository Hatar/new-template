<template>
  <div>
    <h3 class="text-center font-semibold text-3xl text-cyan-700">
      {{ title }}
      <Card :cardItems="sliceProduct" />
      <div class="flex flex-col flex-wrap justify-center my-1">
        <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        <nuxt-link to="list-products" class="text-lg py-1 px-5 text-blue">
          View All
        </nuxt-link>
      </div>
    </h3>
  </div>
</template>
<script>
import Card from "./Card.vue";
export default {
  components: { Card },
  props: {
    title: {
      type: String,
      default: "",
    },
    products: {
      type: Array,
      default: [],
    },
  },
  computed: {
    sliceProduct() {
      return this.$route.fullPath === "/"
        ? this.products.slice(0, 3)
        : this.products;
    },
  },
};
</script>
<style scoped>
i {
  color: #d1cbcb;
  font-size: 24px;
}
</style>
