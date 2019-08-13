import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/about.vue'

Vue.use(Router) // 引入router插件

export default new Router({
  mode: 'history', // 有3中模式 hash | history | abstract
  base: process.env.BASE_URL, // 设置baseUrl 比如http://abc.com/cart，后面所有的路由都会自动带有cart
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
