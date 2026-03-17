<script setup lang="ts">
defineProps<{
  cartCount: number
}>()
</script>

<template>
 <header class="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center gap-3">
        <span class="text-2xl">🏆</span>
        <h1 class="text-xl font-bold text-gray-900">
          Sports Item Store
        </h1>
      </div>

      <!-- Navigation -->
      <nav class="flex items-center gap-8 text-gray-700 font-medium">
        <a
          href="#products"
          class="hover:text-blue-600 transition"
        >
          Home
        </a>

        <a
          href="#about"
          class="hover:text-blue-600 transition"
        >
          About
        </a>
      </nav>

      <!-- Cart Button -->
      <button
        type="button"
        class="flex items-center gap-2 bg-blue-100 text-gray-800 px-4 py-2 rounded-xl hover:bg-blue-200 transition"
      >
        <span class="text-xl">🛒</span>
        <span class="font-semibold">{{ cartCount }}</span>
      </button>

    </div>
  </header>
</template>