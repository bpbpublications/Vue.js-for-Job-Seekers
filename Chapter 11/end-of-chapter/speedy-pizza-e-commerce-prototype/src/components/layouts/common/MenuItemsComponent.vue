<template>
  <div class="flex w-1/6 justify-between font-bold">
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'menu' }">Menu</router-link>
    <router-link :to="{ name: 'profile_info' }">Profile</router-link>
  </div>
</template>
