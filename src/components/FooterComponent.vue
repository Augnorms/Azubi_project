<template>
    <footer class="footer">
      <div class="container top">
        <img src="../assets/shared/desktop/logo.svg" alt="audiophile logo" class="logo" />
  
        <nav>
          <ul class="footer-links">
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/headphones">HEADPHONES</router-link></li>
            <li><router-link to="/speakers">SPEAKERS</router-link></li>
            <li><router-link to="/earphones">EARPHONES</router-link></li>
          </ul>
        </nav>
      </div>
  
      <div class="container middle">
        <p class="description">
          Audiophile is an all-in-one stop to fulfill your audio needs. We're a small team of music lovers and sound
          specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility
          - we’re open 7 days a week.
        </p>

        <div class="socials items-end">
          <a href="#"><img src="../assets//shared/desktop/icon-facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="../assets/shared/desktop/icon-twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="../assets/shared/desktop/icon-instagram.svg" alt="Instagram" /></a>
        </div>
      </div>
  
      <div class="container bottom">
        <p class="copyright">© 2021 Audiophile. All Rights Reserved</p>
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
.footer {
  background-color: #101010;
  color: white;
  padding: 4rem 2rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.container.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.footer-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.footer-links a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 2px;
}

.container.middle {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
}

.description {
  color: #cccccc;
  font-size: 15px;
  line-height: 1.8;
  max-width: 600px;
}

.container.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.copyright {
  font-size: 14px;
  color: #888;
}

.socials {
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
}

.logo {
  width: 143px;
  height: auto;
}

  </style>
  