<template>
  <div class="container my-6 mx-auto">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div
        v-for="(card, index) in cardItems"
        :key="index"
        class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
      >
        <article class="overflow-hidden rounded-lg shadow-lg">
          <a href="#">
            <img
              alt="Placeholder"
              class="block h-42 w-full"
              :src="card.image"
            />
          </a>
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4"
            v-if="card.infoProduct"
          >
            <h1 class="text-lg">
              <a class="no-underline text-black" href="#">
                {{ card.infoProduct.title }}</a
              >
            </h1>
            <p class="text-grey-darker text-sm">
              $ {{ card.infoProduct.price }}
            </p>
          </header>
          <div
            class="flex flex-wrap justify-center my-5"
            v-if="card.infoProduct"
          >
            <button
              class="bg-blue-500 hover:bg-blue-700 text-lg py-1 px-5 text-white"
            >
              {{ card.infoProduct.titleButton }}
            </button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cardItems: {
      type: Array,
      default: [],
    },
  },
};
</script>
<style scoped></style>
