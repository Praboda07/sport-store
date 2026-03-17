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
      class="h-40 w-full object-cover rounded transition duration-300 hover:scale-105"
      loading="lazy"
    />

    <h3 class="font-semibold mt-2 line-clamp-1">
      {{ product.title }}
    </h3>

    <p class="bg-white rounded-2xl shadow-sm border p-4 hover:shadow-xl transition duration-300 hover:-translate-y-1">
      {{ product.description }}
    </p>

  </article>
</template>