import { createRouter, createWebHistory } from 'vue-router';
import About from './components/about.vue';

const routes = [
  { 
    path: '/about',
    name: 'About',
    component: About,
    meta: { requiresAuth: false }
  },
  { 
    path: '/',
    redirect: '/about'  // Redirect root path to about
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/about'  // Catch-all route
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;