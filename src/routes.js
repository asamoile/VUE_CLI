import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './pages/home'
import AboutPage from './pages/about'

const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    }
  ]
})

export default routers
