<template>
  <div>
    <div class="font-sans flex items-center justify-end mt-10 p-2 md:p-0">
      <div class="border rounded overflow-hidden flex">
        <input type="text" class="px-4 py-2" placeholder="Search..." />
        <button class="flex items-center justify-center px-4">
          <svg
            class="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      class="nav flex flex-wrap items-center justify-between py-5 p-2 md:p-0"
    >
      <div
        class="
          flex flex-no-shrink
          items-center
          justify-center
          py-3
          text-grey-darkest
          md:w-10
          w-full
        "
      >
        <h1 class="font-semibold tracking-tight">Logo</h1>
      </div>

      <div>
        <div class="flex flex-col">
          <ul class="menu flex justify-end list-reset m-0 w-full md:w-auto">
            <li>
              <nuxt-link
                to="/"
                class="block md:inline-block px-2 py-3 no-underline"
                ><i class="fa fa-university" aria-hidden="true"></i>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link
                to="/"
                class="block md:inline-block px-2 py-3 no-underline"
                >CUPS</nuxt-link
              >
            </li>

            <li>
              <nuxt-link
                to=""
                class="
                  block
                  md:inline-block
                  px-2
                  py-3
                  no-underline
                  text-grey-darkest
                "
                >SPOONS</nuxt-link
              >
            </li>

            <li>
              <nuxt-link
                to=""
                class="
                  block
                  md:inline-block
                  px-2
                  py-3
                  no-underline
                  text-grey-darkest
                "
                >LIDS</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to=""
                class="
                  block
                  md:inline-block
                  px-2
                  py-3
                  no-underline
                  text-grey-darkest
                "
                >ACCESSORS</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                to=""
                class="
                  block
                  md:inline-block
                  px-2
                  py-3
                  no-underline
                  text-grey-darkest
                "
                >MARKETING</nuxt-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
