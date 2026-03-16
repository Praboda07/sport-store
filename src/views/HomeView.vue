<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import type { DisplayProduct } from '../types/DisplayProduct'
import { sportsifyProducts } from '../utils/sportsify'
import { fetchProducts } from '../services/productsApi'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../components/ProductDetail.vue'

const emit = defineEmits<{
  (e: 'add-to-cart', product: DisplayProduct): void
}>()

const products = ref<DisplayProduct[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const search = ref('')
const selectedCategory = ref('all')

const selectedProduct = ref<DisplayProduct | null>(null)

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

const categories = computed(() => {
  const set = new Set(products.value.map((p) => p.category))
  return ['all', ...set]
})

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    const matchSearch =
      p.title.toLowerCase().includes(search.value.toLowerCase()) ||
      p.description.toLowerCase().includes(search.value.toLowerCase())

    const matchCategory =
      selectedCategory.value === 'all' ||
      p.category === selectedCategory.value

    return matchSearch && matchCategory
  })
})

const resultsCount = computed(() => filteredProducts.value.length)

function clearFilters() {
  search.value = ''
  selectedCategory.value = 'all'
}

function selectProduct(product: DisplayProduct) {
  selectedProduct.value = product
}

function closeProductDetail() {
  selectedProduct.value = null
}

function addToCart(product: DisplayProduct) {
  emit('add-to-cart', product)
  selectedProduct.value = null
}

onMounted(loadProducts)
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-6 py-8">
      <!-- PRODUCTS SECTION -->
      <section id="products">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div class="flex items-center gap-3 flex-wrap">
            <label class="text-gray-700 font-medium">Category</label>

            <select
              v-model="selectedCategory"
              class="border rounded-lg px-4 py-2 bg-white shadow-sm"
            >
              <option
                v-for="category in categories"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>

            <button
              type="button"
              @click="clearFilters"
              class="px-4 py-2 rounded-lg border bg-white hover:bg-gray-100 transition"
            >
              Clear
            </button>
          </div>

          <div class="w-full md:w-96">
            <div class="flex items-center gap-2 border rounded-lg bg-white px-4 py-2 shadow-sm">
              <span class="text-gray-400">🔍</span>
              <input
                v-model="search"
                type="text"
                placeholder="Search sports items..."
                class="w-full outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

       

        <div v-if="loading" class="text-center py-12 text-gray-500 text-lg">
          Loading products...
        </div>

        <div
          v-else-if="error"
          class="bg-red-100 text-red-700 px-4 py-3 rounded-lg"
        >
          {{ error }}
        </div>

        <div v-else>
          <div
            v-if="filteredProducts.length === 0"
            class="text-center py-12 text-gray-500"
          >
            No sports items found.
          </div>

          <ProductList
            v-else
            :products="filteredProducts"
            @select="selectProduct"
          />
        </div>
      </section>

      <!-- ABOUT SECTION -->
      <section id="about" class="mt-20">
        <h2 class="text-3xl font-bold mb-6 text-gray-900">
          About Our Store
        </h2>

        <p class="text-gray-600 mb-10 max-w-3xl">
          Sports Item Store is a modern sports equipment shop built with Vue.
          Our goal is to provide athletes, beginners, and professionals with
          high-quality sports gear. You can browse, search, and explore many
          sports items in one place.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div class="text-3xl mb-3">🏅</div>
            <h3 class="font-semibold text-lg mb-2">Quality Equipment</h3>
            <p class="text-gray-500 text-sm">
              We provide high-quality sports gear for professional training
              and everyday fitness activities.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div class="text-3xl mb-3">⚡</div>
            <h3 class="font-semibold text-lg mb-2">Fast Browsing</h3>
            <p class="text-gray-500 text-sm">
              Quickly search and filter sports equipment using our modern
              Vue-powered interface.
            </p>
          </div>

          <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div class="text-3xl mb-3">🏋️</div>
            <h3 class="font-semibold text-lg mb-2">30+ Sports Items</h3>
            <p class="text-gray-500 text-sm">
              Our catalog contains a growing collection of sports equipment
              from different categories.
            </p>
          </div>
        </div>
      </section>

      <!-- PRODUCT DETAIL MODAL -->
      <ProductDetail
        v-if="selectedProduct"
        :product="selectedProduct"
        @close="closeProductDetail"
        @add-to-cart="addToCart"
      />
    </main>
  </div>
</template>