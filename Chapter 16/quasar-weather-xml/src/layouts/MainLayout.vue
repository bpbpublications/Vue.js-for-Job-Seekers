<template>
  <q-layout view="lHh Lpr fFf">
    <q-header flat>
      <q-toolbar>
        <q-btn
          flat
          dense
          icon="arrow_back_ios"
          @click="goBack"
          v-if="$q.platform.is.ios && !onIndex()"
        />
        <q-btn flat dense v-else icon=""></q-btn>
        <q-toolbar-title> Local Weather </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <Suspense>
        <router-view />
        <template #fallback>
          <div>
            <span class="text-grey-10">Loading...</span>
          </div>
        </template>
      </Suspense>
    </q-page-container>
    <q-footer flat class="q-pa-md">
      <div>&copy; C Harber 2023</div>
      <div>
        Data supplied by
        <a class="text-white light-link" href="https://weather.gov/"
          >NOAA's National Weather Service</a
        >
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { useQuasar } from 'quasar';

const $q = useQuasar();

const r = useRouter();
const rl = useRoute();

function onIndex() {
  return rl.path === '/';
}

function goBack() {
  r.back();
}
</script>

<style scoped>
.light-link {
  text-decoration: underline #35a2ff;
}
</style>
