import { createRouter, createWebHistory } from 'vue-router'
import DashboardOrdersPageCreator from "@/templates/dashboard/orders/creators/DashboardOrdersPageCreator.vue";

const routes = [
  {
    path: '/orders',
    name: 'Orders',
    component: DashboardOrdersPageCreator
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
