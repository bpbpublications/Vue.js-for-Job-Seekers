<template>
  <div>
  <item-component :item="item"></item-component>
  <offers-component></offers-component></div>
</template>

<script setup lang="ts">
import ItemComponent from './ItemComponent.vue';
import OffersComponent from '../landing-page/OffersComponent.vue';
import { MenuItem } from '../../../../types';

const item: MenuItem = {
  id: 0,
  image: '',
  name: 'Pizza Name',
  price: 0,
  desc:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu massa in turpis scelerisque malesuada quis at felis. Nullam blandit nibh vitae velit varius, in aliquet leo commodo. Sed cursus lectus vitae nisi auctor, eget faucibus nunc sodales. Nullam consectetur laoreet nunc, at ullamcorper metus tempus quis. Quisque commodo ante massa, eu imperdiet enim efficitur dignissim. Vivamus porttitor cursus fringilla. Phasellus viverra ante est, id aliquam dolor scelerisque sed.',
};
</script>
