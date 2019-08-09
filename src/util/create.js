import Vue from 'vue'

export default function create (Component, props) {
    // 1. 创建组件
    // 方法1：通过vue实例创建组件
    const vm = new Vue({
        render(h) {
            // render方法提供给我们一个h函数，它可以渲染VNode
            return h(Component, {props})
        }
    }).$mount(); // 更新操作
    // 方法2： 通过Vue.extend 方法创建和注册组件
    // const compConstructor = Vue.extend(Component)
    // const vm = new compConstructor({
    //     el: document.createElement('div'),
    //     propsData: props
    // })
    // 方法3：通过Vue.component 方法创建和注册组件
    // const compConstructor = Vue.component("comp", Component)
    // const vm = new compConstructor({
    //     el: document.createElement('div'),
    //     propsData: props
    // })

    // 2. 找到组件, 并把dom挂载到body上
    document.body.appendChild(vm.$el)
    const comp = vm.$children[0]

    // 3. 清理dom
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    };

    // 4.返回组件
    return comp;

}
