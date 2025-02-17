<script setup>
import Navbar from './components/Navbar.vue'
import Menu from './components/Menu.vue'
import ProductDetails from './components/ProductDetails.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <Menu />
    <ProductDetails />
  </div>
</template>

<style>
.app {
  font-family: Arial, sans-serif;
}
</style>