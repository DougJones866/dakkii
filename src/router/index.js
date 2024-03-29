import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/teams',
      name: 'teams',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Teams.vue')
    },
    {
      path: '/commissions',
      name: 'commissions',
      component: () => import('../views/Commissions.vue')
    }
  ]
})

export default router
