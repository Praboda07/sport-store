<script setup lang="ts">
import { computed } from 'vue'
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  isOpen: boolean
  cart: DisplayProduct[]
  darkMode: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'remove-item', index: number): void
  (e: 'checkout'): void
}>()

const totalPrice = computed(() => {
  return props.cart.reduce((total, item) => total + item.price, 0)
})
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-50 bg-black/40"
    @click.self="emit('close')"
  >
    <div
      class="absolute right-0 top-0 h-full w-full max-w-md flex flex-col shadow-2xl transition-all duration-300"
      :class="darkMode ? 'bg-slate-950' : 'bg-white'"
    >
      <div
        class="flex items-center justify-between p-4 border-b"
        :class="darkMode ? 'border-slate-800' : 'border-slate-200'"
      >
        <div>
          <h2
            class="text-xl font-bold"
            :class="darkMode ? 'text-white' : 'text-slate-900'"
          >
            🛒 Cart
          </h2>
          <p
            class="text-xs"
            :class="darkMode ? 'text-slate-400' : 'text-slate-500'"
          >
            {{ cart.length }} items
          </p>
        </div>

        <button
          class="text-xl"
          :class="darkMode ? 'text-white' : 'text-gray-700'"
          @click="emit('close')"
        >
          ✕
        </button>
      </div>

      <div class="flex-1 overflow-y-auto p-4">
        <div
          v-if="cart.length === 0"
          class="text-center mt-10"
          :class="darkMode ? 'text-slate-400' : 'text-gray-500'"
        >
          Cart is empty
        </div>

        <div
          v-for="(item, index) in cart"
          :key="`${item.id}-${index}`"
          class="mb-3 rounded-xl border p-3 flex gap-3 items-center transition-all"
          :class="
            darkMode
              ? 'border-slate-800 bg-slate-900 hover:shadow-[0_0_10px_rgba(34,211,238,0.2)]'
              : 'border-slate-200 bg-white'
          "
        >
          <img
            :src="item.thumbnail"
            :alt="item.title"
            class="w-20 h-20 object-cover rounded-lg"
          />

          <div class="flex-1">
            <div class="flex justify-between items-start">
              <div>
                <h3
                  class="text-sm font-semibold"
                  :class="darkMode ? 'text-white' : 'text-slate-900'"
                >
                  {{ item.title }}
                </h3>

                <p
                  class="text-xs mt-1"
                  :class="darkMode ? 'text-slate-400' : 'text-slate-500'"
                >
                  {{ item.category }}
                </p>
              </div>

              <p class="text-sm font-bold text-blue-500">
                Rs. {{ item.price.toLocaleString() }}
              </p>
            </div>

            <button
              class="text-xs text-red-500 mt-2 hover:underline"
              @click="emit('remove-item', index)"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div
        class="border-t p-4"
        :class="
          darkMode
            ? 'border-slate-800 bg-slate-900'
            : 'border-slate-200 bg-slate-50'
        "
      >
        <div class="flex items-center justify-between mb-3">
          <span
            class="text-sm"
            :class="darkMode ? 'text-slate-400' : 'text-slate-600'"
          >
            Total
          </span>

          <span
            class="text-lg font-bold"
            :class="darkMode ? 'text-white' : 'text-slate-900'"
          >
            Rs. {{ totalPrice.toLocaleString() }}
          </span>
        </div>

        <button
          class="w-full rounded-xl py-3 text-sm font-semibold transition-all"
          :class="
            darkMode
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_15px_rgba(34,211,238,0.4)]'
              : 'bg-slate-950 text-white hover:bg-blue-700'
          "
          @click="emit('checkout')"
        >
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>