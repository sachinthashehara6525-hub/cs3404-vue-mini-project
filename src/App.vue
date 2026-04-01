<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <ProductList :products="products" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted } from 'vue'
import ProductList from './components/ProductList.vue'
import type { Product } from './types/Product'

const products = ref<Product[]>([])

onMounted(async () => {
  const res = await axios.get('https://dummyjson.com/products')
  products.value = res.data.products
})
</script>