import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutPage.vue'),
      meta: { title: 'About' }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioPage.vue'),
      meta: { title: 'Portfolio' }
    },
    {
      path: '/coffee',
      name: 'coffee',
      component: () => import('../views/CoffeePage.vue'),
      meta: { title: 'Coffee' }
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  router.beforeEach((to, from, next) => {
    document.title = to.meta.title + ' - nishthaDalvi();';
    next();
  });
  
  export default router
