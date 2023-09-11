<template>
  <div class="container p-4 border mt-4 rounded-lg shadow-md">
    <h5 class="text-right text-xl font-bold">Your Cart</h5>
    <div>
      <small-cart-list-component :items="cartItems" :id="getCart().value.id" @remove-item="remove"></small-cart-list-component>
    </div>
    <div v-if="cartItems.length > 0">
      <div class="border-t border-gray-300 mt-3 pt-3">
        <small-cart-price-component :totals="cartTotals"></small-cart-price-component>
      </div>
      <div>
        <navigate-to-checkout-component @cancel-order="cancel"></navigate-to-checkout-component>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, computed, ComputedRef } from 'vue';
import SmallCartListComponent from './side-bar/SmallCartListComponent.vue';
import SmallCartPriceComponent from './side-bar/SmallCartPriceComponent.vue';
import NavigateToCheckoutComponent from './side-bar/NavigateToCheckoutComponent.vue';
import { CartTotals } from '../../../types';
import { CartItem, useCart } from '../../../composables/useCart';

const { getCart, updateCart, removeItem, subtotal, total, delivery, tax, taxPercent } = useCart();

const cartTotals: Ref<CartTotals> = ref({
  subtotal,
  taxPercent,
  tax,
  delivery,
  total,
});

const cartItems: ComputedRef<CartItem[]> = computed(() => {
  return getCart().value.items;
});

const cancel = () => updateCart()
const remove = (id: number) => removeItem(id)
</script>
