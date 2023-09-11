<template>
  <q-page class="row justify-evenly q-pt-xl">
    <div class="col-10">
      <q-card
        class="my-card text-white"
        style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        v-if="pageData"
      >
        <q-card-section>
          <div class="text-subtitle2">Weather Station at</div>
          <div class="text-h5">{{ pageData?.location }}</div>
          <div class="text-subtitle2">
            ({{ pageData?.station_id }} - lat: {{ pageData?.latitude }}, lang:
            {{ pageData?.longitude }})
          </div>
        </q-card-section>

        <q-separator dark inset />

        <q-card-section class="text-subtitle1">
          <div class="row">
            <div class="col">Weather:</div>
            <div class="col text-bold text-right">{{ pageData?.weather }}</div>
          </div>
          <div class="row">
            <div class="col">Temperature:</div>
            <div class="col text-bold text-right">
              {{ pageData?.temperature_string }}
            </div>
          </div>
          <div class="row">
            <div class="col">Relative Humidity:</div>
            <div class="col text-bold text-right">
              {{ pageData?.relative_humidity }}%
            </div>
          </div>
          <div class="row">
            <div class="col">Wind:</div>
            <div class="text-bold text-right">{{ pageData?.wind_string }}</div>
          </div>
          <div class="row">
            <div class="col">Visibility:</div>
            <div class="text-bold text-right col">
              {{ pageData?.visibility_mi }} miles
            </div>
          </div>
          <div class="row">
            <div class="col">Pressure:</div>
            <div class="col text-bold text-right">
              {{ pageData?.pressure_string }}
            </div>
          </div>
          <div class="row q-mt-md">
            <div class="col text-semibold text-center text-caption">
              {{ pageData?.observation_time }}
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { api } from 'boot/axios';
import { useXmlExtract } from 'src/composables/useXmlExtract';
import { ObservationData } from 'src/components/models';
import { Ref, ref } from 'vue';

const { getObservationData } = useXmlExtract();
const pageData: Awaited<Ref<ObservationData | undefined>> = ref();

const props = defineProps({
  id: {
    required: true,
    type: String,
  },
});

onMounted(async () => {
  pageData.value = getObservationData(
    await api.get(`${props.id}.xml`, { responseType: 'text' })
  );
});
</script>
