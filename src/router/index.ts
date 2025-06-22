import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import Category from '@/views/Category.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import Checkout from '@/views/Checkout.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:category(headphones|speakers|earphones)',
    name: 'Category',
    component: Category,
  },
  {
    path: '/:category/:slug',
    name: 'ProductDetails',
    component: ProductDetails,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
