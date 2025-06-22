<template>
    <header class="header">
      <div class="container">
        <div>
          <img src="../assets/shared/desktop/logo.svg" alt="audiophile logo" class="logo" />
        </div>
        <nav>
          <ul class="nav-links">
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/headphones">HEADPHONES</router-link></li>
            <li><router-link to="/speakers">SPEAKERS</router-link></li>
            <li><router-link to="/earphones">EARPHONES</router-link></li>
          </ul>
        </nav>
        <img 
         src="../assets/shared/desktop/icon-cart.svg" 
         alt="cart" class="cart-icon" 
         @click="cartStore.setCartStatus(true)"
         />
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { useCartStore } from '@/store/cart-store'

  const cartStore = useCartStore()
  </script>
  
  <style scoped>
  .header {
    background-color: black;
    color: white;
    padding: 1.5rem 2rem;
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    gap: 20rem;
  }
  .nav-links {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 600;
  }
  .cart-icon {
    width: 24px;
    cursor: pointer;
  }
  .logo {
    height: 25px;
  }
  </style>
  