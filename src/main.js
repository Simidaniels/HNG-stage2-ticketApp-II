// src/main.js

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// ✅ Import your global CSS or Tailwind
import './assets/style.css'

// Create Vue App
const app = createApp(App)

// Setup Store (Pinia)
const pinia = createPinia()
app.use(pinia)

// Setup Router
app.use(router)

// Mount App to DOM
app.mount('#app')
    