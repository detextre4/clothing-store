<template>
  <v-carousel
    id="section-3"
    show-arrows="hover"
    height="calc(100vh - var(--h-navbar))"
    class="full-screen"
    cycle
    progress
    hide-delimiters
  >
    <v-carousel-item
      v-for="item in images" :key="item"
      :src="item"
      cover
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import image1 from '@/assets/sources/images/image-1.jpeg'
import image2 from '@/assets/sources/images/image-2.jpeg'
import image3 from '@/assets/sources/images/image-3.jpeg'
import image4 from '@/assets/sources/images/image-4.jpeg'
import image5 from '@/assets/sources/images/image-5.jpeg'
import image6 from '@/assets/sources/images/image-6.jpeg'
import image7 from '@/assets/sources/images/image-7.jpeg'
import image8 from '@/assets/sources/images/image-8.jpeg'
import image9 from '@/assets/sources/images/image-9.jpeg'
import image10 from '@/assets/sources/images/image-10.jpeg'
import image11 from '@/assets/sources/images/image-11.jpeg'
import image12 from '@/assets/sources/images/image-12.jpeg'
import image13 from '@/assets/sources/images/image-13.jpeg'
import image14 from '@/assets/sources/images/image-14.jpeg'
import image15 from '@/assets/sources/images/image-15.jpeg'
import image16 from '@/assets/sources/images/image-16.jpeg'
import image17 from '@/assets/sources/images/image-17.jpeg'

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
]
</script>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

#section-3 {

  .v-progress-linear {
    &__determinate {
      background-color: $primary;
    }
  }

  .v-window__controls .v-btn {
    background-color: $tertiary !important;
  }
}
</style>
