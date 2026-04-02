<script setup lang="ts">
import { computed, ref } from 'vue'
import type { DisplayProduct } from '../types/DisplayProduct'

const props = defineProps<{
  isOpen: boolean
  cart: DisplayProduct[]
  darkMode: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'place-order'): void
}>()

const name = ref('')
const phone = ref('')
const address = ref('')

const totalPrice = computed(() => {
  return props.cart.reduce((total, item) => total + item.price, 0)
})

const handlePlaceOrder = () => {
  if (!name.value || !phone.value || !address.value) {
    alert('Please fill all fields')
    return
  }

  alert('Order placed successfully!')
  emit('place-order')
  emit('close')

  name.value = ''
  phone.value = ''
  address.value = ''
}
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 z-[60] bg-black/60 flex items-center justify-center p-3 sm:p-4"
    @click.self="emit('close')"
  >
    <div
      class="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[1.5rem] shadow-2xl transition-colors duration-300"
      :class="darkMode ? 'bg-slate-900' : 'bg-white'"
    >
      <div
        class="flex items-center justify-between p-4 sm:p-6 border-b"
        :class="darkMode ? 'border-slate-800' : 'border-slate-200'"
      >
        <h2
          class="text-xl sm:text-2xl font-bold"
          :class="darkMode ? 'text-white' : 'text-slate-900'"
        >
          Checkout
        </h2>

        <button
          @click="emit('close')"
          class="w-10 h-10 rounded-full text-xl"
          :class="darkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-800'"
        >
          ✕
        </button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 sm:p-6">
        <!-- Form -->
        <div>
          <h3
            class="text-lg font-semibold mb-4"
            :class="darkMode ? 'text-white' : 'text-slate-900'"
          >
            Customer Details
          </h3>

          <div class="space-y-4">
            <div>
              <label
                class="block text-sm mb-2"
                :class="darkMode ? 'text-slate-300' : 'text-slate-700'"
              >
                Full Name
              </label>
              <input
                v-model="name"
                type="text"
                placeholder="Enter your name"
                class="w-full px-4 py-3 rounded-xl border outline-none"
                :class="
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-400'
                    : 'bg-white border-slate-300 text-slate-900'
                "
              />
            </div>

            <div>
              <label
                class="block text-sm mb-2"
                :class="darkMode ? 'text-slate-300' : 'text-slate-700'"
              >
                Phone Number
              </label>
              <input
                v-model="phone"
                type="text"
                placeholder="Enter phone number"
                class="w-full px-4 py-3 rounded-xl border outline-none"
                :class="
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-400'
                    : 'bg-white border-slate-300 text-slate-900'
                "
              />
            </div>

            <div>
              <label
                class="block text-sm mb-2"
                :class="darkMode ? 'text-slate-300' : 'text-slate-700'"
              >
                Delivery Address
              </label>
              <textarea
                v-model="address"
                rows="4"
                placeholder="Enter delivery address"
                class="w-full px-4 py-3 rounded-xl border outline-none resize-none"
                :class="
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-white placeholder:text-slate-400'
                    : 'bg-white border-slate-300 text-slate-900'
                "
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div>
          <h3
            class="text-lg font-semibold mb-4"
            :class="darkMode ? 'text-white' : 'text-slate-900'"
          >
            Order Summary
          </h3>

          <div
            class="rounded-2xl border p-4"
            :class="darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'"
          >
            <div
              v-if="cart.length === 0"
              class="text-sm"
              :class="darkMode ? 'text-slate-400' : 'text-slate-500'"
            >
              No items in cart
            </div>

            <div
              v-for="(item, index) in cart"
              :key="`${item.id}-${index}`"
              class="flex items-center justify-between py-3 border-b last:border-b-0"
              :class="darkMode ? 'border-slate-800' : 'border-slate-200'"
            >
              <div class="pr-3">
                <p
                  class="font-medium text-sm sm:text-base"
                  :class="darkMode ? 'text-white' : 'text-slate-900'"
                >
                  {{ item.title }}
                </p>
                <p
                  class="text-xs sm:text-sm"
                  :class="darkMode ? 'text-slate-400' : 'text-slate-500'"
                >
                  {{ item.category }}
                </p>
              </div>

              <p class="font-bold text-blue-500 text-sm sm:text-base">
                Rs. {{ item.price.toLocaleString() }}
              </p>
            </div>

            <div class="flex items-center justify-between pt-4 mt-4">
              <span
                class="text-base sm:text-lg font-semibold"
                :class="darkMode ? 'text-slate-300' : 'text-slate-700'"
              >
                Total
              </span>

              <span
                class="text-xl sm:text-2xl font-extrabold"
                :class="darkMode ? 'text-white' : 'text-slate-900'"
              >
                Rs. {{ totalPrice.toLocaleString() }}
              </span>
            </div>
          </div>

          <button
            @click="handlePlaceOrder"
            class="w-full mt-5 rounded-2xl py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition"
            :class="darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-slate-950 hover:bg-blue-700'"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>