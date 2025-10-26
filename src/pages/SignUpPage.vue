<template>
  <div class="form-container">
    <h2>Sign Up</h2>
    <form @submit.prevent="signup">
      <input v-model="name" placeholder="Name" required />
      <input v-model="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Create Account</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'

const name = ref('')
const email = ref('')
const password = ref('')

function signup() {
  router.push('/login')
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: 5rem auto;
  text-align: center;
}
</style>
