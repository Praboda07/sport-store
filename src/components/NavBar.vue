<script setup lang="ts">
defineProps<{
  cartCount: number
}>()

const emit = defineEmits<{
  (e: 'open-cart'): void
}>()
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center shadow-lg">
          <span class="text-2xl">🏆</span>
        </div>

        <div>
          <h1 class="text-xl font-extrabold text-white">
            Sports Item Store
          </h1>
          <p class="text-sm text-slate-400">
            Premium gear for champions
          </p>
        </div>
      </div>

      <nav class="hidden md:flex items-center gap-8 text-slate-300 font-medium">
        <a href="#home" class="hover:text-white transition">Home</a>
        <a href="#collection" class="hover:text-white transition">Collection</a>
        <a href="#about" class="hover:text-white transition">About</a>
      </nav>

      <button
        type="button"
        @click="emit('open-cart')"
        class="relative flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-white hover:bg-white/15 transition border border-white/10"
      >
        <span class="text-xl">🛒</span>
        <span class="hidden sm:inline font-medium">Cart</span>
        <span class="absolute -top-2 -right-2 min-w-[24px] h-6 px-2 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
          {{ cartCount }}
        </span>
      </button>
    </div>
  </header>
</template>