// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { APP_NAMES } from '@/plugins/dictionary';

const DEFAULT_TITLE = APP_NAMES.capitalize;

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
        meta: { head: `Home - ${DEFAULT_TITLE}` }
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
        meta: { head: `Error - ${DEFAULT_TITLE}` }
      },
    ],
  },
]

const router = createRouter({
  // @ts-ignore
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes,
})

router.afterEach((to, /* from */) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  nextTick(() => {
    if (to.meta.head) document.title = to.meta.head.toString();
    else document.title = DEFAULT_TITLE;
  });
});

export default router
