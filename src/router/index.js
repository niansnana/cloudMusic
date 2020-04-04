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
    component: () => import('@/views/home/Index')
  },
  {
    path: '/find',
    component: () => import('@/views/find/Index')
  },
  {
    path: '/friend',
    component: () => import('@/views/friend/Index')
  },
  {
    path: '/video', component: () => import('@/views/video/Index')
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
