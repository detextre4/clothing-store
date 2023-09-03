<template>
  <div id="home" class="fill-height flex-column-center">
    <Hero ref="target"></Hero>
    <Navbar></Navbar>
    <Section-1></Section-1>
    <Section-2></Section-2>
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/hero.vue'
import Navbar from '@/components/navbar.vue'
import Section1 from '@/components/section-1.vue'
import Section2 from '@/components/section-2.vue'
import { buildThresholdList } from '@/plugins/functions'
import { onMounted, ref } from 'vue'

const target = ref()

let prevRatio = 0.0,
increasingColor = "rgba(40, 40, 190, ratio)",
decreasingColor = "rgba(190, 40, 40, ratio)"

onMounted(createObserver)
function createObserver() {
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(target.value.$el);
}

function handleIntersect(entries: (IntersectionObserverEntry|any)[]) {
  for (const entry of entries) {

    if (entry.intersectionRatio > prevRatio)
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio)
    else
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio,)

    prevRatio = entry.intersectionRatio; 
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/styles/main.scss';

#home {
  @include parent;
  padding-inline: var(--margin-global);
}
</style>
