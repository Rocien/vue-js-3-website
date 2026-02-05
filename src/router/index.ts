import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import Properties from '@/pages/Properties/Properties.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/properties',
      name: 'properties',
      component: Properties,
    },
  ],
})

export default router
