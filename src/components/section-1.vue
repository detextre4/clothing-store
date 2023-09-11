<template>
  <full-screen content-class="pa-4 bg-tertiary">
    <v-slide-group id="section-1" v-model="slide" mandatory center-active>
      <v-slide-group-item v-for="item in images" :key="item" v-slot="{ isSelected, toggle }">
        <v-img-load
          :src="item"
          width="70vw"
          cover
          rounded="8px"
          :class="{ active: isSelected }"
          @click="toggle"
        ></v-img-load>
      </v-slide-group-item>
    </v-slide-group>
  </full-screen>
</template>

<script setup lang="ts">
import image1 from '@/assets/sources/images/image-1.jpeg'
import image2 from '@/assets/sources/images/image-2.jpeg'
import image3 from '@/assets/sources/images/image-3.jpg'
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
import image18 from '@/assets/sources/images/image-18.jpeg'
import image19 from '@/assets/sources/images/image-19.jpeg'
import image20 from '@/assets/sources/images/image-20.jpeg'
import image21 from '@/assets/sources/images/image-21.jpeg'
import image22 from '@/assets/sources/images/image-22.jpeg'
import image23 from '@/assets/sources/images/image-23.jpeg'
import image24 from '@/assets/sources/images/image-24.jpeg'
import image25 from '@/assets/sources/images/image-25.jpeg'
import image26 from '@/assets/sources/images/image-26.jpeg'
import image27 from '@/assets/sources/images/image-27.jpeg'
import image28 from '@/assets/sources/images/image-28.jpeg'
import image29 from '@/assets/sources/images/image-29.jpeg'
import image30 from '@/assets/sources/images/image-30.jpeg'
import { ref, onMounted, onUnmounted } from 'vue'

const
slide = ref(0),
images = [
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
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
]


onMounted(() => {
  const interval = setInterval(() => slide.value = (slide.value + 1) % images.length, 5000)
  onUnmounted(() => clearInterval(interval));
});
</script>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

#section-1 {
  height: 750px;
  @include media(max, small) { height: 500px }


  .v-slide-group__prev,
  .v-slide-group__next { display: none }


  .v-img-load {
    opacity: .5;

    // img {
    //   object-fit: contain !important;
    // }

    &:not(:first-child, :last-child) { margin-inline: 10px }

    &.active { opacity: 1 }
  }
}
</style>
