<template>
  <section class="categories">
    <div class="container">
      <div class="category-card" v-for="item in categories" :key="item.name">
        <img :src="item.image" :alt="item.name" class="category-image" />
        <h2 class="font-medium">{{ item.name }}</h2>

        <div class="shop-link" @click="$router.push(item.link)">
          <div class="shop">Shop</div> <div class="arrow"> > </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import headphonesImg from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakersImg from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphonesImg from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const categories = [
  {
    name: "Headphones",
    image: headphonesImg,
    link: "/headphones",
  },
  {
    name: "Speakers",
    image: speakersImg,
    link: "/speakers",
  },
  {
    name: "Earphones",
    image: earphonesImg,
    link: "/earphones",
  },
];
</script>

<style scoped>
.categories {
  padding: 8rem 2rem;
  background-color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.category-card {
  background-color: #f1f1f1;
  border-radius: 8px;
  flex: 1 1 250px;
  min-width: 280px;
  text-align: center;
  padding: 6rem 1rem 2rem;
  position: relative;
}

.category-card img {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: auto;
}

.category-card h2 {
  margin-top: 4rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 1px;
}

.shop-link {
  display: flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
}

.shop-link:hover {
  color: #d87d4a;
}

.shop{
  margin-right: 10px;
}

.arrow{
  color: #d87d4a;
  font-weight: 800;
}
</style>
