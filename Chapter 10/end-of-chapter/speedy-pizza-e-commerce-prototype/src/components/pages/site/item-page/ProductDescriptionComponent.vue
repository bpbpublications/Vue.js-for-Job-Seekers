<template>
  <div class="w-full p-4">
    <div class="text-3xl -mt-4 mb-4">
      {{ item.name }}
    </div>
    <div class="flex flex-row-reverse space-x-8 space-x-reverse">
      <div class="flex justify-end">
        <add-cart-component :item="props.item" :inline="true"></add-cart-component>
      </div>
      <div>
        <div class="flex justify-between">
          <div class="mb-4">
            <nav class="flex space-x-4" aria-label="Tabs">
              <!-- Add event to switch between the tabs -->
              <a
                v-for="tab in tabs"
                :key="tab.name"
                :class="[
                  tab.current
                    ? 'bg-gray-100 text-gray-700'
                    : 'text-gray-500 hover:text-gray-700',
                  'rounded-md px-3 py-2 text-sm font-medium',
                ]"
                >{{ tab.name }}</a
              >
            </nav>
          </div>
        </div>

        <div>
          <div v-if="selectedTab === 'desc'" class="text-sm lg:text-md">{{ item.desc }}</div>
          <div v-if="selectedTab === 'ingred'"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { MenuItem } from '../../../../types';
import AddCartComponent from '../menu-page/AddCartComponent.vue';

const props = defineProps<{ item: MenuItem }>();

const tabs = [
  {
    name: 'Description',
    current: true,
    content: 'desc',
  },
  {
    name: 'Ingredients',
    current: false,
    content: 'ingred',
  },
];

const selectedTab = ref('desc');
</script>
