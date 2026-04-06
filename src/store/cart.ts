import { reactive, watch } from 'vue'
import type { Product } from '../types/Product'

export interface CartItem extends Product {
  quantity: number
}

const savedCart = localStorage.getItem('cart')

export const cart = reactive({
  items: savedCart ? (JSON.parse(savedCart) as CartItem[]) : [],

  add(product: Product) {
    const existingItem = this.items.find(item => item.id === product.id)

    if (existingItem) {
      existingItem.quantity++
    } else {
      this.items.push({
        ...product,
        quantity: 1,
      })
    }
  },

  increase(id: number) {
    const item = this.items.find(item => item.id === id)
    if (item) {
      item.quantity++
    }
  },

  decrease(id: number) {
    const item = this.items.find(item => item.id === id)
    if (item) {
      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.remove(id)
      }
    }
  },

  remove(id: number) {
    const index = this.items.findIndex(item => item.id === id)
    if (index !== -1) {
      this.items.splice(index, 1)
    }
  },

  getTotalPrice() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity
    }, 0)
  },

  getTotalItems() {
    return this.items.reduce((total, item) => {
      return total + item.quantity
    }, 0)
  },
})

watch(
  () => cart.items,
  newItems => {
    localStorage.setItem('cart', JSON.stringify(newItems))
  },
  { deep: true }
)