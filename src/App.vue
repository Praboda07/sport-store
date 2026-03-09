<script setup lang="ts">
import { ref } from 'vue'
import type { DisplayProduct } from './types/DisplayProduct'
import NavBar from './components/NavBar.vue'
import HomeView from './views/HomeView.vue'

const cart = ref<DisplayProduct[]>([])
</script>

<template>
  <NavBar :cartCount="cart.length" />
  <HomeView />
</template>