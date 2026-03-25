<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

defineProps<{
  cart: DisplayProduct[]
  isOpen: boolean
}>()

const emit = defineEmits(['close', 'remove'])

function removeItem(product: DisplayProduct) {
  emit('remove', product)
}
</script>

<template>
  <!-- Overlay -->
  <div v-if="isOpen" class="fixed inset-0 bg-black/40 z-40" @click="$emit('close')"></div>

  <!-- Sidebar -->
  <div
    class="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300"
    :class="isOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="p-4 flex justify-between items-center border-b">
      <h2 class="text-lg font-bold">Your Cart</h2>
      <button @click="$emit('close')" class="text-gray-500 hover:text-black">✖</button>
    </div>

    <div class="p-4 space-y-4 overflow-y-auto h-[70%]">
      <div v-if="cart.length === 0" class="text-gray-500 text-center mt-10">
        Cart is Empty
      </div>

      <div v-for="item in cart" :key="item.id" class="flex gap-3 items-center border-b pb-3">
        <img :src="item.thumbnail" class="w-16 h-16 object-cover rounded" />

        <div class="flex-1">
          <h3 class="text-sm font-semibold">{{ item.title }}</h3>
          <p class="text-sm text-gray-500">${{ item.price }}</p>
        </div>

        <button
          @click="removeItem(item)"
          class="text-red-500 hover:text-red-700 text-sm"
        >
          Remove Item
        </button>
      </div>
    </div>

    <!-- Total -->
    <div class="p-4 border-t">
      <p class="font-semibold">
        Total:
        ${{ cart.reduce((sum, item) => sum + item.price, 0).toFixed(2) }}
      </p>

      <button class="w-full mt-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Checkout
      </button>
    </div>
  </div>
</template>