<template>
  <router-link :to="`/product/${product.id}`" class="block">
    <div class="border rounded-lg p-4 hover:shadow-lg transition">
      <img :src="product.thumbnail" :alt="product.title" class="h-40 w-full object-contain" />
      <h2 class="mt-2 font-semibold">{{ product.title }}</h2>
      <p class="text-green-600 font-bold">${{ product.price }}</p>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import type { Product } from '../types/Product'

defineProps<{
  product: Product
}>()
</script>