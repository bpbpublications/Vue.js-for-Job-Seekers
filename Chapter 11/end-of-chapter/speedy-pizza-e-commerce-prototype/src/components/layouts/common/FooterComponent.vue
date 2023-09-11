<template>
  <div class="container mx-auto bottom-1 left-2 right-2 py-4 px-8 bg-gray-300 font-bold border-t border-gray-500 rounded-lg">
    <div class="container mx-auto flex justify-between">
    <div>&copy; Speedy Pizza &amp; Clive Harber 2022</div>
    <menu-items v-if="props.showMenu"></menu-items>
    </div>
  </div>
</template>

<script setup lang="ts">
import MenuItems from './MenuItemsComponent.vue';

const props = withDefaults(defineProps <{showMenu?: boolean}>(), {showMenu: true})
</script>
