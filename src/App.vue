<template>
  <div>
    <nav class="p-4 bg-white shadow flex justify-between">
      <router-link to="/" class="text-xl font-bold text-blue-600">
        My Shop
      </router-link>

      <router-link
        to="/cart"
        class="text-blue-600 font-medium hover:underline"
      >
        Cart ({{ cart.getTotalItems() }})
      </router-link>
    </nav>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { cart } from './store/cart'
</script>