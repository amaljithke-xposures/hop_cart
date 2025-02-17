<script setup>
import { ref } from 'vue'
import CartIcon from './CartIcon.vue'
import Cart from './Cart.vue'

const isCartOpen = ref(false)
</script>

<template>
  <div class="navbar">
    <div class="logo">
      <img src="../assets/snapedit_1739181777387-removebg-preview.png" alt="House of Paper" />

    </div>
    
    <div class="search-bar">
      <input 
        id="searchQueryInput" 
        type="text" 
        placeholder="Search for the best envelopes for you" 
      />
      <button id="searchQuerySubmit" type="submit">
        <svg style="width:20px;height:24px" viewBox="0 0 24 24">
          <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
        </svg>
      </button>

      <div class="icons">
        <div>
          <img src="../assets/history.png" alt="History" />
          <h6>History</h6>
        </div>
        <div>
          <img src="../assets/heart.png" alt="Saved Items" />
          <h6>Saved Items</h6>
        </div>
        <div>
          
           <CartIcon @open-cart="isCartOpen = true" />
         
        </div>
       
        <div class="profile-icon">
          <img src="../assets/boy.png" alt="Profile" />
        </div>
      </div>
    </div>
  </div>
  <Cart :is-open="isCartOpen" @close="isCartOpen = false" />
</template>

<style scoped>
.navbar {
  background-color: #c1d7d3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}

.logo {
  width: 7rem;
  margin-right: 60px;
}

.logo img {
  width: 100%;
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 20px;
  gap: 2rem;
}

#searchQueryInput {
  width: 400px;
  padding: 10px 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  color: #666;
  background-color: white;
}

#searchQueryInput:focus {
  outline: none;
  border-color: #4a90e2;
}

#searchQuerySubmit {
  position: absolute;
  left: 10px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.icons {
  display: flex;
  align-items: center;
  gap: 25px;
}

.icons > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.icons img {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.icons h6 {
  font-size: 12px;
  margin: 0;
  color: #333;
  font-weight: normal;
}

.profile-icon img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
</style>