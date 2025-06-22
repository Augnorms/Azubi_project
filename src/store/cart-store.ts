import { defineStore } from 'pinia'
import type { PersistenceOptions } from 'pinia-plugin-persistedstate'

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartStatus: false,
    thankyouStatus: false,
    items: [] as CartItem[]
  }),
  actions: {
    setCartStatus(status: boolean) {
      this.cartStatus = status
    },
    setThankyouStatus(status: boolean) {
      this.thankyouStatus = status
    },
    addItem(item: Omit<CartItem, 'quantity'>, qty = 1) {
      const existing: CartItem | undefined = this.items.find((i: CartItem) => i.id === item.id)
      if (existing) {
        existing.quantity += qty
      } else {
        this.items.push({ ...item, quantity: qty })
      }
    },
    updateItems(newItems: CartItem[]) {
      this.items = newItems
    },
    removeAll() {
      this.items = []
    },
  },
  persist: {
    storage: localStorage,
    paths: ['items']
  } as PersistenceOptions
})