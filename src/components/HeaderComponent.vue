<template>
  <header class="header">
    <div class="container">
      <!-- Hamburger - visible on tablet & mobile -->
      <img
        src="../assets/shared/tablet/icon-hamburger.svg"
        alt="menu"
        class="hamburger"
        @click="toggleMenu"
      />

      <!-- Logo - properly centered on all screen sizes -->
      <div class="logo-container">
        <img
          src="../assets/shared/desktop/logo.svg"
          alt="audiophile logo"
          class="logo"
        />
      </div>

      <!-- Desktop Navigation -->
      <nav class="desktop-nav" aria-label="Main navigation">
        <ul class="nav-links">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/headphones">HEADPHONES</router-link></li>
          <li><router-link to="/speakers">SPEAKERS</router-link></li>
          <li><router-link to="/earphones">EARPHONES</router-link></li>
        </ul>
      </nav>

      <!-- Cart Icon -->
      <img
        src="../assets/shared/desktop/icon-cart.svg"
        alt="cart"
        class="cart-icon"
        @click="cartStore.setCartStatus(true)"
      />
    </div>

    <!-- Mobile Drawer -->
    <nav v-if="showMenu" class="mobile-nav" aria-label="Mobile navigation">
      <ul class="nav-links-mobile">
        <li><router-link to="/" @click="closeMenu">HOME</router-link></li>
        <li><router-link to="/headphones" @click="closeMenu">HEADPHONES</router-link></li>
        <li><router-link to="/speakers" @click="closeMenu">SPEAKERS</router-link></li>
        <li><router-link to="/earphones" @click="closeMenu">EARPHONES</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCartStore } from "@/store/cart-store";

const cartStore = useCartStore();
const showMenu = ref(false);

const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};

const closeMenu = () => {
  showMenu.value = false;
};
</script>

<style scoped>
.header {
  background-color: black;
  color: white;
  padding: 2rem 1.5rem;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  position: relative;
}

.logo {
  height: 25px;
  width: auto;
}

.hamburger {
  width: 16px;
  height: 15px;
  cursor: pointer;
}

.cart-icon {
  width: 23px;
  height: 20px;
  cursor: pointer;
}

/* Desktop Navigation */
.desktop-nav {
  display: none;
}

.nav-links {
  display: flex;
  gap: 2.125rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 2px;
  font-size: 0.8125rem;
  line-height: 1.5625rem;
  text-transform: uppercase;
}

.nav-links a:hover {
  color: #d87d4a;
}

/* Mobile Navigation */
.mobile-nav {
  background-color: white;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 2rem;
  z-index: 5;
}

.nav-links-mobile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-links-mobile a {
  color: black;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* ===== Responsive Breakpoints ===== */
/* Tablet (768px-1024px) */
@media (max-width: 1024px) {
  .hamburger {
    display: block;
  }
  
  .desktop-nav {
    display: none;
  }
  
  .logo-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .cart-icon {
    margin-left: auto;
  }
}

/* Desktop (1025px and above) */
@media (min-width: 1025px) {
  .logo-container {
    position: static;
    transform: none;
    margin-right: auto;
  }
  
  .hamburger {
    display: none;
  }
  
  .desktop-nav {
    display: block;
    margin: 0 auto;
  }
  
  .container {
    justify-content: flex-start;
    gap: 2rem;
  }
}

/* Mobile (up to 767px) */
@media (max-width: 767px) {
  .container {
    padding: 0;
  }
  
  .logo-container {
    position: static;
    transform: none;
    order: 2;
    text-align: center;
    flex: 1;
  }
  
  .hamburger {
    order: 1;
  }
  
  .cart-icon {
    order: 3;
  }
}
</style>