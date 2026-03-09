<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

defineProps<{
  product: DisplayProduct
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'add-to-cart', product: DisplayProduct): void
}>()
</script>

<template>
  <div
    class="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
    @click.self="emit('close')"
  >
    <div class="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative">
      <button
        type="button"
        class="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
        @click="emit('close')"
      >
        ✕
      </button>

      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="w-full h-72 object-cover rounded-xl border"
          />
        </div>

        <div>
          <h2 class="text-2xl font-bold mb-3">{{ product.title }}</h2>

          <p class="text-blue-600 font-bold text-xl mb-3">
            ${{ product.price }}
          </p>

          <p class="text-yellow-500 mb-2">⭐ {{ product.rating }}</p>

          <p class="text-sm text-gray-500 mb-4">
            Category: {{ product.category }}
          </p>

          <p class="text-gray-700 mb-6">
            {{ product.description }}
          </p>

          <div class="flex gap-3">
            <button
              type="button"
              class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
              @click="emit('add-to-cart', product)"
            >
              Add to Cart
            </button>

            <button
              type="button"
              class="border px-5 py-2 rounded-lg hover:bg-gray-100 transition"
              @click="emit('close')"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>