<template>
  <section class="dashboard">
    <h2>Dashboard</h2>
    <div class="stats">
      <StatsCard title="Open Tickets" :value="24" />
      <StatsCard title="Resolved" :value="58" />
      <StatsCard title="Pending" :value="12" />
    </div>
  </section>
</template>

<script setup>
import StatsCard from '@/components/StatsCard.vue'
</script>

<style scoped>
.stats {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>
