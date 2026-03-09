<script setup lang="ts">
defineProps<{
  cartCount: number
}>()
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow border-b">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <div class="flex items-center gap-3">
        <div class="text-2xl">🏆</div>
        <h1 class="text-xl font-bold text-gray-900">
          Sports Item Store
        </h1>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-8 text-gray-700 font-medium">
  <a
    href="#"
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
      <div
        class="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg font-semibold"
      >
        <span class="text-lg">🛒</span>
        <span>{{ cartCount }}</span>
      </div>

    </div>
  </header>
</template>