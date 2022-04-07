<template>
  <div>
    <h3
      class="font-semibold text-2xl mx-3 md:mx-0 mb-4 text-cyan-700"
      :class="{ 'text-center': $route.name !== 'checkout-id' }"
      v-if="title !== ''"
    >
      {{ title }}
    </h3>
    <Card :cardItems="sliceProduct" />
    <div
      class="flex flex-col flex-wrap content-center text-center"
      v-if="!['list-products', 'checkout-id'].includes($route.name)"
    >
      <i class="fa fa-long-arrow-right text-center" aria-hidden="true"></i>
      <nuxt-link to="list-products" class="text-lg py-1 px-5 text-blue">
        View All
      </nuxt-link>
    </div>
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
      return this.$route.fullPath === "/" || this.$route.name === "checkout-id"
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
