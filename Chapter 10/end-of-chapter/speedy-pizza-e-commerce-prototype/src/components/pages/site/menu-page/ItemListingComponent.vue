<template>
  <div>
    <item-component v-for="item in items" :key="item.id" :item="item"></item-component>
  </div>
</template>

<script setup lang="ts">
import { MenuItem } from '../../../../types'
import ItemComponent from './ItemComponent.vue';

defineProps<{ items: MenuItem[]}>()
</script>
