<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  product: DisplayProduct
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
    <div class="relative bg-white w-full max-w-5xl rounded-[2rem] shadow-2xl overflow-hidden">
      <button
        type="button"
        @click="emit('close')"
        class="absolute top-5 right-5 z-10 w-12 h-12 rounded-full bg-white shadow text-slate-700 text-2xl hover:text-red-500 transition"
      >
        ✕
      </button>

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="bg-slate-100">
          <img
            :src="props.product.thumbnail"
            :alt="props.product.title"
            class="w-full h-full min-h-[350px] object-cover"
          />
        </div>

        <div class="p-8 flex flex-col justify-center">
          <span class="inline-block bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-600 mb-3">
            {{ props.product.category }}
          </span>

          <h2 class="text-3xl font-bold text-slate-900">
            {{ props.product.title }}
          </h2>

          <p class="text-2xl font-bold text-blue-600 mt-2">
            ${{ props.product.price }}
          </p>

          <p class="text-amber-500 mt-2">
            ⭐ {{ props.product.rating }}
          </p>

          <p class="text-slate-600 mt-4 leading-relaxed">
            {{ props.product.description }}
          </p>

          <div class="mt-6 flex gap-4">
            <button
              type="button"
              @click="handleAddToCart"
              class="bg-slate-950 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

            <button
              type="button"
              @click="emit('close')"
              class="bg-slate-200 text-slate-800 px-6 py-3 rounded-2xl hover:bg-slate-300 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>