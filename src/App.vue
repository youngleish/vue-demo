<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ComponentsTest/>
    <SlotTest/>
    <FormTest/>
  </div>
</template>

<script>
import ComponentsTest from "./components/communication";
import SlotTest from './components/slots';
import FormTest from './components/form';

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
    ComponentsTest, SlotTest, FormTest
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
  margin-bottom: 100px;
  height: 100%;
  width: 100%;
}
</style>
