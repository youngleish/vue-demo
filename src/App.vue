<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ComponentsTest/>
    <SlotTest/>
    <vuexTest/>
  </div>
</template>

<script>
import ComponentsTest from "./components/communication";
import SlotTest from './components/slots';
// import VuexTest from './components/vuexTest';
import VuexTest from './components/vuexTest/vindex';

export default {
  name: "app",
  provide() {
    return {
      ancenstors: this
    }
  },
  data() {
    return {
      msg: "父组件通过props属性传递给子组件的信息",
      origin: "来自于祖辈组件provider提供的值"
    };
  },
  components: {
    ComponentsTest, SlotTest, VuexTest
  },
  methods: {
    modifyMsg(e) {
      this.msg = e
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
