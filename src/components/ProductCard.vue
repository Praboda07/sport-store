<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  product: DisplayProduct
}>()

const emit = defineEmits<{
  (e: 'select', product: DisplayProduct): void
  (e: 'add-to-cart', product: DisplayProduct): void
}>()
</script>

<template>
  <div
    class="group rounded-[1.75rem] bg-white shadow-sm border border-slate-200 overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition duration-300"
    @click="emit('select', props.product)"
  >
    <div class="relative overflow-hidden">
      <img
        :src="props.product.thumbnail"
        :alt="props.product.title"
        class="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
      />
      <div class="absolute top-4 left-4">
        <span class="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          {{ props.product.category }}
        </span>
      </div>
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between gap-3">
        <h2 class="text-xl font-bold text-slate-900 line-clamp-1">
          {{ props.product.title }}
        </h2>

        <span class="text-sm font-semibold text-amber-500 whitespace-nowrap">
          ⭐ {{ props.product.rating }}
        </span>
      </div>

      <p class="text-sm text-slate-500 mt-3 line-clamp-2 leading-6">
        {{ props.product.description }}
      </p>

      <div class="mt-5 flex items-center justify-between">
        <div>
          <p class="text-xs uppercase tracking-wide text-slate-400">
            Price
          </p>
          <p class="text-2xl font-extrabold text-slate-900">
            ${{ props.product.price }}
          </p>
        </div>

        <button
          type="button"
          @click.stop="emit('add-to-cart', props.product)"
          class="rounded-2xl bg-slate-950 text-white px-5 py-3 hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>