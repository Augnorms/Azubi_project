<template>
    <section class="yx1-section">
      <div class="yx1-container">
        <!-- Image on the left -->
        <div class="yx1-image"></div>
  
        <!-- Content on the right -->
        <div class="yx1-content">
          <h2>YX1 Earphones</h2>
          <router-link to="/earphones/yx1-earphones" class="see-product-btn">
            See Product
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .yx1-section {
    padding: 2rem 1.5rem;
    width: 100%;
    background-color: #fff;
  }
  
  .yx1-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .yx1-image {
    background-image: url("../../assets/home/desktop/image-earphones-yx1.jpg");
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    min-height: 300px;
    width: 100%;
  }
  
  .yx1-content {
    background-color: #f1f1f1;
    border-radius: 8px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
  }
  
  .yx1-content h2 {
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #000;
  }
  
  .see-product-btn {
    border: 1px solid #000;
    background-color: transparent;
    color: #000;
    text-decoration: none;
    padding: 0.8rem 1.5rem;
    font-weight: 600;
    font-size: 14px;
    width: fit-content;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .see-product-btn:hover {
    background-color: #000;
    color: #fff;
  }
  
  /* Stack vertically on small screens */
  @media (max-width: 768px) {
    .yx1-container {
      grid-template-columns: 1fr;
    }
  }
  </style>
  