<template>
  <div class="flex flex-col md:flex-row gap-4 mb-6">
    <input
      :value="search"
      @input="$emit('update:search', ($event.target as HTMLInputElement).value)"
      type="text"
      placeholder="Search products..."
      class="border rounded px-4 py-2 w-full md:w-2/3 bg-white"
    />

    <select
      :value="selectedCategory"
      @change="$emit('update:selectedCategory', ($event.target as HTMLSelectElement).value)"
      class="border rounded px-4 py-2 w-full md:w-1/3 bg-white"
    >
      <option value="">All Categories</option>
      <option
        v-for="category in categories"
        :key="category"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  search: string
  selectedCategory: string
  categories: string[]
}>()

defineEmits<{
  (e: 'update:search', value: string): void
  (e: 'update:selectedCategory', value: string): void
}>()
</script>