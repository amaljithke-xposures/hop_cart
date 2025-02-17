<script setup>
import { useCartStore } from '../stores/cartStore'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
const cartStore = useCartStore()
</script>

<template>
  <div v-if="isOpen" class="cart-overlay" @click="emit('close')">
    <div class="cart-modal" @click.stop>
      <div class="cart-header">
        <h2>Cart Items ({{ cartStore.cartItemsCount }})</h2>
        <button class="close-btn" @click="emit('close')">&times;</button>
      </div>

      <div class="cart-items">
        <div v-if="cartStore.cartItems.length === 0" class="empty-cart">
          Your cart is empty
        </div>
        
        <div v-else v-for="item in cartStore.cartItems" :key="item.cartId" class="cart-item">
          <img :src="item.image" :alt="item.title" class="item-image">

          
          <div class="item-details">
            <h3>{{ item.title }}</h3>
            <p class="price">${{ item.price }}</p>
            <p class="quantity">Quantity: {{ item.quantity }}</p>
          </div>

          <button 
            class="remove-btn"
            @click="cartStore.removeFromCart(item.cartId)"
          >
            Remove
          </button>
        </div>
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
  display: flex;
  flex-direction: column;
}

.cart-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
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
  padding: 16px;
}

.empty-cart {
  text-align: center;
  padding: 20px;
  color: #666;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  gap: 16px;
}

.item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.item-details {
  flex-grow: 1;
}

.item-details h3 {
  margin: 0 0 8px 0;
  font-size: 16px;
}

.price {
  color: #666;
  margin: 4px 0;
}

.quantity {
  color: #666;
  margin: 4px 0;
}

.remove-btn {
  padding: 6px 12px;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cart-footer {
  padding: 16px;
  border-top: 1px solid #eee;
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
</style>