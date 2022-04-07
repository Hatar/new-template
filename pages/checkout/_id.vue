<template>
  <div class="container mx-auto">
    <Breadcrumbs title="Product Name" />
    <div class="py-6 px-2">
      <div class="max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
        <div class="flex flex-col md:flex-row -mx-4">
          <div class="md:flex-1">
            <div
              class="
                h-80
                bg-slate-300
                w-full
                rounded
                flex
                justify-center
                items-center
                bg-color
              "
            >
              <span
                class="font-semibold text-2xl mx-3 md:mx-0 mb-4 text-cyan-700"
                id="gallery"
                >1</span
              >
            </div>
            <div class="flex flex-wrap justify-between my-5 w-96 md:w-auto">
              <div
                class="
                  rounded
                  w-20
                  md:w-32
                  h-20
                  md:h-32
                  bg-color
                  flex
                  justify-center
                  items-center
                  cursor-pointer
                "
                data-id="1"
                @click="switchBackground"
              >
                1
              </div>
              <div
                class="
                  rounded
                  w-20
                  md:w-32
                  h-20
                  md:h-32
                  bg-color
                  flex
                  justify-center
                  items-center
                  cursor-pointer
                "
                data-id="2"
                @click="switchBackground"
              >
                2
              </div>
              <div
                class="
                  rounded
                  w-20
                  md:w-32
                  h-20
                  md:h-32
                  bg-color
                  flex
                  justify-center
                  items-center
                  cursor-pointer
                "
                data-id="3"
                @click="switchBackground"
              >
                3
              </div>
              <div
                class="
                  rounded
                  w-20
                  md:w-32
                  h-20
                  md:h-32
                  bg-color
                  flex
                  justify-center
                  items-center
                  cursor-pointer
                "
                data-id="4"
                @click="switchBackground"
              >
                4
              </div>
            </div>
          </div>
          <div class="md:flex-1 px-4 section-h">
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

            <div class="flex flex-col md:flex-row -mx-2 py-5">
              <div class="w-full lg:w-1/2 px-2">
                <div class="text-sm text-grey-dark">
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
                      py-4
                      text-center
                      block
                    "
                  >
                    <h2 class="text-lg font-normal tracking-wide">
                      Lorem ipsum dolor sit amet.
                    </h2>
                    <button
                      class="
                        bg-gray-700
                        text-white text-lg
                        my-2
                        py-1
                        rounded
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
                <div class="text-sm text-grey-dark mb-10">
                  <div class="flex flex-row justify-center"></div>
                  <ul>
                    <li class="flex justify-between items-center my-2">
                      <div>Price :</div>
                      <div>$ {{ getSingleProduct.infoProduct.price }}</div>
                    </li>
                    <li class="flex justify-between items-center my-2">
                      <div>Qyuantity :</div>
                      <div class="border rounded flex">
                        <input
                          type="number"
                          class="py-1 px-2"
                          placeholder="Qyuantity..."
                        />
                      </div>
                    </li>
                    <li class="flex justify-between items-center my-2">
                      <div>Color :</div>
                      <select
                        class="
                          cursor-pointer
                          appearance-none
                          rounded-xl
                          border border-gray-200
                          w-10
                          text-center
                          h-10
                          flex
                          items-end
                          pb-1
                        "
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </li>
                    <button
                      class="
                        bg-blue-500
                        hover:bg-blue-700
                        text-lg
                        py-1
                        px-5
                        mb-2
                        text-white
                        font-bold
                        rounded
                        block
                      "
                    >
                      ADD TO CART
                    </button>
                    <span class="text-md font-medium tracking-wide"
                      >Share This</span
                    >
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-10 section-product">
      <Product
        :title="'You May also be interested in :'"
        :products="products"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    switchBackground(e) {
      let valueDiv = e.target.attributes["data-id"].nodeValue;
      document.querySelector("#gallery").innerHTML = valueDiv;
    },
  },
  computed: {
    getSingleProduct() {
      return this.$store.getters.getProducts.find(
        (item) => item.id === +this.$route.params.id
      );
    },
    ...mapGetters({
      products: "getProducts",
    }),
  },
};
</script>

<style scoped>
.section-h {
  height: 500px;
}
@media only screen and (min-width: 414px) {
  .section-product {
    margin-top: 80px;
  }
}
.bg-color {
  background-color: rgb(228 228 231);
}
</style>
