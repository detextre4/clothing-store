<template>
  <v-footer
    id="footer"
    app absolute
    color="red"
    class="flex-center"
  >
    <div id="footer__wrapper">
      <h6 class="text-center">footer</h6>
    </div>
  </v-footer>
</template>

<style scoped lang="scss">
@use '@/assets/styles/utils/helper-classes.scss';
@use '@/assets/styles/utils/variables.scss' as vars;

#footer {
  transition: 0.5s vars.$ease-return;
  @extend .margin-global;

  &__wrapper {
    @extend .parent;
  }
}
</style>
