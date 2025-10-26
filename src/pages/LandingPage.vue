<template>
  <section class="landing">
    <h1>Welcome to TicketApp</h1>
    <p>Manage your tickets efficiently and easily.</p>
    <router-link to="/signup" class="btn">Get Started</router-link>
  </section>
</template>

<style scoped>
.landing {
  text-align: center;
  margin-top: 10%;
}
.btn {
  display: inline-block;
  background: #2b6cb0;
  color: white;
  padding: 0.7rem 1.3rem;
  border-radius: 5px;
  text-decoration: none;
}
</style>
