<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import NavBar from '../components/NavBar.vue'
import FilterBar from '../components/FilterBar.vue'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../components/ProductDetail.vue'
import CartSidebar from '../components/CartSidebar.vue'
import Footer from '../components/Footer.vue'
import { fetchProducts } from '../services/productsApi'
import { sportsifyProducts } from '../utils/sportsify'
import type { DisplayProduct } from '../types/DisplayProduct'

const products = ref<DisplayProduct[]>([])
const selectedProduct = ref<DisplayProduct | null>(null)
const searchQuery = ref('')
const selectedCategory = ref('all')
const cart = ref<DisplayProduct[]>([])
const isCartOpen = ref(false)
const loading = ref(true)
const errorMessage = ref('')

const savedCart = localStorage.getItem('cart')
if (savedCart) {
  cart.value = JSON.parse(savedCart)
}

watch(
  cart,
  (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
  },
  { deep: true }
)

const loadProducts = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    const data = await fetchProducts(30, 0)
    products.value = sportsifyProducts(data.products)
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Something went wrong'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadProducts()
})

const categories = computed(() => {
  const uniqueCategories = [...new Set(products.value.map((product) => product.category))]
  return ['all', ...uniqueCategories]
})

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === 'all' ||
      product.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})

const openModal = (product: DisplayProduct) => {
  selectedProduct.value = product
}

const closeModal = () => {
  selectedProduct.value = null
}

const addToCart = (product: DisplayProduct) => {
  cart.value.push(product)
  selectedProduct.value = null
}

const openCart = () => {
  isCartOpen.value = true
}

const closeCart = () => {
  isCartOpen.value = false
}

const removeCartItem = (index: number) => {
  cart.value.splice(index, 1)
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white" id="home">
    <NavBar
      :cart-count="cart.length"
      @open-cart="openCart"
    />

    <main class="max-w-7xl mx-auto px-4 py-8">
      <section
        class="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900 text-white shadow-2xl"
      >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(250,204,21,0.18),transparent_25%)]"></div>

        <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-10 px-8 py-12 md:px-12 md:py-16">
          <div class="flex flex-col justify-center">
            <span
              class="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur"
            >
              <span class="text-yellow-400">★</span>
              Elite Sports Collection
            </span>

            <h1 class="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Premium Gear for
              <span class="text-blue-400">Champions</span>
            </h1>

            <p class="mt-5 max-w-2xl text-base md:text-lg text-slate-300 leading-8">
              Discover professional-quality sports equipment designed for performance,
              comfort, and style.
            </p>
          </div>

          <div class="flex items-center justify-center">
            <div class="grid grid-cols-2 gap-4 w-full max-w-lg">
              <div class="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur">
                <p class="text-4xl mb-3">⚽</p>
                <h3 class="text-xl font-bold">Football</h3>
              </div>

              <div class="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur mt-8">
                <p class="text-4xl mb-3">🏏</p>
                <h3 class="text-xl font-bold">Cricket</h3>
              </div>

              <div class="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur -mt-2">
                <p class="text-4xl mb-3">🏀</p>
                <h3 class="text-xl font-bold">Basketball</h3>
              </div>

              <div class="rounded-3xl bg-white/10 border border-white/10 p-6 backdrop-blur mt-6">
                <p class="text-4xl mb-3">🎾</p>
                <h3 class="text-xl font-bold">Tennis</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" class="mt-8">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h2 class="text-2xl font-bold text-slate-900">Shop Collection</h2>
            <p class="text-slate-500 mt-1">Find the right equipment for your sport.</p>
          </div>

          <div class="hidden md:flex items-center gap-3">
            <span class="rounded-full bg-white shadow-sm border px-4 py-2 text-sm text-slate-600">
              Showing <span class="font-bold text-slate-900">{{ filteredProducts.length }}</span> products
            </span>
          </div>
        </div>

        <FilterBar
          v-model="searchQuery"
          :categories="categories"
          :selected-category="selectedCategory"
          @update:selectedCategory="selectedCategory = $event"
        />
      </section>

      <div class="md:hidden mb-6 mt-4">
        <span class="rounded-full bg-white shadow-sm border px-4 py-2 text-sm text-slate-600 inline-block">
          Showing <span class="font-bold text-slate-900">{{ filteredProducts.length }}</span> products
        </span>
      </div>

      <div
        v-if="loading"
        class="bg-white rounded-3xl shadow-sm border p-10 text-center text-slate-500"
      >
        Loading products...
      </div>

      <div
        v-else-if="errorMessage"
        class="bg-red-50 border border-red-200 text-red-600 rounded-3xl p-6"
      >
        {{ errorMessage }}
      </div>

      <ProductList
        v-else
        :products="filteredProducts"
        @select="openModal"
        @add-to-cart="addToCart"
      />
    </main>

    <ProductDetail
      v-if="selectedProduct"
      :product="selectedProduct"
      @close="closeModal"
      @add-to-cart="addToCart"
    />

    <CartSidebar
      :cart="cart"
      :is-open="isCartOpen"
      @close="closeCart"
      @remove-item="removeCartItem"
    />

    <Footer />
  </div>
</template>