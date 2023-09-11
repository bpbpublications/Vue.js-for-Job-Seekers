<template>
  <div class="flex justify-center space-x-16 mt-4">
    <offer-component
      v-for="offer in offers"
      :key="offer.id"
      :id="offer.id"
      :text="offer.btn_text"
      :image="offer.image"
    ></offer-component>
  </div>
</template>

<script setup lang="ts">
import OfferComponent from './OfferComponent.vue';
</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data: () => ({
    offers: [
      { id: 1, image: 'offer.jpg', btn_text: 'Offer 1' },
      { id: 2, image: 'offer.jpg', btn_text: 'Offer 2' },
      { id: 3, image: 'offer.jpg', btn_text: 'Offer 3' },
    ],
  }),
});
</script>
