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
    class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
    @click.self="emit('close')"
  >
    <div
      class="relative w-full max-w-6xl rounded-[2rem] shadow-2xl overflow-hidden transition-colors duration-300"
      :class="darkMode ? 'bg-slate-900' : 'bg-white'"
    >
      <button
        type="button"
        @click="emit('close')"
        class="absolute top-5 right-5 z-10 w-12 h-12 rounded-full text-2xl shadow transition"
        :class="
          darkMode
            ? 'bg-slate-800 text-slate-200 hover:text-red-400'
            : 'bg-white/90 text-slate-700 hover:text-red-500'
        "
      >
        ×
      </button>

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="bg-slate-100">
          <img
            :src="props.product.thumbnail"
            :alt="props.product.title"
            class="w-full h-full min-h-[360px] object-cover"
          />
        </div>

        <div class="p-8 md:p-10 flex flex-col justify-center">
          <span
            class="inline-flex w-fit rounded-full px-4 py-2 text-sm font-semibold"
            :class="
              darkMode
                ? 'bg-slate-800 text-slate-200'
                : 'bg-slate-100 text-slate-700'
            "
          >
            {{ props.product.category }}
          </span>

          <h2
            class="mt-5 text-4xl font-extrabold leading-tight"
            :class="darkMode ? 'text-white' : 'text-slate-900'"
          >
            {{ props.product.title }}
          </h2>

          <p
            class="mt-4 text-lg leading-8"
            :class="darkMode ? 'text-slate-300' : 'text-slate-600'"
          >
            {{ props.product.description }}
          </p>

          <div class="grid grid-cols-3 gap-4 mt-8">
            <div
              class="rounded-2xl p-4 border"
              :class="
                darkMode
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-slate-50 border-slate-100'
              "
            >
              <p class="text-xs uppercase" :class="darkMode ? 'text-slate-400' : 'text-slate-400'">Price</p>
              <p class="text-2xl font-bold text-blue-600">Rs. {{ props.product.price.toLocaleString() }}</p>
            </div>

            <div
              class="rounded-2xl p-4 border"
              :class="
                darkMode
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-slate-50 border-slate-100'
              "
            >
              <p class="text-xs uppercase" :class="darkMode ? 'text-slate-400' : 'text-slate-400'">Rating</p>
              <p class="text-2xl font-bold" :class="darkMode ? 'text-white' : 'text-slate-900'">
                ⭐ {{ props.product.rating }}
              </p>
            </div>

            <div
              class="rounded-2xl p-4 border"
              :class="
                darkMode
                  ? 'bg-slate-800 border-slate-700'
                  : 'bg-slate-50 border-slate-100'
              "
            >
              <p class="text-xs uppercase" :class="darkMode ? 'text-slate-400' : 'text-slate-400'">Stock</p>
              <p class="text-2xl font-bold" :class="darkMode ? 'text-white' : 'text-slate-900'">
                {{ props.product.stock }}
              </p>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              @click="handleAddToCart"
              class="rounded-2xl px-8 py-4 text-lg font-semibold transition"
              :class="
                darkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-slate-950 text-white hover:bg-blue-700'
              "
            >
              Add to Cart
            </button>

            <button
              type="button"
              @click="emit('close')"
              class="rounded-2xl px-8 py-4 text-lg font-semibold transition"
              :class="
                darkMode
                  ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              "
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>