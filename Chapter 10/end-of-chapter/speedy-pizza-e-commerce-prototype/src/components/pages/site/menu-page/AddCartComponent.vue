<template>
  <div class="flex flex-col">
    <div class="flex justify-end text-2xl font-medium text-gray-800 mb-2">
      {{ formatAsCurrency(props.item.price) }}
    </div>
    <div class="flex flex-col items-end">
      <div class="flex rounded-md shadow-sm max-w-fit mb-2">
        <button
          type="button"
          class="mr-1 relative inline-flex items-center space-x-2 px-2 py-1 border text-sm font-medium rounded-l-md red-button-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <label for="itemCount" class="hidden">item count</label>
        <input
          type="text"
          class="w-12 border border-gray-300 py-1.5 text-sm leading-5 font-medium text-gray-700 text-center shadow-sm focus:outline-none focus:ring-1 focus:ring-red-600"
          v-model="itemCount"
          name="itemCount"
          id="itemCount"
        />
        <button
          type="button"
          class="ml-1 relative inline-flex items-center space-x-1 px-2 py-1 border text-sm font-medium rounded-r-md red-button-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      <div>
        <button type="button" class="add-to-cart red-button-sm ml-4">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MenuItem } from '../../../../types.ts';

const props = withDefaults(defineProps<{ item: MenuItem; inline: boolean }>(), {
  item: () => ({} as MenuItem),
  inline: false,
});

const itemCount = ref(1);

const formatAsCurrency = (val: number): string => `$${val.toFixed(2)}`;
</script>
