<script setup lang="ts">
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <article class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="h-40 w-full object-cover rounded"
      loading="lazy"
    />

    <h3 class="font-semibold mt-2 line-clamp-1">
      {{ product.title }}
    </h3>

    <p class="text-sm text-gray-500 line-clamp-2">
      {{ product.description }}
    </p>

    <div class="mt-3 flex items-center justify-between">
      <span class="font-bold text-blue-600">${{ product.price }}</span>
      <span class="text-sm text-gray-600">⭐ {{ product.rating }}</span>
    </div>

    <p class="text-xs text-gray-400 mt-1">
      {{ product.category }}
    </p>
  </article>
</template>