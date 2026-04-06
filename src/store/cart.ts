import { reactive } from 'vue'
import type { Product } from '../types/Product'

export const cart = reactive({
  items: [] as Product[],

  add(product: Product) {
    this.items.push(product)
    console.log('Added to cart:', product)
    console.log('Cart items now:', this.items)
  },

  remove(id: number) {
    const index = this.items.findIndex(item => item.id === id)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  },
})