<template>
  <div class="flex flex-row p-4 border m-4 rounded-lg shadow-md">
    <div class="w-2/3 grow">
      <router-link :to="{ name: 'item', params: { id: props.item.id } }">
        <image-component :image="props.item.image"></image-component>
      </router-link>
    </div>
    <div class="px-4 pr-2">
      <h3 class="text-3xl font-medium text-gray-800 mb-2">{{ props.item.name }}</h3>
      <div class="flex flex-row-reverse space-x-8 space-x-reverse">
        <div>
          <add-cart-component :item="props.item"></add-cart-component>
        </div>
        <p class="text-sm lg:text-md">{{ props.item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageComponent from './ImageComponent.vue';
import AddCartComponent from './AddCartComponent.vue';
import { MenuItem } from '../../../../types';

const props = defineProps<{
  item: MenuItem;
}>();
</script>
