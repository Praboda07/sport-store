<template>
  <article
    class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
  >
    <!-- Image -->
    <div class="relative overflow-hidden">
  <img
    :src="product.thumbnail"
    :alt="product.title"
    class="w-full h-52 object-cover"
  />

  <!-- ✅ ADD HERE -->
  <div
    v-if="product.rating > 4.0"
    class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded"
  >
    HOT
  </div>
</div>

    <!-- Content -->
    <div class="p-4">
      <p class="text-xs font-semibold uppercase tracking-wide text-blue-600">
        {{ product.category }}
      </p>

      <h3 class="text-xl font-bold text-gray-900 mt-2 line-clamp-1">
        {{ product.title }}
      </h3>

      <!-- Rating -->
      <div class="flex items-center gap-1 mt-2">
        <span
          v-for="i in 5"
          :key="i"
          class="text-yellow-400 text-sm"
        >
          {{ i <= Math.round(product.rating) ? '★' : '☆' }}
        </span>
        <span class="text-xs text-gray-500 ml-1">
          ({{ product.rating.toFixed(1) }})
        </span>
      </div>

      <p class="text-sm text-gray-600 mt-3 line-clamp-2 min-h-[48px]">
        {{ product.description }}
      </p>

      <div class="flex items-center justify-between mt-5">
        <span class="text-2xl font-bold text-blue-600">
          ${{ product.price }}
        </span>

        <button
          type="button"
          class="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          @click="$emit('select', product)"
        >
          View Details
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

defineProps<{
  product: DisplayProduct
}>()

defineEmits<{
  (e: 'select', product: DisplayProduct): void
}>()

const onImageError = (event: Event) => {
  const target = event.target as HTMLImageElement
  target.src = 'https://picsum.photos/seed/sportfallback/600/400'
}
</script>