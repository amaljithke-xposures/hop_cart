<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()
</script>

<template>
  <div class="cart-icon" @click="$emit('open-cart')">
    <div class="cart-wrapper">
      <img src="../assets/shopping-cart.png" alt="Cart" />
      <span v-if="cartStore.cartItemsCount" class="cart-count">
        {{ cartStore.cartItemsCount }}
      </span>
    </div>
    <h6>Cart</h6>
  </div>
</template>

<style scoped>
.cart-icon {
  position: relative;
  cursor: pointer;
}

.cart-wrapper {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  min-width: 16px;
  text-align: center;
}

img {
  width: 24px;
  height: 24px;
}

h6 {
  font-size: 12px;
  margin: 4px 0 0;
  color: #333;
  font-weight: normal;
}
</style>