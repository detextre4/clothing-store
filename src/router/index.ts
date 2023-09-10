// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // ? Default routes
  {
    path: '/',
    component: () => import('@/layouts/default-layout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/pages/home.vue'),
      },
    ],
  },


  // ? No Authenticated routes
  {
    path: '/auth',
    component: () => import('@/layouts/auth-layout.vue'),
    children: [
      {
        path: "/:pathMatch(.*)*",
        name: "Error",
        component: () => import('@/pages/error.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
