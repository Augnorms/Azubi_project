<template>
    <section class="zx9-wrapper">
      <div class="zx9-banner">
        <div class="image-wrapper">
          <img src="../../assets/home/desktop/image-speaker-zx9.png" alt="ZX9 Speaker" />
        </div>
  
        <div class="text-content">
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          </p>
          <router-link to="/speakers/zx9-speaker" class="btn-dark">See Product</router-link>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  /* White background container */
  .zx9-wrapper {
    background-color: #fff;
    padding: 4rem 1rem;
  }
  
  /* Orange full-width banner */
  .zx9-banner {
    background-color: #d87d4a;
    border-radius: 8px;
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    color: white;
    overflow: hidden;
  }
  
  .image-wrapper img {
    max-width: 300px;
    height: auto;
  }
  
  .text-content {
    max-width: 400px;
    text-align: center;
  }
  
  .text-content h1 {
    font-size: 2.75rem;
    line-height: 1.1;
    margin-bottom: 1rem;
  }
  
  .text-content p {
    font-size: 15px;
    opacity: 0.9;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  
  .btn-dark {
    background-color: black;
    color: white;
    padding: 1rem 2rem;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    border-radius: 5px;
    transition: background 0.3s ease;
  }
  
  .btn-dark:hover {
    background-color: #4c4c4c;
  }
  </style>
  
  