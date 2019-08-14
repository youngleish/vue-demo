import Vue from "vue";
import App from "./App.vue";
// import router from './router'
import router from "./vrouter";
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();


// <div class="foo" id="js-foo" title="test-foo"><span class="aoo">话捞</span></div>
Vue.component('Comp', {
  render(h) {
    return h('div', {
      attrs: {
        id: 'js-foo',
        title: 'test-foo'
      },
      class: {
        foo: true
      }
    }, [h('span', {
      class: {
        aoo: true
      },
    }, '我是通过Vue.component使用render函数注册的全局组件')])
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

