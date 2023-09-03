<template>
  <v-app id="layout">
    <v-main>
      <router-view />
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import '@/assets/styles/layouts/default-layout.scss'
import Footer from '@/components/footer.vue'
</script>
