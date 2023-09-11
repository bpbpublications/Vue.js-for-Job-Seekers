<template>
  <div class="hero">
  <div class="btn-placement-b">
  <router-link type="button" class="red-button" :to="{name: 'menu'}">View Our Menu</router-link>
  </div>
  </div>
</template>

<style scoped>
.hero {
  background: url(/src/assets/hero_image.jpg);
  @apply mx-auto mt-1 h-108 flex flex-col w-9/12 bg-no-repeat bg-center border rounded;
}
</style>
