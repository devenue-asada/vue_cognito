import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/components/Top.vue'
import LoginComponent from '@/components/Login.vue'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router