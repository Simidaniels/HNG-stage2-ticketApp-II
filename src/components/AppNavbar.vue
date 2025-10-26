<template>
  <nav class="navbar">
    <h2 class="logo">TicketApp</h2>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
      <li><router-link to="/tickets">Tickets</router-link></li>
      <li><router-link to="/login">Login</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background: #2d3748;
  color: white;
  padding: 1rem 2rem;
}
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}
a {
  color: white;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
</style>
