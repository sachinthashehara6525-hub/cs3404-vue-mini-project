<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
    <router-link
      to="/"
      class="inline-block mb-6 text-blue-600 font-medium hover:underline"
    >
      ← Back to Products
    </router-link>

    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

    <div
      v-if="cart.items.length === 0"
      class="bg-white rounded-lg shadow p-8 text-center"
    >
      <p class="text-xl text-gray-600 mb-4">Your cart is empty.</p>

      <router-link
        to="/"
        class="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Continue Shopping
      </router-link>
    </div>

    <div v-else>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-700 font-medium">
          Total Items: {{ cart.getTotalItems() }}
        </p>

        <button
          @click="cart.clear()"
          class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Clear Cart
        </button>
      </div>

      <div class="space-y-4 mb-6">
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
            <p class="text-green-600 font-bold">${{ item.price.toFixed(2) }}</p>
            <p class="text-gray-600">Quantity: {{ item.quantity }}</p>
            <p class="text-gray-800 font-medium">
              Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}
            </p>
          </div>

          <div class="flex flex-col gap-2">
            <button
              @click="cart.increase(item.id)"
              class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              +
            </button>

            <button
              @click="cart.decrease(item.id)"
              class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              -
            </button>

            <button
              @click="cart.remove(item.id)"
              class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow p-4 flex justify-between items-center">
        <h2 class="text-2xl font-bold">
          Total Price: ${{ cart.getTotalPrice().toFixed(2) }}
        </h2>

        <router-link
          to="/"
          class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Continue Shopping
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cart } from '../store/cart'
</script>