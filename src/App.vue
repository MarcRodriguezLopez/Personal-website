<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavbar from './components/MainNavbar.vue'
</script>

<template>
  <header>
    <MainNavbar />
  </header>

  <RouterView />
</template>
