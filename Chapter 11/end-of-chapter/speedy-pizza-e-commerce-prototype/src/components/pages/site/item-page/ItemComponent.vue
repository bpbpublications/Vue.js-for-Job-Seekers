<template>
  <div class=" flex p-4 border m-4 rounded-lg shadow-md">
    <div><image-component :image="imageUrl"></image-component></div>
    <product-description-component :item="props.item"></product-description-component>
  </div>
</template>

<script setup lang="ts">
import { ref} from 'vue'
import ImageComponent from '../menu-page/ImageComponent.vue';
import ProductDescriptionComponent from './ProductDescriptionComponent.vue'
import { MenuItem } from '../../../../types';

const props = defineProps<{item: MenuItem}>()

const imageUrl = ref('offer.jpg')

</script>
