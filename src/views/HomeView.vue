<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Product } from '../types/product'
import { fetchProducts } from '../services/productsApi'

const products = ref<Product[]>([])
const loading = ref<boolean>(true)
const error = ref<string | null>(null)

async function loadProducts() {
  loading.value = true
  error.value = null

  try {
    const data = await fetchProducts(30, 0)
    products.value = data.products
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Unknown error while fetching products'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadProducts()
})
</script>

<template>
  <main class="p-4">
    <h1 class="text-2xl font-bold mb-4">Sports Item Store</h1>

    <div v-if="loading" class="text-gray-600">Loading products...</div>

    <div v-else-if="error" class="bg-red-100 text-red-700 p-3 rounded">
      <p class="font-semibold">Error</p>
      <p class="text-sm">{{ error }}</p>

      <button
        class="mt-3 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
        @click="loadProducts"
      >
        Retry
      </button>
    </div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
    >
      <div
        v-for="p in products"
        :key="p.id"
        class="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
      >
        <img
          :src="p.thumbnail"
          :alt="p.title"
          class="h-40 w-full object-cover rounded"
        />
        <h2 class="font-semibold mt-2">{{ p.title }}</h2>
        <p class="text-sm text-gray-500 line-clamp-2">{{ p.description }}</p>
        <div class="mt-2 flex items-center justify-between">
          <span class="font-bold text-blue-600">${{ p.price }}</span>
          <span class="text-sm text-gray-600">⭐ {{ p.rating }}</span>
        </div>
        <p class="text-xs text-gray-400 mt-1">{{ p.category }}</p>
      </div>
    </div>
  </main>
</template>