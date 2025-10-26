<template>
  <div class="ticket-card">
    <h4>{{ ticket.title }}</h4>
    <p>{{ ticket.description }}</p>
    <small>Status: {{ ticket.status }}</small>
    <div class="actions">
      <button @click="$emit('edit', ticket)">Edit</button>
      <button @click="$emit('delete', ticket.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ ticket: Object })
</script>

<style scoped>
.ticket-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 0.5rem 0;
}
.actions button {
  margin-right: 10px;
  padding: 0.3rem 0.7rem;
}
</style>
