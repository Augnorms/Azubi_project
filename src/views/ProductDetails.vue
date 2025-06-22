<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
import SharedAudioGearComp from "@/components/SharedAudioGearComp.vue";
import HomeSecondBanner from "@/components/Home_components/HomeSecondBanner.vue";
import data from "@/data.json";
import cartDiag from "@/components/cartDialog.vue";
import { useCartStore } from "@/store/cart-store";
import router from "@/router/index"


const cartStore = useCartStore();
const quantity = ref(1);

function chekout() {
  router.push("/checkout");
}

const goBack = () => {
    router.go(-1);
};

// Preload all desktop images
const modules = import.meta.glob("../assets/**/desktop/*.jpg", {
  eager: true,
  import: "default",
});

const imageMap = Object.fromEntries(
  Object.entries(modules).map(([filePath, url]) => [
    filePath.replace("../", "./"), 
    url,
  ])
);

const route = useRoute();
const slugParam = computed(() => route.params.slug as string);
const product = computed(() => data.find((p) => p.slug === slugParam.value));

function getImage(path: string) {
  return imageMap[path] || "";
}

function dec() {
  quantity.value = Math.max(1, quantity.value - 1);
}
function inc() {
  quantity.value++;
}

function addToCart() {
  if (!product.value) return;

  cartStore.addItem(
    {
      id: product.value.id,
      name: product.value.name,
      price: product.value.price,
      image: getImage(product.value.image.desktop),
    },
    quantity.value
  );

  cartStore.setCartStatus(true);
}
</script>

