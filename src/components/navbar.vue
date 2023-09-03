<template>
  <nav id="navbar" class="flex-center">
    <div id="navbar__wrapper" class="d-flex" style="gap: 20px;">
      <div class="d-flex flex-center flex-grow-0" style="gap: 10px;">
        <v-img-load
          :src="logo"
          alt="logo"
          sizes="70"
          rounded="50%"
          cover
          style="background-color: #fff;"
        />

        <h2 class="font-2 text-white mb-0 wbold">Rabbit</h2>
      </div>

      <div
        class="d-flex flex-center flex-grow-1"
        style="gap: 20px; margin-right: 200px;"
      >
        <a
          v-for="(item, i) in sections"
          :key="i"
          :href="item.to"
          class="text-foreground"
          style="--fs: 18.5px"
        >{{ item.name }}</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import logo from '@/assets/sources/logos/logo.svg'

const sections = [
  {
    name: "Section one",
    to: "#section-1",
  },
  {
    name: "Section two",
    to: "#section-2",
  },
  {
    name: "Contacto",
    to: "#footer",
  },
]
</script>

<style lang="scss">
@use '@/assets/styles/main.scss' as *;

#navbar {
  animation: movedown .5s $ease-return;
  transition:
    transform 0.4s ease-in-out,
    background-color 0.4s ease-in-out;
  @extend .margin-global;
  @extend .full-screen;
  height: var(--h-navbar);
  background-color: $primary;
  $border: 40px;
  border-bottom-left-radius: $border;
  border-bottom-right-radius: $border;
  

  &__wrapper {
    @extend .parent;
    // perspective: 500px;
  }

  // .v-img-load {
  //   rotate: x 20deg;
  //   translate: 0 20px;
  // }
}
</style>
