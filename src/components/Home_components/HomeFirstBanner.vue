<template>
  <section class="hero">
    <div class="hero-image">
      <img src="../../assets/shared/desktop/dark-headset.png" alt="XX99 Mark II Headphones"/>
      <div class="hero-content">
        <p class="overline">NEW PRODUCT</p>
        <h1>XX99 Mark II <span>HEADPHONES</span></h1>
        <p class="description">
          Experience natural, lifelike audio and exceptional
          <span class="desktop-only">sulti</span>
          <span class="mobile-only">build</span>
          quality made for the passionate music enthusiast.
        </p>
        <router-link to="/headphones/xx99-mark-two-headphones" class="see-product">See Product</router-link>
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
  position: relative;
}

.hero-image {
  position: relative;
  width: 100%;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  max-width: 400px;
  padding: 2rem;
  z-index: 2;
}

.overline {
  letter-spacing: 10px;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 1rem;
  color: #cfcfcf;
}

h1 {
  font-size: 2.25rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  line-height: 1.1;
}

h1 span {
  display: block;
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

/* Desktop styles */
@media (min-width: 769px) {
  .hero {
    padding: 6rem 2rem;
  }
  
  .hero-image {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .hero-image img {
    width: 50%;
    order: 2;
    max-width: 600px;
    border-radius: 8px;
  }

  .hero-content {
    position: static;
    transform: none;
    text-align: left;
    width: auto;
    max-width: 450px;
    padding: 0;
    order: 1;
  }

  h1 {
    font-size: 3.5rem;
  }

  .mobile-only {
    display: none;
  }

  .desktop-only {
    display: inline;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  .hero-image {
    min-height: 600px;
  }
  
  .hero-image img {
    height: 100%;
    object-fit: cover;
  }

  .mobile-only {
    display: inline;
  }

  .desktop-only {
    display: none;
  }
}
</style>