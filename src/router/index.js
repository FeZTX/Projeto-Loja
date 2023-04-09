import { createRouter, createWebHistory } from 'vue-router'
import SellView from '../views/SellView.vue'

const routes = [
  {
    path: '/venda',
    name: 'venda',
    component: SellView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
