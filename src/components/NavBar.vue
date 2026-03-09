<script setup lang="ts">
defineProps<{
  cartCount: number
}>()
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-b shadow-sm">
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

      <!-- Cart -->
      <div class="relative cursor-pointer">

        <!-- Cart Icon -->
        <div class="bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition text-xl">
          🛒
        </div>

        <!-- Cart Badge -->
        <span
          v-if="cartCount > 0"
          class="absolute -top-2 -left-2 bg-orange-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full"
        >
          {{ cartCount }}
        </span>

      </div>

    </div>
  </header>
</template>