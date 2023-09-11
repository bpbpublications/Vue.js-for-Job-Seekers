<template>
  <img :src="imageUrl" />
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{ image: string }>()

const imageUrl = computed(() => {
  return `/src/assets/${props.image}`
})

</script>
