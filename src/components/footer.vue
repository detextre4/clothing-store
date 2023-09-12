<template>
  <v-footer
    id="footer"
    app absolute
    class="flex-center bg-accent"
  >
    <div id="footer__wrapper" class="d-flex flex-column align-center py-8" style="gap: 10px">
      <img
        src="@/assets/sources/logos/logo.svg"
        alt="logo"
        style="background-color: #fff; border-radius: 50%; width: 120px;"
      >
      
      <aside class="d-flex flex-column" style="gap: 10px">
        <div
          v-for="item in items" :key="item.text"
          class="d-flex align-center"
          style="gap: 10px"
        >
          <v-btn
            icon title="instagram" class="bg-foreground" size="40"
            :href="item.href" target="_blank"
            @click="item.action"
          >
            <v-icon :icon="item.icon" size="28" />
          </v-btn>

          <a :href="item.href" target="_blank" class="text-white">{{ item.text }}</a>
        </div>
      </aside>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification';
const
  toast = useToast(),

items = [
  {
    icon: "mdi-instagram",
    text: "Instagram",
    href: "https://www.instagram.com/rabbit_ve/",
  },
  {
    icon: "mdi-cellphone",
    text: "+58 412-0476322",
    action: () => {
      // @ts-ignore
      "+58 412-0476322".copyToClipboard()
      toast.info("Número copiado al portapapeles")
    },
  }
]
</script>

<style scoped lang="scss">
@use '@/assets/styles/main.scss' as *;

#footer {
  transition: 0.5s $ease-return;
  @extend .margin-global;

  &__wrapper {
    @extend .parent;
  }
}
</style>
