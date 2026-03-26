<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'
import ProductCard from './ProductCard.vue'

defineProps<{
  products: DisplayProduct[]
}>()

const emit = defineEmits<{
  (e: 'select', product: DisplayProduct): void
}>()

function handleSelect(product: DisplayProduct) {
  emit('select', product)
}
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @select="handleSelect"
    />
  </div>
</template>