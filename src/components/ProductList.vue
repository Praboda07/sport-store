<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { DisplayProduct } from '../types/DisplayProduct'

defineProps<{
  products: DisplayProduct[]
  darkMode: boolean
}>()

const emit = defineEmits<{
  (e: 'select', product: DisplayProduct): void
  (e: 'add-to-cart', product: DisplayProduct): void
}>()
</script>

<template>
  <div
    v-if="products.length > 0"
    class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :dark-mode="darkMode"
      @select="emit('select', $event)"
      @add-to-cart="emit('add-to-cart', $event)"
    />
  </div>

  <div
    v-else
    class="rounded-3xl border p-12 text-center shadow-sm transition-colors duration-300"
    :class="
      darkMode
        ? 'bg-slate-900 border-slate-700 text-slate-400'
        : 'bg-white border-slate-200 text-slate-500'
    "
  >
    No products found.
  </div>
</template>