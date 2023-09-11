<template>
  <div class="container p-4 border mt-4 rounded-lg shadow-md">
    <h5>Your Cart</h5>
    <div>
      <small-cart-list-component :items="cartItems"></small-cart-list-component>
    </div>
    <div v-if="cartItems.length > 0">
      <div>
        <small-cart-price-component :totals="cartTotals"></small-cart-price-component>
      </div>
      <div>
        <navigate-to-checkout-component></navigate-to-checkout-component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';
import SmallCartListComponent from './side-bar/SmallCartListComponent.vue';
import SmallCartPriceComponent from './side-bar/SmallCartPriceComponent.vue';
import NavigateToCheckoutComponent from './side-bar/NavigateToCheckoutComponent.vue';
import { CartItem, CartTotals } from '../../../types';

const cartItems: Ref<CartItem[]> = ref([]);
const cartTotals: Ref<CartTotals> = ref({
  subTotal: 0.0,
  taxPercent: 0.0,
  tax: 0.0,
  delivery: 0.0,
  total: 0.0,
});
</script>
