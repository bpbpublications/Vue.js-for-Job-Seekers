<template>
  <div class="mt-1">
    <div class="bg-gray-300 border-b border-gray-500 rounded-lg px-4 pt-2">
      <div class="container mx-auto flex justify-between">
        <div class="mb-1">
          <h1 class="logo text-5xl font-bold ml-16 text-logo-red">Speedy</h1>
          <h1 class="logo text-5xl font-bold ml-16 text-logo-red">Pizza</h1>
        </div>
        <menu-items v-if="props.showMenu"></menu-items>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItems from './MenuItemsComponent.vue';

const props = withDefaults(
  defineProps<{
    showMenu?: boolean;
  }>(),
  { showMenu: true }
);
</script>
