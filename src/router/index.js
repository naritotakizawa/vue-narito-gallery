import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product-list',
    component: ProductList,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
