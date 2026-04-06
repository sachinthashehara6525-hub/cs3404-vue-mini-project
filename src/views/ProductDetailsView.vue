<template>
  <div class="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
    <router-link
      to="/"
      class="inline-block mb-6 text-blue-600 font-medium hover:underline"
    >
      ← Back to Products
    </router-link>

    <div v-if="product" class="bg-white rounded-lg shadow p-6">
      <img
        :src="product.thumbnail"
        :alt="product.title"
        class="w-full max-w-md h-72 object-cover rounded mb-6 mx-auto"
      />

      <h1 class="text-3xl font-bold mb-3">{{ product.title }}</h1>

      <p class="text-gray-500 mb-2">
        Category: {{ product.category }}
      </p>

      <p class="text-2xl font-bold text-green-600 mb-4">
        ${{ product.price }}
      </p>

      <p class="text-gray-700 leading-7 mb-6">
        {{ product.description }}
      </p>

      <button
        @click="addToCart"
        class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>

    <p v-else class="text-center text-gray-500">Loading product...</p>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Product } from '../types/Product'
import { cart } from '../store/cart'

const route = useRoute()
const router = useRouter()
const product = ref<Product | null>(null)

const addToCart = () => {
  if (product.value) {
    cart.add(product.value)
    alert('Added to cart!')
    router.push('/cart')
  }
}

onMounted(async () => {
  const id = route.params.id
  const res = await axios.get(`https://dummyjson.com/products/${id}`)
  product.value = res.data
})
</script>