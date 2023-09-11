<template>
  <item-listing-component :items="menuItems"></item-listing-component>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import ItemListingComponent from './ItemListingComponent.vue';
import { MenuItem } from '../../../../types.ts';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa in turpis scelerisque malesuada quis at felis. Nullam blandit nibh vitae velit varius, in aliquet leo commodo. Sed cursus lectus vitae nisi auctor, eget faucibus nunc sodales. Nullam consectetur laoreet nunc, at ullamcorper metus tempus quis. Quisque commodo ante massa, eu imperdiet enim efficitur dignissim. Vivamus porttitor cursus fringilla. Phasellus viverra ante est, id aliquam dolor scelerisque sed.'

const menuItems: Ref<MenuItem[]> = ref([
  { id: 1, name: 'Pizza One', desc: description, image: 'offer.jpg', price: 10 },
  { id: 2, name: 'Pizza Two', desc: description, image: 'offer.jpg', price: 12 },
  { id: 3, name: 'Pizza Three', desc: description, image: 'offer.jpg', price: 14 },
]);
</script>
