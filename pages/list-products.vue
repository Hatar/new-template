<template>
  <div class="container mx-auto">
    <Breadcrumbs title="" />
    <div
      class="
        h-48
        flex
        justify-center
        content-center
        text-right
        mx-2
        text-white
        rounded-md
        mb-5
      "
      :style="{
        backgroundImage: `url('https://picsum.photos/600/100/?random');background-size:cover;background-repeat: no-repeat;background-position: center;`,
      }"
    ></div>

    <div class="flex sm:flex-row flex-col my-10">
      <div class="w-full sidebar-menu">
        <div>
          <div class="bg-gray-100 rounded p-2">
            <h3 class="font-bold text-xl text-cyan-500 uppercase">
              Filter Name
            </h3>
          </div>
          <ul class="ml-2">
            <li class="my-2">Option One</li>
            <li class="my-2">Second One</li>
            <li class="my-2">And Another</li>
            <li class="my-2">Last Option</li>
          </ul>
        </div>
        <div>
          <div class="bg-gray-100 rounded p-2">
            <h3 class="font-bold text-xl text-cyan-500 uppercase">
              Filter Name
            </h3>
          </div>
          <ul class="ml-2">
            <li class="my-2">Option One</li>
            <li class="my-2">Second One</li>
            <li class="my-2">And Another</li>
            <li class="my-2">Last Option</li>
          </ul>
        </div>
      </div>
      <div>
        <Product :title="''" :products="products" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Sub-Ex",
            price: 100,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 2,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tresom",
            price: 24,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 1,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Treeflex",
            price: 51,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 3,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Sub-Ex",
            price: 100,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 4,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Subin",
            price: 82,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 5,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tempsoft",
            price: 51,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 6,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Job",
            price: 15,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 7,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Solarbreeze",
            price: 88,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 8,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tempsoft",
            price: 24,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 8,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tempsoft",
            price: 31,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 9,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tempsoftze",
            price: 56,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 10,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "zertbfft",
            price: 200,
            titleButton: "Add to Cart",
          },
        },
      ],
    };
  },
};
</script>
<style scoped>
.sidebar-menu {
  max-width: 400px;
  margin: 30px 15px 0 0;
}
@media only screen and (min-width: 414px) {
  .sidebar-menu {
    margin: 0 7px;
  }
}
</style>
