<script setup lang="ts">
defineProps<{
  darkMode: boolean
}>()
</script>

<template>
  <footer
    class="mt-14 transition-colors duration-300"
    :class="
      darkMode
        ? 'bg-slate-950 text-white border-t border-slate-800'
        : 'bg-gray-900 text-white border-t border-gray-800'
    "
  >
    <div class="max-w-7xl mx-auto px-6 py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div>
          <h2 class="text-2xl font-bold">Sports Item Store</h2>
          <p
            class="mt-3 text-sm leading-6"
            :class="darkMode ? 'text-slate-400' : 'text-gray-400'"
          >
            Your trusted store for premium sports equipment, fitness essentials,
            and training accessories.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
          <ul
            class="space-y-2 text-sm"
            :class="darkMode ? 'text-slate-400' : 'text-gray-400'"
          >
            <li>
              <a href="#home" class="hover:text-white transition">Home</a>
            </li>
            <li>
              <a href="#collection" class="hover:text-white transition">Collection</a>
            </li>
            <li>
              <a href="#about" class="hover:text-white transition">About</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div id="about">
          <h3 class="text-lg font-semibold mb-3">Contact</h3>
          <p :class="darkMode ? 'text-slate-400 text-sm' : 'text-gray-400 text-sm'">
            Email: sportstore@email.com
          </p>
          <p class="mt-2" :class="darkMode ? 'text-slate-400 text-sm' : 'text-gray-400 text-sm'">
            Phone: +94 71 234 5678
          </p>
          <p class="mt-2" :class="darkMode ? 'text-slate-400 text-sm' : 'text-gray-400 text-sm'">
            Location: Sri Lanka
          </p>
        </div>
      </div>

      <div
        class="mt-8 pt-5 text-center text-sm transition-colors duration-300"
        :class="
          darkMode
            ? 'border-t border-slate-800 text-slate-500'
            : 'border-t border-gray-800 text-gray-500'
        "
      >
        © 2026 Sports Item Store. All rights reserved.
      </div>
    </div>
  </footer>
</template>