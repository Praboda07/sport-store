<script setup lang="ts">
defineProps<{
  cartCount: number
  darkMode: boolean
}>()

const emit = defineEmits<{
  (e: 'open-cart'): void
  (e: 'toggle-dark-mode'): void
}>()
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300"
    :class="
      darkMode
        ? 'bg-black/80 border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]'
        : 'bg-white/90 border-slate-200'
    "
  >
    <div class="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-3">
      <div class="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
        <div
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center font-bold text-lg sm:text-xl shrink-0"
          :class="
            darkMode
              ? 'bg-black border border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.45)]'
              : 'bg-gradient-to-br from-yellow-400 to-amber-600 text-white'
          "
        >
          🏆
        </div>

        <div class="min-w-0">
          <h1
            class="text-sm sm:text-xl font-extrabold leading-tight transition-all duration-300 break-words"
            :class="
              darkMode
                ? 'text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]'
                : 'text-slate-900'
            "
          >
            APEX ATHLETICE
          </h1>

          <p
            class="hidden sm:block text-sm transition-colors duration-300"
            :class="darkMode ? 'text-cyan-200/70' : 'text-slate-500'"
          >
            Built for athletes who demand more from their equipment.
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          @click="emit('toggle-dark-mode')"
          class="relative w-14 sm:w-20 h-8 sm:h-10 flex items-center rounded-full p-1 transition-all duration-500 border"
          :class="
            darkMode
              ? 'bg-black border-cyan-400/60 shadow-[0_0_16px_rgba(34,211,238,0.45)]'
              : 'bg-gray-200 border-slate-300'
          "
        >
          <div
            class="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-md transform transition-all duration-500 text-xs sm:text-sm"
            :class="
              darkMode
                ? 'translate-x-6 sm:translate-x-10 bg-white shadow-[0_0_18px_rgba(255,255,255,0.7)]'
                : 'translate-x-0 bg-black text-white'
            "
          >
            {{ darkMode ? '🌙' : '☀️' }}
          </div>
        </button>

        <button
          type="button"
          @click="emit('open-cart')"
          class="relative flex items-center gap-1 sm:gap-2 rounded-2xl px-3 sm:px-5 py-2 sm:py-3 transition-all duration-300 border"
          :class="
            darkMode
              ? 'bg-black text-cyan-300 border-cyan-400/40 hover:bg-cyan-500/10 shadow-[0_0_18px_rgba(34,211,238,0.25)]'
              : 'bg-blue-100 text-slate-800 border-blue-200 hover:bg-blue-200'
          "
        >
          <span class="text-lg sm:text-xl">🛒</span>
          <span class="hidden sm:inline font-medium">Cart</span>
          <span
            class="absolute -top-2 -right-2 min-w-[22px] h-5 sm:min-w-[24px] sm:h-6 px-1.5 sm:px-2 rounded-full text-[10px] sm:text-xs font-bold flex items-center justify-center"
            :class="
              darkMode
                ? 'bg-pink-500 text-white shadow-[0_0_14px_rgba(236,72,153,0.6)]'
                : 'bg-red-500 text-white'
            "
          >
            {{ cartCount }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>