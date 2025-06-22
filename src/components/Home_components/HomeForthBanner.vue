<template>
    <section class="zx7-banner">
      <div class="zx7-container">
        <div class="text-content">
          <h2>ZX7 Speaker</h2>
          <router-link to="/speakers/zx7-speaker" class="see-product-btn">See Product</router-link>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .zx7-banner {
    background-color: white;
    width: 100%;
    padding: 3rem 1.5rem;
  }
  
  .zx7-container {
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 8px;
    background-image: url('../../assets/home/desktop/image-speaker-zx7.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 320px;
    display: flex;
    align-items: center;
    padding-left: 5rem;
  }
  
  .text-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    color: #000;
  }
  
  .text-content h2 {
    font-size: 2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  .see-product-btn {
    text-align: center;
    border: 1px solid #000;
    background-color: transparent;
    color: #000;
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    font-weight: 600;
    font-size: 14px;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .see-product-btn:hover {
    background-color: #000;
    color: #fff;
  }
  </style>
  