<template>
  <full-screen
    id="section-2"
    class="flex-center bg-secondary"
    content-class="d-flex flex-column w-100 parent margin-global"
    content-style="margin-block: 40px"
  >
    <aside class="card-1 d-flex flex-center">
      <img :src="image1" alt="image">
      <h5>Diseños personalizdos</h5>
    </aside>

    <aside class="card-1 d-flex flex-acenter-jend">
      <h5>Variedad de estilos</h5>
      <img :src="image2" alt="image">
    </aside>

    <aside class="card-1 d-flex flex-center">
      <img :src="image3" alt="image">
      <h5>Calidad garantizada</h5>
    </aside>

    <aside class="card-1 d-flex flex-acenter-jend">
      <h5>Envío rápido y seguro</h5>
      <img :src="image4" alt="image">
    </aside>
  </full-screen>
</template>

<script setup lang="ts">
import image1 from '@/assets/sources/animated/image-6.svg'
import image2 from '@/assets/sources/animated/image-9.svg'
import image3 from '@/assets/sources/animated/image-11.svg'
import image4 from '@/assets/sources/animated/image-10.svg'
import { onMounted } from 'vue'
import { createObserver } from '@/plugins/functions'


onMounted(() => {
  const targets = document.querySelectorAll('#section-2 aside')!

  createObserver({
    targets: targets,
    handle: (entries) => {
      for (var entry of entries) {
        const elements = entry.target.querySelectorAll('*')

        //<!--? set opacity
        // @ts-ignore
        elements.forEach(e => e.style.opacity = entry.intersectionRatio)

        //<!--? set translate
        // @ts-ignore
        const index = Array.from(entry.target.parentNode!.children).indexOf(entry.target),
        val = (1 - entry.intersectionRatio) * 10

        if (index % 2 === 0) {
          // @ts-ignore
          elements.forEach(e => e.style.transform = `translateX(${val * -1}px)`)
        } else {
          // @ts-ignore
          elements.forEach(e => e.style.transform = `translateX(${val}px)`)
        }
      }
    }
  })
})
</script>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

#section-2 {
  position: relative;
  $size: 80px;
  padding-block: 60px;

  .full-screen__wrapper {
    @include media(max, x-small) { gap: 100px }
  }

  aside {
    isolation: isolate;
    position: relative;
    flex-grow: 0;
    max-width: max-content;
    gap: 10px;
    @include media(max, x-small) {
      flex-direction: column-reverse;
      max-width: 100%;
      margin: auto;
    }
    
    * { transition: .4s ease }

    &:nth-child(2n) { margin-left: auto }

    &::before {
      content: "";
      position: absolute;
      inset: 50px -50px;
      background-color: $tertiary;
      border-radius: 50px;
      z-index: -1;
      
      @include media(max, x-small) { inset: -20px -50px }
    }
  }

  h5 {
    font-family: var(--font-2);
    --fw: bold;
    --fs: max(16px, 2.5em);
    color: $foreground;
    margin-bottom: 0;
  }

  img {
    width: 18.75em;
  }
}
</style>
