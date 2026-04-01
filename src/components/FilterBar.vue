<script setup lang="ts">
defineProps<{
  modelValue: string
  categories: string[]
  selectedCategory: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:selectedCategory', value: string): void
}>()

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit('update:selectedCategory', target.value)
}
</script>

<template>
  <div class="rounded-[2rem] bg-white/90 backdrop-blur shadow-xl border border-slate-200 p-5 md:p-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
      <div class="lg:col-span-8">
        <label class="block text-sm font-semibold text-slate-700 mb-3">
          Search products
        </label>

        <div class="relative">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search premium sports gear..."
            :value="modelValue"
            @input="onInput"
            class="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div class="lg:col-span-4">
        <label class="block text-sm font-semibold text-slate-700 mb-3">
          Category
        </label>

        <select
          :value="selectedCategory"
          @change="onChange"
          class="w-full px-4 py-4 rounded-2xl border border-slate-200 bg-slate-50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        >
          <option
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>