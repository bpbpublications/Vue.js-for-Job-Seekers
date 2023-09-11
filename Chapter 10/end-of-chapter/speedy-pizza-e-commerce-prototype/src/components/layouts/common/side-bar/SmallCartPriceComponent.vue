<template>
  <div>
    <dl>
      <dt>Sub-Total</dt>
      <dd>{{ formatAsCurrency(props.totals.subTotal) }}</dd>
    </dl>
    <dl>
      <dt>Tax ({{ props.totals.taxPercent.toFixed(1) }}%)</dt>
      <dd>{{ formatAsCurrency(props.totals.tax) }}</dd>
    </dl>
    <dl>
      <dt>Delivery</dt>
      <dd>{{ formatAsCurrency(props.totals.delivery) }}</dd>
    </dl>
    <dl>
      <dt>Total</dt>
      <dd>{{ formatAsCurrency(props.totals.total) }}</dd>
    </dl>
  </div>
</template>

<script setup lang="ts">
import { CartTotals } from '../../../../types';

const props = defineProps<{ totals: CartTotals }>();

const formatAsCurrency = (val: number): string => `$${val.toFixed(2)}`;
</script>

<style scoped>
dt {
  display: inline-block;
  font-weight: bold;
}
dd {
  display: inline;
}
</style>
