<template>
  <header class="bg-gray-100">
    <nav class="container mx-auto pt-1 px-8">
      <ul class="flex justify-end items-center space-x-3 text-xs">
        <li><a href="/" class="px-3 py-2 hover:bg-white hover:text-red-500">Sell on AliExpress</a></li>
        <li><a href="/" class="px-3 py-2 hover:bg-white hover:text-red-500">Help</a></li>
        <li><a href="/" class="px-3 py-2 hover:bg-white hover:text-red-500">Buyer Protection</a></li>
        <li>
          <a href="/" class="flex  px-3 py-2 hover:bg-white hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Wish List</a
          >
        </li>
        <li
          class="relative cursor-pointer"
          @mouseover="isAccountLinkHovered = true"
          @mouseleave="isAccountLinkHovered = false"
        >
          <span
            :class="isAccountLinkHovered ? 'text-red-500 bg-white' : ''"
            class="flex  px-3 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Account
          </span>
          <div
            v-if="isAccountLinkHovered"
            @mouseleave="isAccountLinkHovered = false"
            class="
              absolute
              border-2 border-gray-200
              bg-white
              p-3
              right-0
              w-max
              shadow-sm
            "
          >
            <p class="pb-2 text-sm mx-3">Welcome to AliExpress !</p>
            <div class="flex justify-between border-b-2 border-gray-200 pb-2">
              <button class="bg-red-500 text-white px-6 py-1 rounded-sm mx-2">
                Join
              </button>
              <button class="bg-red-100 text-red-500 px-6 py-1 rounded-sm">
                Sign in
              </button>
            </div>
            <div>
              <ul class="py-3 text-sm">
                <li class="hover:bg-gray-200 p-2"><a href="/">My orders</a></li>
                <li class="hover:bg-gray-200 p-2">
                  <a href="/">Message center</a>
                </li>
                <li class="hover:bg-gray-200 p-2"><a href="/">Wish List</a></li>
                <li class="hover:bg-gray-200 p-2">
                  <a href="/">My Coupons</a>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      isAccountLinkHovered: false,
    };
  },
};
</script>
