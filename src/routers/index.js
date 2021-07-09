/*
 * @Author: Drswith
 * @Date: 2021-07-09 09:20:27
 * @LastEditors: Drswith
 * @LastEditTime: 2021-07-09 10:17:47
 * @FilePath: \emqx-community-mysql-toolkit\src\routers\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layouts/index.vue'

Vue.use(VueRouter)
export const constantRoutes = [
  //  根路由
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'Index',
      component: () => import('@/views/index/index.vue'),
      meta: { title: '首页', icon: 'ico-home' }
    }]
  },
  {
    path: '/setup',
    component: Layout,
    redirect: '/setup/begin',
    name: 'Setup',
    children: [
      {
        path: 'begin',
        name: 'Begin',
        component: () => import('@/views/setup/index.vue'),
        meta: { title: '客户管理1', icon: 'ico-user' }
      },
      {
        path: 'emqx',
        name: 'Emqx',
        component: () => import('@/views/setup/index.vue'),
        meta: { title: '客户管理2', icon: 'ico-user' }
      },
      {
        path: 'mysql',
        name: 'Mysql',
        component: () => import('@/views/setup/index.vue'),
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

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes:constantRoutes // (缩写) 相当于 routes: routes
})

const router = createRouter()


/*
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes 
})
*/
export default router