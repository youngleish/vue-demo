import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router) // 引入router插件

/* eslint-disable */
export default new Router({
  mode: 'history', // 有3中模式 hash | history | abstract
  base: process.env.BASE_URL, // 设置baseUrl 比如http://abc.com/cart，后面所有的路由都会自动带有cart
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }
    // {
    //   path: '/list',
    //   name: 'list',
    //   // route level code-splitting 路由层级代码分割
    //   // this generates a separate chunk (about.[hash].js) for this route  这种方式会生成about.[hash].js的文件，
    //   // which is lazy-loaded when the route is visited. 可以让访问路由的时候进行懒加载
    //   component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
    // }
  ]
})
