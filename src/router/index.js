import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheStore from '../views/TheStore.vue'
import TheCart from '../views/TheCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/store',
    name: 'store',
    component: TheStore
  },
  {
    path: '/cart',
    name: 'cart',
    component: TheCart
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
