<template>
  <div class="flex flex-col bg-gray-200 h-18">
    <nav
      class="container mx-auto flex flex-col lg:flex-row md:items-center flex-shrink-0"
    >
      <div class="flex justify-between items-center lg:mr-32 p-3 md:p-0">
        <nuxt-link to="/" class="text-white text-xl"
          >Social Media Sharing Links</nuxt-link
        >
        <button
          class="border border-white px-2 py-1 rounded text-white opacity-50 hover:opacity-75 lg:hidden"
          id="navbar-toggle"
          @click="toggleMenu"
        >
          <i class="fa fa-bars" aria-hidden="true"></i>
        </button>
      </div>
      <div class="hidden lg:flex flex-grow" id="navbar-collapse">
        <div class="flex my-3 lg:my-0">
          <ul
            class="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0"
          >
            <li>
              <a href="#" class="block text-gray-400 py-2 md:mx-2">Login</a>
            </li>
            <li>
              <a href="#" class="block text-gray-400 py-2 md:mx-2">Register</a>
            </li>
          </ul>
        </div>
        <div class="flex my-3 lg:my-0">
          <ul
            class="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0"
          >
            <li>
              <a
                href="#"
                class="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
                >0 Items</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
                >Checkout</a
              >
            </li>
          </ul>
        </div>
        <ul
          class="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0"
        >
          <li>
            <a href="#" class="block text-gray-400 py-2 md:mx-2">About</a>
          </li>
          <li>
            <a href="#" class="block text-gray-400 py-2 md:mx-2">About</a>
          </li>
          <li>
            <a href="#" class="block text-gray-400 py-2 md:mx-2"
              >Partner Program</a
            >
          </li>
          <li>
            <a href="#" class="block text-gray-400 py-2 md:mx-2">Franchise</a>
          </li>
          <li>
            <a href="#" class="block text-gray-400 py-2 md:mx-2"
              >How to Order
            </a>
          </li>
          <li>
            <a href="#" class="block text-gray-400 py-2 md:mx-2">Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  methods: {
    toggleMenu() {
      let collapse = document.querySelector("#navbar-collapse");
      collapse.classList.toggle("hidden");
      collapse.classList.toggle("block");
    },
  },
};
</script>
<style scoped></style>
