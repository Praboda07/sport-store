<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import NavBar from '../components/NavBar.vue'
import FilterBar from '../components/FilterBar.vue'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../components/ProductDetail.vue'
import CartSidebar from '../components/CartSidebar.vue'
import CheckoutModal from '../components/CheckoutModal.vue'
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
const isCheckoutOpen = ref(false)
const loading = ref(true)
const errorMessage = ref('')
const darkMode = ref(true)

const savedCart = localStorage.getItem('cart')
if (savedCart) {
  cart.value = JSON.parse(savedCart)
}

const savedTheme = localStorage.getItem('darkMode')
if (savedTheme) {
  darkMode.value = JSON.parse(savedTheme)
}

watch(
  cart,
  (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
  },
  { deep: true }
)

watch(darkMode, (newValue) => {
  localStorage.setItem('darkMode', JSON.stringify(newValue))
})

const loadProducts = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    const data = await fetchProducts(50, 0)
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

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
}

const openCheckout = () => {
  if (cart.value.length === 0) {
    alert('Your cart is empty')
    return
  }

  isCartOpen.value = false
  isCheckoutOpen.value = true
}

const closeCheckout = () => {
  isCheckoutOpen.value = false
}

const placeOrder = () => {
  cart.value = []
  isCheckoutOpen.value = false
  localStorage.removeItem('cart')
  alert('Order placed successfully!')
}
</script>

