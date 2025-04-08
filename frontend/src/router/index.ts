import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  // 布局页面
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router