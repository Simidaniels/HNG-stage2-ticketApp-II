<template>
  <div id="app">
    <AppNavbar />
    <router-view />
    <AppFooter />
    <AppToast />
  </div>
</template>

<script setup>
import AppNavbar from '@/components/AppNavbar.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppToast from '@/components/AppToast.vue'
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
  margin: 0;
  background-color: #f7f7f9;
}
</style>
