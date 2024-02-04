<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="min-h-full mt-0" id="app">
    <NavBar class="fixed-top z-index-100" />
    <RouterView />
  </div>
  
</template>

<style scoped>

</style>
