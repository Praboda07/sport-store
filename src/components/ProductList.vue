<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'
import ProductCard from './ProductCard.vue'

defineProps<{
  products: DisplayProduct[]
}>()

const emit = defineEmits<{
  (e: 'select', product: DisplayProduct): void
}>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <button
      v-for="product in products"
      :key="product.id"
      type="button"
      class="text-left transition transform hover:scale-105"
      @click="emit('select', product)"
    >
      <ProductCard :product="product" />
    </button>
  </div>
</template>