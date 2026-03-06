<script setup lang="ts">
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <article class="bg-white rounded-2xl shadow-sm border p-4 hover:shadow-lg transition hover:-translate-y-1 hover:scale-105 cursor-pointer">

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

  </article>
</template>