import Vue from 'vue'

export default function create (Component, props) {
    // 1. 通过vue实例创建组件
    const vm = new Vue({
        render(h) {
            // h函数把组件处理成vnode虚拟dom
            return h(Component, {props})// 需要了解{props}这种传参方式
        }
    }).$mount();

    // 2. 找到组件, 并把dom挂载到body上
    const comp = vm.$children[0];
    document.body.appendChild(vm.$el)

    // 3. 清理dom
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        vm.$destroy();
    };

    // 4.返回comp
    return comp;

}
