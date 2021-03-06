import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'navigation.home',
    icon: 'home',
    component: Home,
    showAtNavigation: true
  },
  {
    path: '/about',
    name: 'navigation.about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    icon: "information",
    showAtNavigation: true
  },
  {
    path: '/caching',
    name: 'navigation.caching',
    component: () => import('../views/Caching.vue'),
    icon: "memory",
    showAtNavigation: true
  }
]

const navigationRoutes = routes.filter(route => route.showAtNavigation);

const router = new VueRouter({
  routes
})

export default router;

export { routes };

export { navigationRoutes };