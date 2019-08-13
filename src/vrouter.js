import Vue from 'vue'
import VueRouter from "./simple-router";
import Home from './views/Home.vue'
import About from './views/About.vue'

Vue.use(VueRouter) // 引入router插件

export default new VueRouter({
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
