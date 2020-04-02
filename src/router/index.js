import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/find'
  },
  {
    path: '/home',
    component: () => import('@/views/home/Home')
  },
  {
    path: '/find',
    component: () => import('@/views/home/Find')
  },
  {
    path: '/friend',
    component: () => import('@/views/home/Friend')
  },
  {
    path: '/video', component: () => import('@/views/home/Video')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
