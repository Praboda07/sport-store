<script setup lang="ts">
import { computed } from 'vue'
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  isOpen: boolean
  cart: DisplayProduct[]
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'remove-item', index: number): void
}>()

const totalPrice = computed(() => {
  return props.cart.reduce((total, item) => total + item.price, 0).toFixed(2)
})
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 bg-black/40"
    @click.self="emit('close')"
  >
    <div class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl flex flex-col">
      <div class="flex items-center justify-between p-5 border-b">
        <div>
          <h2 class="text-2xl font-bold text-slate-900">Shopping Cart</h2>
          <p class="text-sm text-slate-500">{{ cart.length }} items selected</p>
        </div>

        <button
          class="w-10 h-10 rounded-full bg-slate-100 text-slate-700 text-xl"
          @click="emit('close')"
        >
          ✕
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-5">
        <div
          v-if="cart.length === 0"
          class="text-center text-slate-500 mt-16"
        >
          Your cart is empty.
        </div>

        <div
          v-for="(item, index) in cart"
          :key="`${item.id}-${index}`"
          class="mb-4 rounded-2xl border border-slate-200 p-4"
        >
          <img
            :src="item.thumbnail"
            :alt="item.title"
            class="w-full h-36 object-cover rounded-xl mb-3"
          />

          <div class="flex items-start justify-between gap-3">
            <div>
              <h3 class="font-bold text-slate-900">{{ item.title }}</h3>
              <p class="text-sm text-slate-500 mt-1">{{ item.category }}</p>
            </div>
            <p class="font-bold text-blue-600">${{ item.price }}</p>
          </div>

          <button
            class="mt-3 text-sm text-red-500 hover:underline"
            @click="emit('remove-item', index)"
          >
            Remove item
          </button>
        </div>
      </div>

      <div class="border-t p-5 bg-slate-50">
        <div class="flex items-center justify-between mb-4">
          <span class="text-slate-600 font-medium">Total</span>
          <span class="text-2xl font-extrabold text-slate-900">${{ totalPrice }}</span>
        </div>

        <button
          class="w-full rounded-2xl bg-slate-950 text-white py-4 font-semibold hover:bg-blue-700 transition"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>