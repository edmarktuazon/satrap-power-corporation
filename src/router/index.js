import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Satrap Power Corporation',
      },
    },
    {
      path: '/our-company',
      name: 'about',
      meta: {
        title: 'Satrap Power Corporation | Our Company',
      },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/our-projects',
      name: 'projects',
      meta: {
        title: 'Satrap Power Corporation | Our Projects',
      },
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Satrap Power Corporation | Contact Us',
      },
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Satrap Power Corporation'
})

export default router
