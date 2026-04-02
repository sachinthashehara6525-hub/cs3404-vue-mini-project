<template>
  <div class="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
    <h1 class="text-3xl font-bold mb-6">Products</h1>

    <FilterBar
      :search="search"
      :selectedCategory="selectedCategory"
      :categories="categories"
      @update:search="search = $event"
      @update:selectedCategory="selectedCategory = $event"
    />

    <ProductList :products="filteredProducts" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import ProductList from './components/ProductList.vue'
import FilterBar from './components/FilterBar.vue'
import type { Product } from './types/Product'

const products = ref<Product[]>([])
const search = ref('')
const selectedCategory = ref('')

onMounted(async () => {
  const res = await axios.get('https://dummyjson.com/products')
  products.value = res.data.products
})

const categories = computed(() => {
  return [...new Set(products.value.map(product => product.category))]
})

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === '' ||
      product.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>