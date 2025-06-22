<template>
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <p class="overline">NEW PRODUCT</p>
          <h1>XX99 Mark II Headphones</h1>
          <p class="description">
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <router-link to="/headphones/xx99-mark-two-headphones" class="see-product">See Product</router-link>
        </div>
        <div class="hero-image">
          <img src="../../assets/shared/desktop/dark-headset.png" alt="Hero Headphones"/>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .hero {
    background-color: #101010;
    color: white;
    padding: 6rem 2rem;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .hero-content {
    flex: 1 1 45%;
  }
  
  .overline {
    letter-spacing: 10px;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 1rem;
    color: #cfcfcf;
    border: none;
    text-decoration: none;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  
  .description {
    color: #cfcfcf;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  .see-product {
    display: inline-block;
    background-color: #d87d4a;
    padding: 1rem 2rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    transition: background 0.3s ease;
  }
  
  .see-product:hover {
    background-color: #fbaf85;
  }
  
  .hero-image {
    flex: 1 1 45%;
  }
  
  .hero-image img {
    width: 100%;
    max-width: 600px;
    object-fit: cover;
  }
  
  /* Responsive: Stack on smaller screens */
  @media (max-width: 768px) {
    .container {
      flex-direction: column-reverse;
      text-align: center;
    }
  
    .hero-content, .hero-image {
      flex: 1 1 100%;
    }
  
    h1 {
      font-size: 2.25rem;
    }
  }
  </style>
  