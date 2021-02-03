import Vue from 'vue'
import VueRouter from 'vue-router'
import Semis from '../views/Semis.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Semis',
    component: Semis
  },
  {
    path: '/All',
    name: 'All',
    component: () => import('../views/All.vue')
  },
  {
    path: '/Recolte',
    name: 'Recolte',
    component: () => import('../views/Recolte.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
