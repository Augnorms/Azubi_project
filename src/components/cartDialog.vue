<template>
    <div class="cart-dialog" :class="{ 'cart-dialog--open': isOpen }">
      <div class="cart-dialog__overlay" @click="closeDialog"></div>
  
      <div class="cart-dialog__content">
        <div class="cart-dialog__header">
          <h2 class="cart-dialog__title">CART ({{ cartItems.length }})</h2>
          <button class="cart-dialog__remove-all" @click="removeAllItems">Remove all</button>
        </div>
  
        <div class="cart-dialog__items">
          <div v-if="cartItems.length === 0" class="cart-dialog__empty">
            <p>Your cart is empty</p>
          </div>
  
          <div v-else>
            <div v-for="(item, index) in cartItems" :key="item.id" class="cart-item">
              <div class="cart-item__image">
                <img :src="item.image" :alt="item.name" />
              </div>
              <div class="cart-item__details">
                <h3 class="cart-item__name">{{ item.name }}</h3>
                <p class="cart-item__price">${{ item.price.toLocaleString() }}</p>
              </div>
              <div class="cart-item__quantity-controls">
                <button
                  class="quantity-btn"
                  @click="decrementQuantity(index)"
                  :disabled="item.quantity <= 1"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span class="quantity-value">{{ item.quantity }}</span>
                <button
                  class="quantity-btn"
                  @click="incrementQuantity(index)"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
  
        <div v-if="cartItems.length > 0" class="cart-dialog__summary">
          <div class="cart-dialog__total">
            <span>TOTAL</span>
            <span>${{ total.toLocaleString() }}</span>
          </div>
          <button class="cart-dialog__checkout" @click="proceedToCheckout">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useCartStore } from '@/store/cart-store'

  const cartStore = useCartStore()
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true
    },
    cartItems: {
      type: Array,
      required: true,
      default: () => []
    }
  });
  
  const emit = defineEmits(['close', 'update-cart', 'checkout']);
  
  const closeDialog = () => {
    emit('close');
    cartStore.setCartStatus(false); // Update the cart status in the store
  };
  
  const incrementQuantity = (index) => {
    const updatedItems = [...props.cartItems];
    updatedItems[index].quantity += 1;
    emit('update-cart', updatedItems);
  };
  
  const decrementQuantity = (index) => {
    const updatedItems = [...props.cartItems];
    if (updatedItems[index].quantity > 1) {
      updatedItems[index].quantity -= 1;
      emit('update-cart', updatedItems);
    }
  };
  
  const removeAllItems = () => {
    emit('update-cart', []);
  };
  
  const proceedToCheckout = () => {
    emit('checkout');
  };
  
  const total = computed(() => {
    return props.cartItems.reduce((sum, item) => {
      return sum + (item.price * item.quantity);
    }, 0);
  });
  </script>
  
  <style scoped>
  .cart-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    justify-content: flex-end;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
  
  .cart-dialog--open {
    opacity: 1;
    visibility: visible;
  }
  
  .cart-dialog__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .cart-dialog__content {
    position: relative;
    width: 100%;
    max-width: 377px;
    background-color: #fff;
    padding: 32px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-height: 500px; /* Changed from calc(100vh - 90px) to fixed 500px */
    overflow-y: auto;
    border-radius: 8px;
    margin-top: 90px;
    margin-right: 165px;
    box-sizing: border-box;
  }
  
  .cart-dialog--open .cart-dialog__content {
    transform: translateX(0);
  }
  
  .cart-dialog__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }
  
  .cart-dialog__title {
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1.29px;
    text-transform: uppercase;
    margin: 0;
    color: #000;
  }
  
  .cart-dialog__remove-all {
    background: none;
    border: none;
    cursor: pointer;
    color: #000;
    opacity: 0.5;
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-decoration: underline;
    transition: opacity 0.2s ease;
  }
  
  .cart-dialog__remove-all:hover {
    opacity: 1;
    color: #D87D4A;
  }
  
  .cart-dialog__items {
    margin-bottom: 32px;
  }
  
  .cart-dialog__empty {
    text-align: center;
    padding: 20px 0;
    color: #7D7D7D;
    font-family: 'Manrope', sans-serif;
  }
  
  .cart-item {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }
  
  .cart-item__image {
    width: 64px;
    height: 64px;
    margin-right: 16px;
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
  }
  
  .cart-item__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .cart-item__details {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 16px;
  }
  
  .cart-item__name {
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 700;
    margin: 0;
    color: #000;
  }
  
  .cart-item__price {
    font-family: 'Manrope', sans-serif;
    font-size: 14px;
    font-weight: 700;
    opacity: 0.5;
    margin: 0;
    color: #000;
  }
  
  .cart-item__quantity-controls {
    display: flex;
    align-items: center;
    background-color: #F1F1F1;
    border-radius: 4px;
    padding: 0px;
    height: 32px;
    flex-shrink: 0;
  }
  
  .quantity-btn {
    width: 32px;
    height: 32px;
    border: none;
    background: none;
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    color: #000;
    opacity: 0.25;
    cursor: pointer;
    transition: opacity 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
  
  .quantity-btn:hover {
    opacity: 0.75;
    color: #D87D4A;
  }
  
  .quantity-btn:disabled {
    opacity: 0.1;
    cursor: not-allowed;
  }
  
  .quantity-value {
    width: 20px;
    text-align: center;
    font-family: 'Manrope', sans-serif;
    font-weight: 700;
    font-size: 13px;
    color: #000;
  }
  
  .cart-dialog__summary {
    margin-top: 24px;
  }
  
  .cart-dialog__total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    align-items: center;
  }
  
  .cart-dialog__total span:first-child {
    opacity: 0.5;
    font-family: 'Manrope', sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #000;
  }
  
  .cart-dialog__total span:last-child {
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }
  
  .cart-dialog__checkout {
    width: 100%;
    padding: 15px 0;
    background-color: #D87D4A;
    color: white;
    border: none;
    font-family: 'Manrope', sans-serif;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-radius: 0px;
  }
  
  .cart-dialog__checkout:hover {
    background-color: #FBAF85;
  }
  
  @media (max-width: 768px) {
    .cart-dialog__content {
      margin-right: 0px;
      border-radius: 0;
    }
  }
  
  @media (max-width: 480px) {
    .cart-dialog__content {
      max-width: 100%;
      padding: 24px;
      margin-top: 90px;
    }
  
    .cart-item__quantity-controls {
      margin-left: auto;
    }
  }
  </style>