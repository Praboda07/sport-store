<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

defineProps<{
  isOpen: boolean
  cart: DisplayProduct[]
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'remove-item', index: number): void
}>()
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 bg-black/40"
    @click.self="emit('close')"
  >
    <div class="absolute right-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col">
      <div class="flex justify-between items-center p-4 border-b">
        <h2 class="text-xl font-bold">🛒 Cart</h2>
        <button class="text-gray-600 text-xl" @click="emit('close')">
          ✕
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        <div v-if="cart.length === 0" class="text-gray-500 text-center mt-10">
          Cart is empty
        </div>

        <div
          v-for="(item, index) in cart"
          :key="`${item.id}-${index}`"
          class="mb-4 border rounded-xl p-3"
        >
          <img
            :src="item.thumbnail"
            :alt="item.title"
            class="w-full h-28 object-cover rounded-lg mb-2"
          />

          <h3 class="font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">{{ item.category }}</p>
          <p class="text-blue-600 font-bold mt-1">${{ item.price }}</p>

          <button
            class="mt-2 text-sm text-red-500 hover:underline"
            @click="emit('remove-item', index)"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>