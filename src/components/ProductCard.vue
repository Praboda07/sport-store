<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  product: DisplayProduct
}>()

const emit = defineEmits<{
  (e: 'select', product: DisplayProduct): void
}>()

function handleClick() {
  emit('select', props.product)
}

function onImageError(event: Event) {
  const target = event.target as HTMLImageElement
  target.src = 'https://picsum.photos/seed/sportfallback/600/400'
}
</script>

<template>
  <article
    class="bg-white rounded-2xl shadow-sm border p-4 hover:shadow-lg transition hover:-translate-y-1 cursor-pointer"
    @click="handleClick"
  >
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="h-48 w-full object-cover rounded-xl mb-4"
      loading="lazy"
      @error="onImageError"
    />

    <p class="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-2">
      {{ product.category }}
    </p>

    <h3 class="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
      {{ product.title }}
    </h3>

    <p class="text-sm text-gray-600 mb-4 line-clamp-2">
      {{ product.description }}
    </p>

    <div class="flex items-center justify-between">
      <span class="font-bold text-blue-600 text-lg">
        ${{ product.price }}
      </span>

      <button
        type="button"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </button>
    </div>
  </article>
</template>