<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  product: DisplayProduct
  darkMode: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'add-to-cart', product: DisplayProduct): void
}>()

const handleAddToCart = () => {
  emit('add-to-cart', props.product)
  emit('close')
}
</script>

<template>
  <div
    class="fixed inset-0 z-50 bg-black/70 flex items-end sm:items-center justify-center p-0 sm:p-4"
    @click.self="emit('close')"
  >
    <div
      class="relative w-full h-[90vh] sm:h-auto sm:max-h-[90vh] sm:max-w-6xl rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col"
      :class="darkMode ? 'bg-[#07142b]' : 'bg-white'"
    >
      <!-- Close -->
      <button
        type="button"
        @click="emit('close')"
        class="absolute top-4 right-4 z-20 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition"
        :class="
          darkMode
            ? 'bg-white/10 text-white hover:bg-white/20'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
        "
      >
        ×
      </button>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 min-h-full">
          <!-- Image -->
          <div class="h-60 sm:h-72 md:h-auto">
            <img
              :src="props.product.thumbnail"
              :alt="props.product.title"
              class="w-full h-full object-cover"
            />
          </div>

          <!-- Details -->
          <div
            class="p-5 sm:p-6 md:p-8 flex flex-col justify-start"
            :class="darkMode ? 'bg-[#07142b]' : 'bg-white'"
          >
            <span
              class="inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold"
              :class="
                darkMode
                  ? 'bg-white/10 text-slate-200'
                  : 'bg-slate-100 text-slate-700'
              "
            >
              {{ props.product.category }}
            </span>

            <h2
              class="mt-5 text-3xl sm:text-4xl font-extrabold leading-tight"
              :class="darkMode ? 'text-white' : 'text-slate-900'"
            >
              {{ props.product.title }}
            </h2>

            <p
              class="mt-4 text-base sm:text-lg leading-8 max-w-xl"
              :class="darkMode ? 'text-slate-300' : 'text-slate-600'"
            >
              {{ props.product.description }}
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-3 mt-8">
              <div
                class="rounded-3xl p-4 border"
                :class="
                  darkMode
                    ? 'bg-white/10 border-white/10'
                    : 'bg-slate-50 border-slate-200'
                "
              >
                <p class="text-xs uppercase tracking-wide text-slate-400">
                  Price
                </p>
                <p class="mt-2 text-xl sm:text-2xl font-extrabold text-blue-500">
                  Rs. {{ props.product.price.toLocaleString() }}
                </p>
              </div>

              <div
                class="rounded-3xl p-4 border"
                :class="
                  darkMode
                    ? 'bg-white/10 border-white/10'
                    : 'bg-slate-50 border-slate-200'
                "
              >
                <p class="text-xs uppercase tracking-wide text-slate-400">
                  Rating
                </p>
                <p
                  class="mt-2 text-xl sm:text-2xl font-extrabold"
                  :class="darkMode ? 'text-white' : 'text-slate-900'"
                >
                  ⭐ {{ props.product.rating }}
                </p>
              </div>

              <div
                class="rounded-3xl p-4 border"
                :class="
                  darkMode
                    ? 'bg-white/10 border-white/10'
                    : 'bg-slate-50 border-slate-200'
                "
              >
                <p class="text-xs uppercase tracking-wide text-slate-400">
                  Stock
                </p>
                <p
                  class="mt-2 text-xl sm:text-2xl font-extrabold"
                  :class="darkMode ? 'text-white' : 'text-slate-900'"
                >
                  {{ props.product.stock }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom buttons -->
      <div
        class="grid grid-cols-2 gap-4 p-4 border-t"
        :class="
          darkMode
            ? 'bg-[#07142b] border-white/10'
            : 'bg-white border-slate-200'
        "
      >
        <button
          type="button"
          @click="handleAddToCart"
          class="rounded-3xl py-4 text-lg font-bold text-white transition"
          :class="
            darkMode
              ? 'bg-blue-600 hover:bg-blue-700'
              : 'bg-slate-950 hover:bg-blue-700'
          "
        >
          Add to Cart
        </button>

        <button
          type="button"
          @click="emit('close')"
          class="rounded-3xl py-4 text-lg font-bold transition"
          :class="
            darkMode
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
          "
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>