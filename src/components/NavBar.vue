<script setup lang="ts">
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-18 py-3">

        <!-- Left: Logo + Brand -->
        <div class="flex items-center gap-3">
          <div class="h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center text-xl shadow-md">
            🏆
          </div>

          <div>
            <h1 class="text-xl sm:text-2xl font-extrabold text-gray-900 leading-none">
              Sports Item Store
            </h1>
            <p class="text-xs text-gray-500 hidden sm:block">
              Premium gear for every athlete
            </p>
          </div>
        </div>

        <!-- Center: Nav Links -->
        <nav class="hidden md:flex items-center gap-8">
          <a
            href="#"
            class="text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            Home
          </a>

          <a
            href="#about"
            class="text-sm font-semibold text-gray-700 hover:text-blue-600 transition"
          >
            About
          </a>
        </nav>

          <button
            type="button"
            class="relative flex items-center justify-center h-11 w-11 rounded-xl bg-gray-900 text-white shadow-md hover:bg-blue-600 transition"
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