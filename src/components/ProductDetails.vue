<script setup>
import { useCartStore } from '../stores/cartStore'

const cartStore = useCartStore()

const product = {
  id: 1,
  title: "10 x 13 Booklet Envelope - Brown Kraft 28lb.",
  price: 48.00,
  image: "../assets/image_2025_02_10T06_33_31_219Z__1_-removebg-preview.png",
  quantity: 1
}

const addToCart = () => {
  cartStore.addToCart(product)
}
</script>


<template>
  <div class="container">
    <div class="product-image-section">
      <img src="../assets/image_2025_02_10T06_33_31_219Z__1_-removebg-preview.png" alt="Product Image">
      <div class="thumbnail-container">
        <img src="../assets/image_2025_02_10T06_33_31_219Z (1).png" alt="" class="diff">
      </div>
    </div>

    <div class="product-details-section">
      <div class="breadcrumb">Home / Business envelopes / Regular envelopes / 10 x 13 Booklet Envelope</div>
      <h1>10 x 13 Booklet Envelope - Brown Kraft 28lb.</h1>
      <span>
        <div class="rating">
          <p class="glue">Moistenable Glue</p>★★★★☆ (5)
        </div>
      </span>

      <div class="options">
        <div class="asddf">Color & Texture:</div>
        <div class="asdfg"><strong>Brown Kraft 28lb</strong></div>
      </div>

      <div class="options">
        <span>Customization: <i class="fa">&#xf059;</i></span>
        <strong>None</strong>
        <button class="add-printing-btn">Add Printing</button>
      </div>

      <div class="options">
        <span>Quantity:<i class="fa">&#xf059;</i></span>
        50 ($1.76 each) - <strong>Ships FREE</strong>
        <div class="qwertyt"><strong>></strong></div>
      </div>

      <div class="ASD">
        <span class="price">$48.00</span>
        <span class="old-price"><strong>$88.00</strong></span>
      </div>

      <div class="IZXC">
    <button class="add-to-cart-btn" @click="addToCart">ADD TO CART</button>
  </div>

      <div class="extra-options">
        <a href="#">Order Samples</a> | <a href="#">E-mail a quote</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  padding: 20px;
  background-color: white;
}

.product-image-section {
  flex: 1;
  text-align: center;
}

.product-image-section img {
  width: 100%;
  max-width: 600px;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

.product-details-section {
  flex: 1;
  padding: 20px;
  border-left: 1px solid #ccc;
}

.breadcrumb {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.product-details-section h1 {
  font-size: 24px;
  margin: 10px 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}

.rating {
  color: green;
  margin: 5px 0;
  text-align: right;
}

.glue {
  text-align: left;
}

.ASD {
  text-align: center;
}

.price {
  color: red;
  font-size: 24px;
  font-weight: bold;
}

.old-price {
  text-decoration: line-through;
  color: #999;
  margin-left: 10px;
}

.IZXC {
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-to-cart-btn {
  background-color: #3d3c32ee;
  color: white;
  padding: 15px 90px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
}

.add-printing-btn {
  background-color: rgb(30, 235, 30);
  color: white;
  padding: 9px 15px;
  border: none;
  border-radius: 5px;
}

.options {
  margin: 15px 0;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.extra-options {
  margin-top: 15px;
  text-align: center;
}

.extra-options a {
  text-decoration: none;
  color: #006644;
  margin: 0 10px;
  font-weight: bold;
}
</style>