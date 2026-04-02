<script setup lang="ts">
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  product: DisplayProduct
  darkMode: boolean
}>()

const emit = defineEmits<{
  (e: 'select', product: DisplayProduct): void
  (e: 'add-to-cart', product: DisplayProduct): void
}>()
</script>

<template>
  <div
    class="group rounded-[1.75rem] border overflow-hidden cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition duration-300"
    :class="
      darkMode
        ? 'bg-slate-900 border-slate-700'
        : 'bg-white border-slate-200'
    "
    @click="emit('select', props.product)"
  >
    <div class="relative overflow-hidden">
      <img
        :src="props.product.thumbnail"
        :alt="props.product.title"
        class="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
      />
      <div class="absolute top-4 left-4">
        <span
          class="rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
          :class="
            darkMode
              ? 'bg-slate-800/90 text-slate-200'
              : 'bg-white/90 text-slate-700'
          "
        >
          {{ props.product.category }}
        </span>
      </div>
    </div>

    <div class="p-5">
      <div class="flex items-start justify-between gap-3">
        <h2
          class="text-xl font-bold line-clamp-1"
          :class="darkMode ? 'text-white' : 'text-slate-900'"
        >
          {{ props.product.title }}
        </h2>

        <span class="text-sm font-semibold text-amber-500 whitespace-nowrap">
          ⭐ {{ props.product.rating }}
        </span>
      </div>

      <p
        class="text-sm mt-3 line-clamp-2 leading-6"
        :class="darkMode ? 'text-slate-400' : 'text-slate-500'"
      >
        {{ props.product.description }}
      </p>

      <div class="mt-5 flex items-center justify-between">
        <div>
          <p
            class="text-xs uppercase tracking-wide"
            :class="darkMode ? 'text-slate-500' : 'text-slate-400'"
          >
            Price
          </p>
          <p
            class="text-2xl font-extrabold"
            :class="darkMode ? 'text-white' : 'text-slate-900'"
          >
            Rs. {{ props.product.price.toLocaleString() }}
          </p>
        </div>

        <button
          type="button"
          @click.stop="emit('add-to-cart', props.product)"
          class="rounded-2xl px-5 py-3 transition"
          :class="
            darkMode
              ? 'bg-blue-600 text-white hover:bg-blue-700'
              : 'bg-slate-950 text-white hover:bg-blue-700'
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>