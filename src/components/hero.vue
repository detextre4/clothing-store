<template>
  <section id="hero" class="d-flex flex-spaceb w-100">
    <img
      id="image3"
      :src="image3"
      alt="image"
    >


    <aside
      class="d-flex flex-column-jcenter flex-grow-1 text-center"
      style="max-width: 500px;"
      >
      <h1 class="font-2 mb-10">
        ¡Bienvenido a nuestra tienda!
      </h1>
      <p>
        Donde encontrarás el complemento perfecto para disfrutar tus bebidas favoritas.
      </p>
      <p>
        ¡Haz de cada sorbo una experiencia especial 
        con nuestras increíbles tazas!
      </p>

      <v-btn
        icon
        class="mx-auto"
        href="#section-1"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </aside>


    <aside id="hero-images-right">
      <img
        id="image1"
        :src="image1"
        alt="image"
      >

      <img
        id="image2"
        :src="image2"
        alt="image"
      >

      <div v-for="(item, i) in 2" :key="i" :class="`shadow-${i+1}`" />
    </aside>
  </section>
</template>

<script setup lang="ts">
import image1 from '@/assets/sources/animated/image-1.svg'
import image2 from '@/assets/sources/animated/image-2.svg'
import image3 from '@/assets/sources/animated/image-3.svg'
import { createObserver } from '@/plugins/functions';
import { onMounted } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs';
const { width } = useDisplay()

onMounted(() => {
  const target = document.getElementById('hero')!,
  image3 = document.getElementById('image3')!,
  images = document.getElementById('hero-images-right')!,
  imgInside = images.querySelectorAll('*');

  createObserver({
    targets: target,
    handle: (entries) => {
      for (var entry of entries) {
         const val = (1 - entry.intersectionRatio) * 450;

        if (width.value <= 880) {
          image3!.style.transform = `translateY(${val}px)`
          image3!.style.opacity = entry.intersectionRatio.toString()
        } else {
          image3!.style.transform = `translateX(${val * -1}px)`
        }

        imgInside.forEach((e) => {
          // @ts-ignore
          e!.style.transform = `translateX(${val}px)`
        })
      }
    }
  })
})
</script>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

$image-size: 21.25em;

#hero {
  isolation: isolate;
  // height: calc(100vh - var(--h-navbar));
  // min-height: 800px;
  // max-height: 878px;
  height: 800px;
  gap: 40px;
  padding-top: calc(var(--h-navbar) + 20px);
  padding-bottom: 20px;
  z-index: 2;
  @include media(max, small) {
    height: auto;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: clamp(9px, 1vw, 14px);
  }


  p { --fs: 18px }


  #image3 {
    width: calc($image-size / 1.5);
    transition: .1s ease;
  }


  aside {
    @include media(max, small) { flex-grow: 0 !important }
  }


  &-images-right {
    position: relative;
    min-width: calc($image-size + 60px);
    display: grid;
    place-items: center;
    right: -50px;
    perspective: 500px;
    $bottom: 70px;
    @include media(max, small) { display: none }

    * { transition: .1s ease }

    img { position: absolute }

    #image1 {
      width: $image-size;
      
      bottom: calc($image-size + $bottom);
      // animation: mov-continuos 25s infinite reverse;
    }

    #image2 {
      width: $image-size;
      bottom: $bottom;
      right: -30px;
      // animation: mov-continuos-reverse 25s infinite reverse;
      // animation-delay: 200ms;
    }

    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      right: calc(var(--margin-global) * -1);
      background-color: $tertiary;
      width: calc($image-size * 1.6);
      aspect-ratio: 16 / 9;
      border-radius: 80px;
      z-index: -2;
      rotate: x 20deg;
      box-shadow: -2px 2px 6px 2px hsla(0 0% 0% / 0.4);
    }

    .shadow-1 {
      position: absolute;
      bottom: 20px;
      right: calc(var(--margin-global) - 50px);
      background-color: hsl(0, 0%, 18.5%);
      width: calc($image-size - 80px);
      aspect-ratio: 4 / 1;
      border-radius: 50%;
      z-index: -1;
      rotate: x 20deg;
    }
    .shadow-2 {
      position: absolute;
      bottom: 70px;
      right: calc(var(--margin-global) + 60px);
      background-color: hsl(0, 0%, 18.5%);
      width: calc($image-size / 2);
      aspect-ratio: 4 / 1;
      border-radius: 50%;
      z-index: -1;
      rotate: x 20deg;
    }
  }

  @keyframes mov-continuos {
    0% { transform: translateY(0px) rotate(0deg) scale(1); }
    20% { transform: translateY(-3px) rotate(1deg) scale(1.005); }
    40% { transform:  translateY(2px) rotate(-1deg) scale(0.98); }
    60% { transform:  translateY(3px) rotate(-1deg) scale(1.002); }
    80% { transform: translateY(-2px) rotate(1deg) scale(0.99); }
    100% { transform: translateY(0px) rotate(0deg) scale(1); }
  }

  @keyframes mov-continuos-reverse {
    0% { transform: translateY(0px) rotate(0deg) scale(1); }
    20% { transform:  translateY(3px) rotate(-1deg) scale(1.005); }
    40% { transform: translateY(-2px) rotate(1deg) scale(0.98); }
    60% { transform: translateY(-3px) rotate(1deg) scale(1.002); }
    80% { transform:  translateY(2px) rotate(-1deg) scale(0.99); }
    100% { transform: translateY(0px) rotate(0deg) scale(1); }
  }
}
</style>
