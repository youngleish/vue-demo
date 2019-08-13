let Vue
class VueRouter{
    constructor(options) {
        // 存储options
        this.$options = options

        // 定义path和route的映射关系
        this.routeMap = {}

        // 利用Vue实例中data响应式的特性，创建响应式的当前路径current
        this.app = new Vue({
            data: {
                current: '/'
            }
        })
    }

    init() {
        // 绑定事件，处理current值
        this.bindEvents()

        // 创建routeMap映射
        this.createRouteMap()

        // 创建全局组件
        this.initComponent()
    }

    bindEvents() {
        window.addEventListener('hashchange', this.onHashChange.bind(this))
        window.addEventListener('load', this.onHashChange.bind(this))
    }

    onHashChange() {
        // 处理current值
        this.app.current = window.location.hash.slice(1) || '/'
    }

    createRouteMap() {
        this.$options.routes.forEach(item => {
            this.routeMap[item.path] = item
        })
    }

    initComponent() {
        // 创建router-linK组件  <a href=''></a>
        Vue.component('router-link', {
            props: {
                to: String
            },
            render(h) {
                return h('a', {attrs: {href: '#' + this.to}}, this.$slots.default)
            }
        })

        // 创建router-view
        // 通过响应式的current，响应式的更新router-view
        Vue.component('router-view', {
            render: (h) => {
                let Comp = this.routeMap[this.app.current].component
                return h(Comp)
            }
        })
    }
}

VueRouter.install = function (_vue) {
    Vue= _vue

    // 利用混入对Vue进行扩展
    Vue.mixin({
        beforeCreate() {
            // 这里的代码将会在main.js中Vue初始化的时候调用, 对VueRouter进行初始化
            // 这里的this指向 Vue实例组件
            // 这里解释了为什么Vue实例化的时候为什么传router了
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router
                this.$options.router.init()
            }
        }
    })
}
export default VueRouter
