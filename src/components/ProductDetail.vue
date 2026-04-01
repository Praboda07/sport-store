<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  product: DisplayProduct
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'add-to-cart', product: DisplayProduct): void
}>()
</script>

<template>
  <div
    class="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
    @click.self="emit('close')"
  >
    <div class="relative bg-white w-full max-w-5xl rounded-3xl shadow-2xl p-6 md:p-8">
      <button
        type="button"
        @click="emit('close')"
        class="absolute top-4 right-4 text-3xl text-gray-400 hover:text-gray-700 transition"
      >
        ×
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img
            :src="props.product.thumbnail"
            :alt="props.product.title"
            class="w-full h-[360px] object-cover rounded-2xl"
          />
        </div>

        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            {{ props.product.title }}
          </h2>

          <p class="text-4xl font-bold text-blue-600 mb-4">
            ${{ props.product.price }}
          </p>

          <p class="text-yellow-500 text-2xl mb-4">
            ⭐ {{ props.product.rating }}
          </p>

          <p class="text-gray-500 text-2xl mb-6">
            Category: {{ props.product.category }}
          </p>

          <p class="text-gray-600 text-2xl leading-relaxed mb-8">
            {{ props.product.description }}
          </p>

          <div class="flex gap-4">
            <button
              type="button"
              @click="emit('add-to-cart', props.product)"
              class="bg-blue-600 text-white px-8 py-4 rounded-2xl text-2xl hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>

            <button
              type="button"
              @click="emit('close')"
              class="bg-gray-100 text-gray-800 px-8 py-4 rounded-2xl text-2xl hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>