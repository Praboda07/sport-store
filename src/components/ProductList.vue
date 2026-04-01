<script setup lang="ts">
import ProductCard from './ProductCard.vue'
import type { DisplayProduct } from '../types/DisplayProduct'

defineProps<{
  products: DisplayProduct[]
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
      @select="emit('select', $event)"
      @add-to-cart="emit('add-to-cart', $event)"
    />
  </div>

  <div
    v-else
    class="rounded-3xl bg-white border border-slate-200 p-12 text-center text-slate-500 shadow-sm"
  >
    No products found.
  </div>
</template>