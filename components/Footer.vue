<template>
  <div class="bg-gray-100">
    <div
      class="
        container
        mx-4
        md:mx-auto
        py-10
        md:py-20
        text-gray-800
        sm:grid
        md:grid-cols-5
        sm:grid-cols-2
      "
    >
      <div><h3 class="font-bold text-xl mb-5 text-cyan-500">Logo</h3></div>
      <!-- Shop -->
      <div>
        <h3 class="font-bold text-xl mb-5 text-cyan-500 uppercase">Shop</h3>
        <ul>
          <li class="my-2">CUPS</li>
          <li class="my-2">SPONS</li>
          <li class="my-2">LIDS</li>
          <li class="my-2">ACCESSORS</li>
          <li class="my-2">MARKETING</li>
        </ul>
      </div>
      <!-- Info -->
      <div>
        <div class="text-sm uppercase mb-5 text-cyan-500 font-bold">Info</div>
        <a class="my-3 block" href="/#"
          >COMPANY<span class="text-teal-600 text-xs"></span
        ></a>
        <a class="my-3 block" href="/#"
          >FRANCHISE <span class="text-teal-600 text-xs"></span
        ></a>
        <a class="my-3 block" href="/#"
          >PARTNERS<span class="text-teal-600 text-xs"></span
        ></a>
        <a class="my-3 block" href="/#"
          >CONTACT<span class="text-teal-600 text-xs"></span
        ></a>
        <a class="my-3 block" href="/#"
          >FAQ<span class="text-teal-600 text-xs"></span
        ></a>
      </div>
      <!-- Follows -->
      <div>
        <div class="text-sm uppercase mb-5 text-cyan-500 font-bold">
          Follows
        </div>
        <p class="uppercase">Get Our Newsletter</p>
        <input
          type="text"
          class="
            relative
            outline-none
            rounded
            py-2
            px-3
            my-3
            bg-white
            shadow
            text-sm text-gray-700
            placeholder-gray-400
            focus:outline-none focus:shadow-outline
          "
        />
        <button
          class="
            rounded
            uppercase
            bg-blue-500
            hover:bg-blue-700
            text-lg
            px-5
            text-white
            font-medium
            block
          "
        >
          Sign Up
        </button>
        <div class="my-2">
          <i class="fa fa-facebook-square" aria-hidden="true"></i>
          <i class="fa fa-twitter-square" aria-hidden="true"></i>
          <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        </div>
      </div>
      <!-- Payment -->
      <div>
        <div class="text-sm uppercase mb-5 text-cyan-500 font-bold">
          Payment
        </div>
        <div
          class="w-96 md:w-auto h-20 block my-3 rounded"
          :style="{
            backgroundImage: `url('https://picsum.photos/600/100/?random')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }"
        ></div>
        <div class="flex flex-wrap justify-between w-96 md:w-auto">
          <div class="rounded w-8 md:w-10 h-8 bg-blue-500"></div>
          <div class="rounded w-8 md:w-10 h-8 bg-blue-500"></div>
          <div class="rounded w-8 md:w-10 h-8 bg-blue-500"></div>
          <div class="rounded w-8 md:w-10 h-8 bg-blue-500"></div>
          <div class="rounded w-8 md:w-10 h-8 bg-blue-500"></div>
        </div>
      </div>
    </div>
    <!-- Privacy policy -->
    <div class="flex flex-col flex-wrap justify-center my-1 text-center">
      <ul
        class="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0"
      >
        <li>
          <a
            href="#"
            class="
              block
              text-gray-500
              hover:text-gray-300
              py-2
              md:mx-2
              divide-x
            "
            >Privacy policy
          </a>
        </li>
        <li>
          <a
            href="#"
            class="block text-gray-500 hover:text-gray-300 py-2 md:mx-2"
            >Terms & conditions</a
          >
        </li>
      </ul>
      <p>Copyright 2013 Lorem ipsum dolor sit amet</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
i {
  font-size: 25px;
  margin: 0 5px 0 0;
}
</style>
