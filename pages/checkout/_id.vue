<template>
  <div class="container mx-auto">
    <Breadcrumbs title="" />
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak>
              <!-- <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div
                    x-show="image === 1"
                    class="
                      h-64
                      md:h-80
                      rounded-lg
                      bg-gray-100
                      mb-4
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span class="text-5xl">1</span>
                  </div>

                  <div
                    x-show="image === 2"
                    class="
                      h-64
                      md:h-80
                      rounded-lg
                      bg-gray-100
                      mb-4
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span class="text-5xl">2</span>
                  </div>

                  <div
                    x-show="image === 3"
                    class="
                      h-64
                      md:h-80
                      rounded-lg
                      bg-gray-100
                      mb-4
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span class="text-5xl">3</span>
                  </div>

                  <div
                    x-show="image === 4"
                    class="
                      h-64
                      md:h-80
                      rounded-lg
                      bg-gray-100
                      mb-4
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span class="text-5xl">4</span>
                  </div>
                </div> -->

              <!-- <div class="flex -mx-2 mb-4">
                  <template x-for="i in 4">
                    <div class="flex-1 px-2">
                      <button
                        x-on:click="image = i"
                        :class="{
                          'ring-2 ring-indigo-300 ring-inset': image === i,
                        }"
                        class="
                          focus:outline-none
                          w-full
                          rounded-lg
                          h-24
                          md:h-32
                          bg-gray-100
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <span x-text="i" class="text-2xl"></span>
                      </button>
                    </div>
                  </template>
                </div> -->
            </div>
          </div>
          <div class="md:flex-1 px-4 h-96">
            <h2
              class="
                mb-2
                leading-tight
                tracking-tight
                font-bold
                text-gray-800 text-2xl
                md:text-3xl
              "
            >
              {{ getSingleProduct.infoProduct.title }}
            </h2>
            <p class="text-gray-500 text-sm border-b">
              {{ getSingleProduct.infoProduct.description }}
            </p>

            <div class="flex flex-wrap -mx-2 py-5">
              <div class="w-full lg:w-1/2 px-2">
                <div class="h-12 text-sm text-grey-dark">
                  <p class="my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, eius.
                  </p>
                  <p class="my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, eius.
                  </p>
                  <div
                    class="
                      flex flex-col
                      justify-center
                      align-center
                      bg-red-500
                      py-5
                      text-center
                    "
                  >
                    <h2 class="text-lg font-normal tracking-wide">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <button
                      class="
                        bg-gray-700
                        text-white text-lg
                        my-3
                        py-2
                        px-2
                        rounded
                        text-white
                        w-32
                        mx-auto
                      "
                    >
                      Learn More
                    </button>
                  </div>
                  <p class="py-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus, eius sum dolor sit amet consectetur adipisicing
                    elit. Possimus, eius.
                  </p>
                </div>
              </div>
              <div class="w-full lg:w-1/2 px-2">
                <div class="h-12 text-sm text-grey-dark">
                  <p>full / half</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getSingleProduct() {
      return this.$store.getters.getProducts.find(
        (item) => item.id === +this.$route.params.id
      );
    },
  },
};
</script>

<style>
</style>