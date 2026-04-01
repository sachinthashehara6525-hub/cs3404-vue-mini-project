<template>
  <div class="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
    <img
      :src="product.thumbnail"
      :alt="product.title"
      class="w-full h-40 object-cover rounded mb-3"
    />

    <h2 class="font-semibold text-lg mb-1">
      {{ product.title }}
    </h2>

    <p class="text-green-600 font-bold text-md">
      ${{ product.price }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types/Product'

defineProps<{
  product: Product
}>()
</script>