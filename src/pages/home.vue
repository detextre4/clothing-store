<template>
  <div id="home" class="fill-height flex-column-center">
    <Hero ref="target"></Hero>
    <Section-1></Section-1>
    <Section-2></Section-2>
    <Section-3></Section-3>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/hero.vue'
import Section1 from '@/components/section-1.vue'
import Section2 from '@/components/section-2.vue'
import Section3 from '@/components/section-3.vue'
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss';

#home {
  @extend .parent;
  padding-inline: var(--margin-global);
}
</style>
