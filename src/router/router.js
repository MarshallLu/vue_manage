import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const home = r => require.ensure([], () => r(require('@/page/home.vue')),'home')
const login = r => require.ensure([], () => r(require('@/page/login.vue')),'login')
const topMenu = r => require.ensure([], () => r(require('@/components/topMenu.vue')),'topMenu')
const leftMenu = r => require.ensure([], () => r(require('@/components/leftMenu.vue')),'leftMenu')
const userList = r => require.ensure([], () => r(require('@/page/userList.vue')),'userList')
const shopList = r => require.ensure([], () => r(require('@/page/shopList.vue')),'shopList')
const foodList = r => require.ensure([], () => r(require('@/page/foodList.vue')),'foodList')

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/topMenu',
    component: topMenu,
    children: [{
      path: 'leftMenu',
      component: leftMenu,
      children: [{
        path: 'home',
        component: home
      },{
        path: 'userList',
        component: userList,
        meta: ['数据管理','用户列表']
      },{
        path: 'shopList',
        component: shopList,
        meta: ['数据管理','商家列表']
      },{
        path: 'foodList',
        component: foodList,
        meta: ['数据管理','食品列表']
      }]
    }]
  }
]

const router = new VueRouter({
     routes
})

export default router
