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
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
    class="bg-white rounded-2xl shadow-sm border p-10 text-center text-slate-500"
  >
    No products found.
  </div>
</template>