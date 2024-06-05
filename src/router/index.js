import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue';

const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Home' }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutPage.vue'),
    //   meta: { title: 'About' }
    // },
    // {
    //   path: '/portfolio',
    //   name: 'portfolio',
    //   component: () => import('../views/PortfolioPage.vue'),
    //   meta: { title: 'Portfolio' }
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../views/ContactPage.vue'),
    //   meta: { title: 'Contact' }
    // },
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