<template>
  <div
    class="min-h-screen transition-all duration-300"
    :class="
      darkMode
        ? 'bg-[#020817]'
        : 'bg-gradient-to-b from-slate-100 via-slate-50 to-white'
    "
    id="home"
  >
    <NavBar
      :cart-count="cart.length"
      :dark-mode="darkMode"
      @open-cart="openCart"
      @toggle-dark-mode="toggleDarkMode"
    />

    <main class="max-w-7xl mx-auto px-4 py-5 sm:py-8">
      <section
        class="relative overflow-hidden rounded-[2rem] text-white shadow-2xl"
        :class="
          darkMode
            ? 'bg-[linear-gradient(135deg,#031227,#071a3a,#0a224d)] border border-cyan-400/20 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
            : 'bg-gradient-to-r from-slate-950 via-blue-950 to-slate-900'
        "
      >
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_25%)]"></div>

        <div class="relative grid grid-cols-1 lg:grid-cols-2 gap-6 px-5 py-6 sm:px-8 sm:py-12 md:px-12 md:py-16">
          <div class="flex flex-col justify-center">
            <h1 class="mt-2 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Next-Level Gear for
              <span
                :class="
                  darkMode
                    ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]'
                    : 'text-blue-400'
                "
              >
                Champions
              </span>
            </h1>

            <p class="mt-4 max-w-2xl text-xs sm:text-base md:text-lg leading-6 sm:leading-8 text-slate-300">
              Discover elite sports equipment with premium visuals, modern style,
              and a shopping experience built for speed and performance.
            </p>

            <div class="mt-6 flex flex-wrap gap-3 sm:gap-4">
              <div
                class="rounded-2xl px-4 py-3 sm:px-5 sm:py-4 backdrop-blur border w-[46%] sm:w-auto"
                :class="
                  darkMode
                    ? 'bg-cyan-400/10 border-cyan-400/20 shadow-[0_0_18px_rgba(34,211,238,0.16)]'
                    : 'bg-white/10 border-white/10'
                "
              >
                <p class="text-xl sm:text-2xl font-bold text-white">{{ products.length }}+</p>
                <p class="text-xs sm:text-sm text-slate-300">Premium Products</p>
              </div>

              <div
                class="rounded-2xl px-4 py-3 sm:px-5 sm:py-4 backdrop-blur border w-[46%] sm:w-auto"
                :class="
                  darkMode
                    ? 'bg-blue-500/10 border-blue-400/20 shadow-[0_0_18px_rgba(59,130,246,0.14)]'
                    : 'bg-white/10 border-white/10'
                "
              >
                <p class="text-xl sm:text-2xl font-bold text-white">{{ categories.length - 1 }}</p>
                <p class="text-xs sm:text-sm text-slate-300">Sport Categories</p>
              </div>

              <div
                class="rounded-2xl px-4 py-3 sm:px-5 sm:py-4 backdrop-blur border w-[46%] sm:w-auto"
                :class="
                  darkMode
                    ? 'bg-violet-500/10 border-violet-400/20 shadow-[0_0_18px_rgba(168,85,247,0.14)]'
                    : 'bg-white/10 border-white/10'
                "
              >
                <p class="text-xl sm:text-2xl font-bold text-white">24/7</p>
                <p class="text-xs sm:text-sm text-slate-300">Fast Shopping</p>
              </div>
            </div>
          </div>

          <div class="hidden lg:flex items-center justify-center">
            <div class="grid grid-cols-2 gap-4 w-full max-w-lg">
              <div class="rounded-3xl border p-4 sm:p-6 backdrop-blur bg-white/5 border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                <p class="text-3xl sm:text-4xl mb-3">⚽</p>
                <h3 class="text-lg sm:text-xl font-bold">Football</h3>
                <p class="mt-2 text-xs sm:text-sm text-slate-300">Speed, control and match-day power.</p>
              </div>

              <div class="rounded-3xl border p-4 sm:p-6 backdrop-blur mt-6 sm:mt-8 bg-white/5 border-pink-400/20 shadow-[0_0_20px_rgba(236,72,153,0.1)]">
                <p class="text-3xl sm:text-4xl mb-3">🏏</p>
                <h3 class="text-lg sm:text-xl font-bold">Cricket</h3>
                <p class="mt-2 text-xs sm:text-sm text-slate-300">Precision gear for winning performance.</p>
              </div>

              <div class="rounded-3xl border p-4 sm:p-6 backdrop-blur bg-white/5 border-violet-400/20 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                <p class="text-3xl sm:text-4xl mb-3">🏀</p>
                <h3 class="text-lg sm:text-xl font-bold">Basketball</h3>
                <p class="mt-2 text-xs sm:text-sm text-slate-300">Bold gear for modern athletes.</p>
              </div>

              <div class="rounded-3xl border p-4 sm:p-6 backdrop-blur mt-6 bg-white/5 border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]">
                <p class="text-3xl sm:text-4xl mb-3">🎾</p>
                <h3 class="text-lg sm:text-xl font-bold">Tennis</h3>
                <p class="mt-2 text-xs sm:text-sm text-slate-300">Sharp control and premium performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collection" class="mt-8">
        <div class="flex items-center justify-between gap-3 mb-4">
          <div>
            <h2
              class="text-xl sm:text-2xl font-bold"
              :class="
                darkMode
                  ? 'text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]'
                  : 'text-slate-900'
              "
            >
              Shop Collection
            </h2>
            <p
              class="mt-1 text-sm sm:text-base"
              :class="darkMode ? 'text-slate-400' : 'text-slate-500'"
            >
              Find the right equipment for your sport.
            </p>
          </div>

          <div class="hidden md:flex items-center gap-3">
            <span
              class="rounded-full border px-4 py-2 text-sm"
              :class="
                darkMode
                  ? 'bg-[#071a3a] border-cyan-400/20 text-cyan-200 shadow-[0_0_12px_rgba(59,130,246,0.12)]'
                  : 'bg-white border-slate-200 text-slate-600'
              "
            >
              Showing
              <span :class="darkMode ? 'text-white font-bold' : 'text-slate-900 font-bold'">
                {{ filteredProducts.length }}
              </span>
              products
            </span>
          </div>
        </div>

        <FilterBar
          v-model="searchQuery"
          :categories="categories"
          :selected-category="selectedCategory"
          :dark-mode="darkMode"
          @update:selectedCategory="selectedCategory = $event"
        />
      </section>

      <div class="md:hidden mb-6 mt-4">
        <span
          class="rounded-full border px-4 py-2 text-sm inline-block"
          :class="
            darkMode
              ? 'bg-[#071a3a] border-cyan-400/20 text-cyan-200'
              : 'bg-white border-slate-200 text-slate-600'
          "
        >
          Showing
          <span :class="darkMode ? 'text-white font-bold' : 'text-slate-900 font-bold'">
            {{ filteredProducts.length }}
          </span>
          products
        </span>
      </div>

      <div
        v-if="loading"
        class="rounded-3xl border p-10 text-center transition-colors duration-300"
        :class="
          darkMode
            ? 'bg-[#071a3a] border-cyan-400/20 text-cyan-100'
            : 'bg-white border-slate-200 text-slate-500'
        "
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
        :dark-mode="darkMode"
        @select="openModal"
        @add-to-cart="addToCart"
      />
    </main>

    <ProductDetail
      v-if="selectedProduct"
      :product="selectedProduct"
      :dark-mode="darkMode"
      @close="closeModal"
      @add-to-cart="addToCart"
    />

    <CartSidebar
      :cart="cart"
      :is-open="isCartOpen"
      :dark-mode="darkMode"
      @close="closeCart"
      @remove-item="removeCartItem"
      @checkout="openCheckout"
    />

    <CheckoutModal
      :is-open="isCheckoutOpen"
      :cart="cart"
      :dark-mode="darkMode"
      @close="closeCheckout"
      @place-order="placeOrder"
    />

    <Footer :dark-mode="darkMode" />
  </div>
</template>