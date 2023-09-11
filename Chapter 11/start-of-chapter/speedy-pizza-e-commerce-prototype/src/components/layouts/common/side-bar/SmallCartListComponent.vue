<template>
  <div v-if="props.items.length > 0"></div>
  <div v-else>Your cart is currently empty</div>
</template>

<script setup lang="ts">
import { CartItem } from '../../../../types'

const props = defineProps<{items: CartItem[]}>()
</script>
