<template>
  <q-page class="col justify-evenly">
    <div class="text-center text-h6 q-mt-xl">
      Select your local weather station
    </div>
    <div class="row justify-evenly q-mt-xl q-pt-lg">
      <div class="col-8">
        <div class="q-mb-lg">
          <q-select
            v-model="selectedState"
            :options="stateSelectOptions"
            label="Select State"
            hint="Selecting a state will open more"
            emit-value
            map-options
            @update:model-value="selectState"
            outlined
            behavior="menu"
          />
        </div>
        <div v-if="selectedState">
          <q-select
            v-model="chosenStation"
            :options="stationSelectOptions"
            label="Select a Weather station"
            hint="Get local weather"
            emit-value
            map-options
            @update:model-value="selectStation"
            outlined
            behavior="menu"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { SelectOptions } from 'src/components/models';
import { useStationData } from 'src/composables/useStationData';
import { ref, Ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedState: Ref<string> = ref('');
const stateSelectOptions: Ref<SelectOptions[]> = ref([
  { value: 'az', label: 'Arizona' },
  { value: 'ca', label: 'California' },
  { value: 'fl', label: 'Florida' },
  { value: 'me', label: 'Maine' },
  { value: 'tx', label: 'Texas' },
]);

const chosenStation: Ref<string> = ref('');
const stationSelectOptions: Ref<SelectOptions[] | undefined> = ref([]);

const stations: Map<string, SelectOptions[]> = useStationData();

function selectState(evt: string) {
  stationSelectOptions.value = stations.get(evt);
}

async function selectStation(evt: string) {
  await router.push({ name: 'station', params: { id: evt } });
}
</script>
