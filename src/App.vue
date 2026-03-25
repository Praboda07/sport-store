<script setup lang="ts">
import { ref, watch } from 'vue'
import type { DisplayProduct } from './types/DisplayProduct'

import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'
import Footer from './components/Footer.vue'
import CartSidebar from './components/CartSidebar.vue'

const cart = ref<DisplayProduct[]>([])
const isCartOpen = ref(false)

// load cart from localStorage
const savedCart = localStorage.getItem('cart')
if (savedCart) {
  cart.value = JSON.parse(savedCart)
}

// save cart to localStorage whenever it changes
watch(
  cart,
  (newCart) => {
    localStorage.setItem('cart', JSON.stringify(newCart))
  },
  { deep: true }
)

function addToCart(product: DisplayProduct) {
  cart.value.push(product)
}

function removeFromCart(product: DisplayProduct) {
  const index = cart.value.findIndex((p) => p.id === product.id)
  if (index !== -1) {
    cart.value.splice(index, 1)
  }
}

function openCart() {
  isCartOpen.value = true
}

function closeCart() {
  isCartOpen.value = false
}
</script>

<template>
  <NavBar
    :cartCount="cart.length"
    @open-cart="openCart"
  />

  <HomeView @add-to-cart="addToCart" />

  <CartSidebar
    :cart="cart"
    :isOpen="isCartOpen"
    @close="closeCart"
    @remove="removeFromCart"
  />

  <Footer />
</template>