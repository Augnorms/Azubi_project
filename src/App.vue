<script setup lang="ts">
import HeaderComponent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue";
import { GDialogRoot } from 'gitart-vue-dialog'
</script>

<template>
  <div class="font-sans font-bold">
    <HeaderComponent />
      <router-view />
      <GDialogRoot />
    <FooterComponent />
  </div>
</template>
