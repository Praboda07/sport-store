<script setup lang="ts">
import { ref } from 'vue'
import type { DisplayProduct } from './types/DisplayProduct'
import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'
import Footer from './components/Footer.vue'

const cart = ref<DisplayProduct[]>([])

function addToCart(product: DisplayProduct) {
  cart.value.push(product)
}
</script>

<template>
  <NavBar :cartCount="cart.length" />
  <HomeView @add-to-cart="addToCart" />
  <Footer />
</template>