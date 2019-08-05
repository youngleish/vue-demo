import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router) // 引入router插件

export default new Router({
  mode: 'history', // 有3中模式 hash | history | abstract
  base: process.env.BASE_URL, // 设置baseUrl 比如http://abc.com/cart，后面所有的路由都会自动带有cart
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {path:'', name: 'list', component: () => import('./views/List.vue')},
        {path:'/detail/:id', name: 'detail', component: () => import('./views/Detail.vue'), props: true},
      ]
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting 路由层级代码分割
      // this generates a separate chunk (about.[hash].js) for this route  这种方式会生成about.[hash].js的文件，
      // which is lazy-loaded when the route is visited. 可以让访问路由的时候进行懒加载
      component: () => import(/* webpackChunkName: "about" */ './views/List.vue')
    }
  ]
})
