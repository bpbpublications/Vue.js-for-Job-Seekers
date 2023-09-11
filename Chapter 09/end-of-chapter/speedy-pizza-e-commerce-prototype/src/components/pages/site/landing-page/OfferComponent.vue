<template>
  <div class="offer" :style="{backgroundImage: bgImage}">
  <div class="btn-placement-b">
  <button class="red-button">{{ text }}</button>
  </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  id: number;
  text: string;
  image: string;
}

const props = defineProps<Props>()
const imageBaseUrl = 'src/assets/'

const bgImage = computed(() => `url(${imageBaseUrl}${props.image})`)
</script>

<style scoped>
.offer {
  @apply bg-cover bg-no-repeat bg-center w-64 text-center h-64 flex flex-col border rounded;
}
</style>
