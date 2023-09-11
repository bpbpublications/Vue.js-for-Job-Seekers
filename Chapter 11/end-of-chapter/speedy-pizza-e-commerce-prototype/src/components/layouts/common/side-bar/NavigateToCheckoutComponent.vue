<template>
  <div class="pt-5 flex justify-center mx-auto">
    <button type="submit" class="red-button-sm mr-2 px-8 max-w-fit">Checkout</button>
    <p class="flex flex-col justify-center text-sm text-gray-400">
      <span>
        or
        <a href="#" class="text-red-400 font-medium hover:text-red-600" @click="emit('cancelOrder')"> Cancel order </a>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['cancelOrder'])
</script>
