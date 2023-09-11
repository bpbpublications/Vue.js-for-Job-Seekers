<template>
  <div class="container mx-auto h-screen">
    <menu-bar-component></menu-bar-component>
    <div class="container flex">
      <div :class="[showSide ? 'w-3/4' : 'w-full']">
        <router-view></router-view>
      </div>
      <div class="w-1/4" v-if="showSide">
        <side-bar-component></side-bar-component>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script setup lang="ts">
import MenuBarComponent from '../../layouts/common/MenuBarComponent.vue';
import FooterComponent from '../../layouts/common/FooterComponent.vue';
import SideBarComponent from '../../layouts/common/SideBarComponent.vue';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const r$ = useRouter()

const showSide = computed(() => {
  return r$.currentRoute.value.name !== 'home'
})
</script>
