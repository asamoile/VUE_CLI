import { createRouter, createWebHistory } from 'vue-router'
import Test from './test'

const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Test
    }
  ]
})

export default routers
