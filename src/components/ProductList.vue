<script setup lang="ts">
import type { Product } from '../types/product'
import ProductCard from './ProductCard.vue'

defineProps<{
  products: Product[]
}>()

const emit = defineEmits<{
  (e: 'select', product: Product): void
}>()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <button
      v-for="p in products"
      :key="p.id"
      class="text-left"
      type="button"
      @click="emit('select', p)"
    >
      <ProductCard :product="p" />
    </button>
  </div>
</template>