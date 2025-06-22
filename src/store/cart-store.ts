import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartStatus: false,
    thankyouStatus: false,
    items: [] as Array<{
      id: number
      name: string
      price: number
      image: string
      quantity: number
    }>
  }),
  actions: {
    setCartStatus(status: boolean) {
      this.cartStatus = status
    },
    setThankyouStatus(status: boolean) {
      this.thankyouStatus = status
    },
    addItem(item: Omit<typeof this.items[number], 'quantity'>, qty = 1) {
      const existing = this.items.find(i => i.id === item.id)
      if (existing) {
        existing.quantity += qty
      } else {
        this.items.push({ ...item, quantity: qty })
      }
    },
    updateItems(newItems: typeof this.items) {
      this.items = newItems
    },
    removeAll() {
      this.items = []
    },
  },
  persist: {
    paths: ['items'],
    storage: localStorage
  }
})
