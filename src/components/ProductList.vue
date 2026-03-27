<template>
  <section>
    <div
      v-if="products.length === 0"
      class="text-center py-14 bg-white rounded-2xl shadow-sm border border-gray-100"
    >
      <h2 class="text-2xl font-bold text-gray-800">No products found</h2>
      <p class="text-gray-500 mt-2">
        Try changing the search text or category filter.
      </p>
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
    >
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @select="handleSelect"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'
import ProductCard from './ProductCard.vue'

defineProps<{
  products: DisplayProduct[]
}>()

const emit = defineEmits<{
  (e: 'select', product: DisplayProduct): void
}>()

const handleSelect = (product: DisplayProduct) => {
  emit('select', product)
}
</script>