<template>
  <nav id="navbar" class="flex-center">
    <div id="navbar__wrapper">
      <h6 class="text-center text-white">navbar</h6>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/utils/helper-classes.scss';
@use '@/assets/styles/utils/variables.scss' as vars;

#navbar {
  animation: movedown .5s vars.$ease-return;
  transition: transform 0.4s ease-in-out;
  @extend .margin-global;
  @extend .full-screen;
  height: var(--h-navbar);
  background-color: red;
  position: sticky;
  top: 0;

  &__wrapper {
    @extend .parent;
  }
}
</style>
