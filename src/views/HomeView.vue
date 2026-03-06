<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { DisplayProduct } from '../types/DisplayProduct'
import { sportsifyProducts } from '../utils/sportsify'
import { fetchProducts } from '../services/productsApi'
import ProductList from '../components/ProductList.vue'

// reactive state
const products = ref<DisplayProduct[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const search = ref('')
const selectedCategory = ref('all')

// fetch products
async function loadProducts() {
  loading.value = true
  error.value = null

  try {
    const data = await fetchProducts(30, 0)
    products.value = sportsifyProducts(data.products)
  } catch (e) {
    error.value = 'Failed to fetch products'
  } finally {
    loading.value = false
  }
}

// categories for filter
const categories = computed(() => {
  const set = new Set(products.value.map(p => p.category))
  return ['all', ...set]
})

// filtered list
const filteredProducts = computed(() => {
  return products.value.filter(p => {
    const matchSearch =
      p.title.toLowerCase().includes(search.value.toLowerCase())

    const matchCategory =
      selectedCategory.value === 'all' ||
      p.category === selectedCategory.value

    return matchSearch && matchCategory
  })
})

// results counter
const resultsCount = computed(() => filteredProducts.value.length)

// clear filters
function clearFilters() {
  search.value = ''
  selectedCategory.value = 'all'
}

onMounted(loadProducts)
</script>


<template>
  <div class="min-h-screen bg-gray-50">

    <!-- HEADER -->
    <header class="bg-white border-b">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <span class="text-gray-600 text-sm">
          {{ resultsCount }} items found
        </span>
      </div>
    </header>

    <main class="max-w-6xl mx-auto px-4 py-6">

      <!-- SEARCH + FILTER BAR -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-3 mb-6">

        <!-- FILTER -->
        <div class="flex items-center gap-2">
          <label class="text-sm text-gray-600">Category</label>

          <select
            v-model="selectedCategory"
            class="border rounded px-3 py-2"
          >
            <option v-for="c in categories" :key="c" :value="c">
              {{ c }}
            </option>
          </select>

          <button
            @click="clearFilters"
            class="px-3 py-2 border rounded bg-gray-100 hover:bg-gray-200 text-sm"
          >
            Clear
          </button>
        </div>

        <!-- SEARCH -->
        <div class="flex items-center border rounded px-3 py-2 w-full md:w-80 bg-white">
          <span class="mr-2">🔍</span>

          <input
            v-model="search"
            type="text"
            placeholder="Search sports items..."
            class="outline-none w-full"
          />
        </div>

      </div>

      <!-- LOADING -->
      <p v-if="loading" class="text-gray-600">
        Loading products...
      </p>

      <!-- ERROR -->
      <div
        v-else-if="error"
        class="bg-red-100 text-red-700 p-3 rounded"
      >
        {{ error }}
      </div>

      <!-- PRODUCTS -->
      <ProductList
        v-else
        :products="filteredProducts"
      />

    </main>
  </div>
</template>