<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
    <router-link
      to="/"
      class="inline-block mb-6 text-blue-600 font-medium hover:underline"
    >
      ← Back to Products
    </router-link>

    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

    <p class="mb-4 text-gray-600">Items count: {{ cart.items.length }}</p>

    <div v-if="cart.items.length === 0" class="text-gray-500">
      Your cart is empty.
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in cart.items"
        :key="item.id"
        class="bg-white rounded-lg shadow p-4 flex items-center gap-4"
      >
        <img
          :src="item.thumbnail"
          :alt="item.title"
          class="w-24 h-24 object-cover rounded"
        />

        <div class="flex-1">
          <h2 class="text-lg font-semibold">{{ item.title }}</h2>
          <p class="text-green-600 font-bold">${{ item.price }}</p>
        </div>

        <button
          @click="cart.remove(item.id)"
          class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cart } from '../store/cart'

console.log('CartView loaded')
console.log('Cart items in CartView:', cart.items)
</script>