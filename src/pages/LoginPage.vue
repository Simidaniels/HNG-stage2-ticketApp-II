<template>
  <div class="form-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'

const email = ref('')
const password = ref('')

function login() {
  if (email.value && password.value) {
    router.push('/dashboard')
  }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 5rem auto;
  text-align: center;
}
input, button {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.7rem;
}
</style>
