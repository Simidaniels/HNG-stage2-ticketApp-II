<template>
  <section class="tickets">
    <h2>Ticket Management</h2>

    <form @submit.prevent="addTicket">
      <input v-model="newTicket.title" placeholder="Title" required />
      <input v-model="newTicket.description" placeholder="Description" required />
      <button type="submit">Add Ticket</button>
    </form>

    <TicketCard
      v-for="ticket in tickets"
      :key="ticket.id"
      :ticket="ticket"
      @delete="deleteTicket"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TicketCard from '@/components/TicketCard.vue'
import TicketService from '../services/ticketServices.js'


const tickets = ref(TicketService.getAll())
const newTicket = ref({ title: '', description: '', status: 'open' })

function addTicket() {
  TicketService.add({ ...newTicket.value })
  tickets.value = TicketService.getAll()
  newTicket.value = { title: '', description: '', status: 'open' }
}

function deleteTicket(id) {
  TicketService.remove(id)
  tickets.value = TicketService.getAll()
}
</script>

<style scoped>
form {
  margin-bottom: 1rem;
}
</style>