<template>
  <div v-if="product" class="product-details-wrapper">
    <div class="container go-back">
      <button class="back-button" @click="goBack">
          Go Back
        </button>
    </div>

    <!-- Product Hero -->
    <section class="product-hero">
      <div class="container hero-inner">
        <img
          class="hero-img"
          :src="getImage(product.image.desktop) as string"
          :alt="product.name"
        />

        <div class="info">
          <p v-if="product.new" class="overline">NEW PRODUCT</p>
          <h1 class="text-[#000000] font-bold mb-3 text-xl">
            {{ product.name.toUpperCase() }}
          </h1>
          <p class="description">{{ product.description }}</p>
          <p class="price">\${{ product.price }}</p>

          <!-- Add to Cart -->
          <div class="cart-actions">
            <div class="qty-control">
              <button @click="dec">-</button>
              <span>{{ quantity }}</span>
              <!-- template unwraps ref automatically -->
              <button @click="inc">+</button>
            </div>

            <button class="btn-primary" @click="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features & Inclusions -->
    <section class="container details-section">
      <div class="features">
        <h2 class="text-[#000000] font-bold mb-3">FEATURES</h2>
        <p>{{ product.features }}</p>
      </div>

      <div class="includes">
        <h2 class="text-[#000000] font-bold mb-3">IN THE BOX</h2>
        <ul>
          <li v-for="item in product.includes" :key="item.item">
            <span class="qty">{{ item.quantity }}x</span>{{ item.item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Gallery -->
    <section class="container gallery">
      <div class="gallery-left">
        <img :src="getImage(product.gallery.first.desktop) as string" alt="Gallery 1" />
        <img :src="getImage(product.gallery.second.desktop) as string" alt="Gallery 2" />
      </div>
      <div class="gallery-right">
        <img :src="getImage(product.gallery.third.desktop) as string" alt="Gallery 3" />
      </div>
    </section>

    <!-- Related Products -->
    <section class="container related-products">

      <h2 class="text-[#000000] font-bold mb-3 text-xl">YOU MAY ALSO LIKE</h2>

      <div class="related-list">
        <div
          v-for="other in product.others"
          :key="other.slug"
          class="related-item"
        >
          <img :src="getImage(other.image.desktop) as string" :alt="other.name" />
          <h3>{{ other.name }}</h3>
          <router-link
            :to="`/${product.category}/${other.slug}`"
            class="btn-secondary"
          >
            See Product
          </router-link>
        </div>
      </div>

    </section>

    <HomeSecondBanner />

    <SharedAudioGearComp />

    <cartDiag
      :isOpen="cartStore.cartStatus"
      :cartItems="cartStore.items"
      @update-cart="cartStore.updateItems"
      @checkout="chekout"
    />
  </div>

  <div v-else class="not-found">
    <p>Product not found.</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.go-back {
  margin: 2rem auto 0;
}

.back-button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: none;
    border: none;
    font-size: 15px;
    font-weight: 500;
    color: #000000;
    opacity: 0.5;
    cursor: pointer;
    padding: 0;
    margin-bottom: 24px;
  }
  
  .back-button:hover {
    color: #D87D4A;
  }

/* Hero Section */
.product-hero {
  background: #fff;
  padding: 4rem 0;
  gap: 125px;
}
.hero-inner {
  display: flex;
  flex-wrap: wrap;
  gap: 125px;
  align-items: center;
}
.hero-img {
  flex: 1;
  max-width: 540px;
  width: 100%;
  border-radius: 8px;
}
.info {
  flex: 1;
  max-width: 540px;
}
.overline {
  color: #d87d4a;
  letter-spacing: 10px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 0.875rem;
}
.description {
  color: #555;
  line-height: 1.6;
  margin: 1rem 0;
}
.price {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

/* Cart Actions */
.cart-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.qty-control {
  display: flex;
  background: #f1f1f1;
  padding: 0.5rem 1rem;
  align-items: center;
  gap: 1rem;
}
.qty-control button {
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.btn-primary {
  background: #d87d4a;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
.btn-primary:hover {
  background: #fbaf85;
}

/* Features & Includes */
.details-section {
  display: flex;
  flex-wrap: wrap;
  gap: 125px;
  padding: 4rem 0;
}
.features {
  flex: 2;
}
.includes {
  flex: 1;
}
.includes ul {
  padding: 0;
  list-style: none;
}
.includes li {
  margin-bottom: 0.5rem;
}
.qty {
  color: #d87d4a;
  font-weight: bold;
  margin-right: 0.5rem;
}

/* Fix: Gallery Section */
.gallery {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 4rem auto;
  max-width: 1200px;
  padding: 0 1.5rem;
}

.gallery-left,
.gallery-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
}

.gallery img {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
}

/* Fix: Related Products Section */
.related-products {
  text-align: center;
  margin: 6rem auto;
  max-width: 1200px;
  padding: 0 1.5rem;
}

.related-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem; /* Wider spacing between items */
  margin-top: 3rem;
}

.related-item {
  background: none;
  padding: 0;
  flex: 0 1 350px;
  text-align: center;
}

.related-item img {
  width: 100%;
  max-width: 300px;
  height: auto;
  object-fit: contain;
  margin-bottom: 1.5rem;
  border-radius: 8px;
}

.related-item h3 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #000;
  text-transform: uppercase;
}

.btn-secondary {
  display: inline-block;
  margin-top: 1rem;
  border: 1px solid #000;
  background: transparent;
  color: black;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 0;
  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #000;
  color: #fff;
}

/* Not Found */
.not-found {
  text-align: center;
  padding: 4rem;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-inner,
  .details-section,
  .gallery {
    flex-direction: column;
    align-items: center;
  }

  .info,
  .hero-img,
  .features,
  .includes,
  .gallery-left,
  .gallery-right {
    max-width: 100%;
  }

  .cart-actions {
    flex-direction: column;
    align-items: flex-start;
  }

  .related-list {
    flex-direction: column;
  }

  /* Fix: Cart Dialog */
  .cart-dialog-content {
    position: relative; /* allows absolute positioning inside */
    padding: 0; /* remove default padding */
    width: 100%;
    height: 100%;
    display: flex;
  }

  .cart-panel {
    position: absolute;
    top: 1rem; /* adjust as needed */
    right: 1rem; /* adjust as needed */
    width: 377px;
    height: 488px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    padding: 24px;
  }
}
</style>
