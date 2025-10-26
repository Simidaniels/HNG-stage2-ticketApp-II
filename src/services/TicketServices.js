let tickets = [
  { id: 1, title: 'Server Down', description: 'Main server is down', status: 'open' },
  { id: 2, title: 'Login Issue', description: 'User cannot login', status: 'resolved' },
]

export default {
  getAll() {
    return tickets
  },
  add(ticket) {
    ticket.id = Date.now()
    tickets.push(ticket)
  },
  remove(id) {
    tickets = tickets.filter(t => t.id !== id)
  },
  update(id, data) {
    const index = tickets.findIndex(t => t.id === id)
    if (index > -1) tickets[index] = { ...tickets[index], ...data }
  }
}
