import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    component: () => import('../views/semis-exterieur.vue')
  },
  {
    path: '/semis-exterieur',
    name: 'semis-exterieur',
    component: () => import('../views/semis-exterieur.vue')
  },
  {
    path: '/semis-interieur',
    name: 'semis-interieur',
    component: () => import('../views/semis-interieur.vue')
  },
  {
    path: '/plantation',
    name: 'plantation',
    component: () => import('../views/plantation')
  },
  {
    path: '/all',
    name: 'all',
    component: () => import('../views/all.vue')
  },
  {
    path: '/recolte',
    name: 'recolte',
    component: () => import('../views/recolte.vue')
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
