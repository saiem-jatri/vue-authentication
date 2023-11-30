<script setup>
import {authStore} from '../store/store.js'
</script>

<template>
  <div class="flex gap-x-3 items-center">
    <button @click="authStore.authenticate()" class="px-4 py-2 rounded-lg text-white bg-blue-400">Login</button>
    <button @click="authStore.logOut()" class="px-4 py-2 rounded-lg text-white bg-red-400">Log out</button>
  </div>
</template>