<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import SharedAudioGearComp from '@/components/SharedAudioGearComp.vue';
import HomeSecondBanner from "@/components/Home_components/HomeSecondBanner.vue";
import data from '../data.json';

// 1. Load all assets once (eagerly) using glob
const modules = import.meta.glob('../assets/product-**/**/desktop/*.{jpg,png}', { eager: true, import: 'default' });

// 2. Utility to resolve image path via your data.json key
const getImage = (imgPath: string) => {
  const key = imgPath.replace('./', '../'); 
  const mod = modules[key];
  return mod || '';
};

const route = useRoute();
const currentCategory = computed(() => route.params.category);

const products = computed(() =>
  data.filter(p => p.category === currentCategory.value)
);
</script>

<template>
  <div class="category-page">
    <section class="category-banner">
      <h1 class="font-semibold">{{ currentCategory.toUpperCase() }}</h1>
    </section>

    <section class="product-list">
      <div
        v-for="(product, i) in products"
        :key="product.id"
        :class="['product-item', { reverse: i % 2 }]"
      >
        <div class="image-wrapper">
          <img :src="getImage(product.image.desktop)" :alt="product.name" />
        </div>

        <div class="product-info">
          <p v-if="product.new" class="overline">NEW PRODUCT</p>

          <h2>{{ product.name }}</h2>

          <p class="description">{{ product.description }}</p>

          <router-link :to="`/${product.category}/${product.slug}`" class="btn-primary">
            SEE PRODUCT
          </router-link>
        </div>
      </div>
    </section>

    <HomeSecondBanner />

    <SharedAudioGearComp />
  </div>
</template>
  
<style scoped>
.category-banner {
  background-color: #000;
  color: white;
  text-align: center;
  padding: 6rem 0;
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.product-list {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

.product-item {
  display: flex;
  gap: 125px;
  align-items: center;
  flex-wrap: wrap;
}

.product-item.reverse {
  flex-direction: row-reverse;
}

.image-wrapper img {
  width: 100%;
  max-width: 540px;
  border-radius: 8px;
}

.product-info {
  flex: 1;
  padding: 1rem;
}

.product-info .overline {
  color: #d87d4a;
  text-transform: uppercase;
  letter-spacing: 10px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-decoration: none;
}

.product-info h2 {
  text-transform: uppercase;
  font-size: 2rem;
  margin: 1rem 0;
}

.product-info .description {
  color: #555;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.btn-primary {
  background-color: #d87d4a;
  color: white;
  text-decoration: none;
  padding: 1rem 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  display: inline-block;
  transition: background 0.3s;
}

.btn-primary:hover {
  background-color: #fbaf85;
}
</style>
