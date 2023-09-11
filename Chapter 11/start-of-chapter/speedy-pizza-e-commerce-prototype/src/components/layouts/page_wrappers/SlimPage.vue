<template>
  <div class="container mx-auto">
    <menu-bar-component :showMenu="false"></menu-bar-component>
    <div class="container flex">
      <div class="w-full">
        <router-view></router-view>
      </div>
    </div>
    <footer-component :showMenu="false"></footer-component>
  </div>
</template>

<script setup lang="ts">
import MenuBarComponent from '../../layouts/common/MenuBarComponent.vue';
import FooterComponent from '../../layouts/common/FooterComponent.vue';
</script>
