import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Semis',
    component: () => import('../views/Semis.vue')
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
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  },
]

export default new VueRouter({
  mode: 'history',
  routes
})
