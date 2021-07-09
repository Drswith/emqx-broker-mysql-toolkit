/*
 * @Author: Drswith
 * @Date: 2021-07-09 09:20:27
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 21:56:17
 * @FilePath: \emqx-broker-mysql-toolkit\src\routers\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import SetupLayout from '@/layouts/SetupLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

Vue.use(VueRouter)
export const constantRoutes = [
  //  根路由
  {
    path: '/',
    redirect: '/setup',
  },
  // 主界面
  {
    path: '/main',
    name: 'Main',
    component: MainLayout,
    redirect: '/main/dashboard',
    children: [
      {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index.vue'),
      meta: { title: '控制台', icon: 'dashboard' }
    },
    {
      path: 'database',
      name: 'Database',
      component: () => import('@/views/database/index.vue'),
      meta: { title: '数据库', icon: 'database' }
    },
    {
      path: 'monitor',
      name: 'Monitor',
      component: () => import('@/views/monitor/index.vue'),
      meta: { title: '监视器', icon: 'tubiao' }
    },
    {
      path: 'setting',
      name: 'Setting',
      component: () => import('@/views/setting/index.vue'),
      meta: { title: '设置', icon: 'setting' }
    }]
  },
  // 配置界面
  {
    path: '/setup',
    component: SetupLayout,
    redirect: '/setup/begin',
    name: 'Setup',
    children: [
      {
        path: 'begin',
        name: 'SetupBegin',
        component: () => import('@/views/setupBegin/index.vue'),
        meta: { title: '客户管理1', icon: 'ico-user' }
      },
      {
        path: 'emqx',
        name: 'SetupEmqx',
        component: () => import('@/views/setupEmqx/index.vue'),
        meta: { title: '客户管理2', icon: 'ico-user' }
      },
      {
        path: 'mysql',
        name: 'SetupMysql',
        component: () => import('@/views/setupMysql/index.vue'),
        meta: { title: '客户管理3', icon: 'ico-user' }
      }
    ]
  },
  //  404
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
    // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes:constantRoutes // (缩写) 相当于 routes: routes
})

export default router