let Vue

// 实现插件的install函数
function install(_vue) {
    Vue = _vue
    // 混入 把$store选项指定到Vue原型上
    Vue.mixin({
        beforeCreate () {
            if (this.$options.store) { // 是存储数据的store实例
                Vue.prototype.$store = this.$options.store
            }
        },
    })

}

class store {
    constructor(options) {
        
        // 数据初始化
        // state是响应式的,所以利用Vue的data来实现
        // 注意data中的值会在Vue实例中挂一份一模一样的数据
        this.state = new Vue({
            data: options.state
        })

        // 初始化 mutations 和 actions
        this.mutations = options.mutations || {}
        this.actions = options.actions || {}
        options.getters && this.handleGetters(options.getters)
    }
    // 实现commit方法
    commit = (type, payload) => {
        let fn = this.mutations[type] // 获取变更函数
        fn(this.state, payload)
    }
    dispatch = (type, payload) => {
        let fn = this.actions[type] 
        return fn({state: this.state, commit: this.commit}, payload)
    }
    // getter: {score(state) {return state.xx}}
    handleGetters(getters) {
        this.getters = {}

        // 定义只读属性
        Object.keys(getters).forEach(key => {
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return getters[key](this.state)
                }
            })            
        })
    }
}
// 导出vuex
export default {store, install}