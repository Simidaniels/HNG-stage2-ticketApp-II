import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/pages/LandingPage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import SignUpPage from '@/pages/SignUpPage.vue'
import DashBoard from '@/pages/DashBoard.vue'
import TicketManagement from '@/pages/TicketManagement.vue'


const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/login', name: 'Login', component: LoginPage },
  { path: '/signup', name: 'Signup', component: SignUpPage },
  { path: '/dashboard', name: 'Dashboard', component: DashBoard },
  { path: '/tickets', name: 'Tickets', component: TicketManagement },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
