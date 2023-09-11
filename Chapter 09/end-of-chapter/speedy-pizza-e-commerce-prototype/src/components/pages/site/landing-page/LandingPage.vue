<template>
  <div class="container mx-auto h-screen">
    <menu-bar-component></menu-bar-component>
    <div class="container mx-auto">
      <hero-component></hero-component>
      <offers-component></offers-component>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script setup lang="ts">
import MenuBarComponent from '../../../layouts/common/MenuBarComponent.vue';
import HeroComponent from './HeroComponent.vue';
import OffersComponent from './OffersComponent.vue';
import FooterComponent from '../../../layouts/common/FooterComponent.vue';
</script>
