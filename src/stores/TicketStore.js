// src/store/ticketStore.js
import { defineStore } from 'pinia'

export const useTicketStore = defineStore('ticketStore', {
  state: () => ({
    tickets: JSON.parse(localStorage.getItem('tickets') || '[]')
  }),

  getters: {
    totalTickets: state => state.tickets.length,
    openTickets: state => state.tickets.filter(t => t.status === 'open').length,
    inProgressTickets: state => state.tickets.filter(t => t.status === 'in_progress').length,
    closedTickets: state => state.tickets.filter(t => t.status === 'closed').length
  },

  actions: {
    saveToLocalStorage() {
      localStorage.setItem('tickets', JSON.stringify(this.tickets))
    },

    getAllTickets() {
      this.tickets = JSON.parse(localStorage.getItem('tickets') || '[]')
      return this.tickets
    },

    createTicket(ticket) {
      const newTicket = {
        id: Date.now(),
        title: ticket.title,
        status: ticket.status,
        description: ticket.description || '',
        createdAt: new Date().toISOString()
      }
      this.tickets.push(newTicket)
      this.saveToLocalStorage()
      return newTicket
    },

    updateTicket(id, updatedData) {
      const index = this.tickets.findIndex(t => t.id === id)
      if (index === -1) throw new Error('Ticket not found')
      this.tickets[index] = { ...this.tickets[index], ...updatedData }
      this.saveToLocalStorage()
    },

    deleteTicket(id) {
      this.tickets = this.tickets.filter(t => t.id !== id)
      this.saveToLocalStorage()
    },

    clearTickets() {
      this.tickets = []
      localStorage.removeItem('tickets')
    }
  }
})
