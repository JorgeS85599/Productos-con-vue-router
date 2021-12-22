import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsTable from '../views/ProductsTable.vue'
import ProductForm from '../views/ProductForm.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ProductsTable
  },
  {
    path: '/newProduct',
    name: 'New',
    component: ProductForm
  },
  {
    path: '/editProduct/:id',
    name: 'Edit',
    component: ProductForm,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router