import Vue from 'vue'
import VueRouter from 'vue-router'
import Semis from '../views/Semis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Semis',
    name: 'Semis',
    component: Semis
  },
  {
    path: '/',
    name: 'All',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/All.vue')
  },
  {
    path: '/Recolte',
    name: 'Recolte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Recolte.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
