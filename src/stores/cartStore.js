
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', {
  // State 
  state: () => ({
    cartItems: []
  }),

  // Getters 
  getters: {
    cartItemsCount: (state) => state.cartItems.length
  },

  // Actions 
  actions: {
    addToCart(product) {
      const newItem = {
        ...product,
        cartId: Date.now() 
      }
      this.cartItems.push(newItem)
    },

    removeFromCart(cartId) {
      const index = this.cartItems.findIndex(item => item.cartId === cartId)
      if (index > -1) {
        this.cartItems.splice(index, 1)
      }
    }
  }
})
