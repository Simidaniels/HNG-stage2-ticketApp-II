<template>
  <div class="stats-card">
    <h3>{{ title }}</h3>
    <p class="value">{{ value }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  value: [String, Number]
})
</script>

<style scoped>
.stats-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.value {
  font-size: 2rem;
  color: #2b6cb0;
}
</style>
