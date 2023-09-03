<template>
  <section id="hero" class="d-flex flex-space w-100">
    <aside class="d-flex flex-column-jcenter flex-grow-1">
      <h1>Titulo</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolorem autem numquam at ex dolorum illo suscipit, nihil natus aliquid minus recusandae sit neque porro alias, laborum laboriosam nulla voluptate.
      </p>
    </aside>

    <aside id="hero-images">
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
    </aside>
  </section>
</template>

<script setup lang="ts">
import image1 from '@/assets/sources/animated/image-1.svg'
import image2 from '@/assets/sources/animated/image-2.svg'
</script>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

#hero {
  isolation: isolate;
  height: 800px;
  gap: 40px;
  $image-size: 340px;

  &-images {
    position: relative;
    min-width: calc($image-size + 60px);
    display: grid;
    place-items: center;
    right: -50px;
    perspective: 500px;
    $bottom: 70px;

    img { position: absolute }

    #image1 {
      width: $image-size;
      
      // rotate: 3deg;
      bottom: calc($image-size + $bottom);
    }

    #image2 {
      width: $image-size;
      bottom: $bottom;
      right: -30px;
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
      z-index: -1;
      rotate: x 20deg;
    }
  }
}
</style>
