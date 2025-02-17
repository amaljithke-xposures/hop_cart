<script setup>
import { useCartStore } from '../stores/cartStore'
import { watch } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const cartStore = useCartStore()

// Watch for cart changes to persist to localStorage
watch(() => cartStore.cartItems, (newItems) => {
  localStorage.setItem('cart-items', JSON.stringify(newItems))
}, { deep: true })
</script>

<template>
  <div v-if="isOpen" class="cart-overlay" @click="emit('close')">
    <div class="cart-modal" @click.stop>
      <div class="cart-header">
        <h2>Shopping Cart ({{ cartStore.cartItemsCount }} items)</h2>
        <button class="close-btn" @click="emit('close')">&times;</button>
      </div>
      
      <div class="cart-items" v-if="cartStore.cartItems.length">
        <div v-for="item in cartStore.cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.title">
          <div class="item-details">
            <h3>{{ item.title }}</h3>
            <p class="price">${{ item.price.toFixed(2) }}</p>
          </div>
          <div class="quantity-controls">
            <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)">+</button>
          </div>
          <button class="remove-btn" @click="cartStore.removeFromCart(item.id)">Remove</button>
        </div>
      </div>
      <div v-else class="empty-cart">
        Your cart is empty
      </div>
      
      <div class="cart-footer" v-if="cartStore.cartItems.length">
        <div class="total">
          Total: ${{ cartStore.cartTotal.toFixed(2) }}
        </div>
        <button class="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: flex-end;
  z-index: 1000;
}

.cart-modal {
  width: 400px;
  background-color: white;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.cart-items {
  flex-grow: 1;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  gap: 10px;
}

.cart-item img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.item-details {
  flex-grow: 1;
}

.item-details h3 {
  margin: 0;
  font-size: 16px;
}

.price {
  color: #666;
  margin: 5px 0;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity-controls button {
  width: 24px;
  height: 24px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.remove-btn {
  padding: 5px 10px;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cart-footer {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.total {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.empty-cart {
  text-align: center;
  padding: 40px;
  color: #666;
}
</style>