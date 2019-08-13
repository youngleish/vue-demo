import Vue from "vue";
import App from "./App.vue";
// import router from './router'
import router from "./vrouter";
Vue.config.productionTip = false;

Vue.prototype.$bus = new Vue();
console.log(router);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

