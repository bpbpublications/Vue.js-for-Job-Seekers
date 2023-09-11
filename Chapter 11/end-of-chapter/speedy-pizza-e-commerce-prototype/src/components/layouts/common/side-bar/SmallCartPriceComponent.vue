<template>
  <div class="text-right">
    <dl>
      <dt>Sub-Total</dt>
      <dd>${{ props.totals.subtotal }}</dd>
    </dl>
    <dl>
      <dt>Tax ({{ props.totals.taxPercent.toFixed(1) }}%)</dt>
      <dd>${{ props.totals.tax }}</dd>
    </dl>
    <dl>
      <dt>Delivery</dt>
      <dd>${{ props.totals.delivery }}</dd>
    </dl>
    <dl>
      <dt>Total</dt>
      <dd>${{ props.totals.total }}</dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { CartTotals } from '../../../../types';

const props = defineProps<{ totals: CartTotals }>();
</script>

<style scoped>
dt {
  display: inline-block;
  font-weight: bold;
}
dd {
  display: inline-block;
  width: 25%;
}
</style>
