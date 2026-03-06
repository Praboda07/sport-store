<script setup lang="ts">
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur border-b shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Left: Logo + Brand -->
        <div class="flex items-center gap-3">
          <div class="h-10 w-10 rounded-xl bg-gray-900 text-white flex items-center justify-center text-lg font-bold shadow">
            🏆
          </div>

          <div>
            <h1 class="text-lg sm:text-xl font-extrabold text-gray-900 leading-none">
              Sports Item Store
            </h1>
            <p class="text-xs text-gray-500 hidden sm:block">
              Premium gear for every game
            </p>
          </div>
        </div>

        <!-- Center: Navigation links -->
        <nav class="hidden md:flex items-center gap-8">
          <a
            href="#"
            class="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#products"
            class="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Products
          </a>

          <a
            href="#categories"
            class="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Categories
          </a>

          <a
            href="#offers"
            class="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
          >
            Offers
          </a>
        </nav>

        <!-- Right: Search + Cart -->
       
          <button
            type="button"
            class="relative flex items-center justify-center h-11 w-11 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-700 transition"
          >
            🛒
            <span
              class="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center"
            >
              0
            </span>
          </button>
        </div>
      </div>
  </header>
</template>