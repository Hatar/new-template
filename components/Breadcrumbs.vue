<template>
  <div class="max-w-7xl mx-auto my-5 mx-3 md:mx-0">
    <div class="flex items-center space-x-2 text-gray-400 text-sm">
      <a href="#" class="hover:underline hover:text-gray-600">Home</a>
      <span>
        <svg
          class="h-5 w-5 leading-none text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>

      <a
        href="#"
        class="hover:underline hover:text-gray-600"
        v-if="['checkout-id', 'list-products'].includes($route.name)"
        >Category Name</a
      >
      <span>
        <svg
          class="h-5 w-5 leading-none text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </span>
      <a
        href="#"
        class="hover:underline hover:text-gray-600"
        v-if="$route.name === 'checkout-id'"
        >Product Name</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
