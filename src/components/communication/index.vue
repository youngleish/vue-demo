<template>
  <div id="app">
    <h1 class="title">ComponentsTest</h1>
    <HelloWorld :msg="msg" ref="hw" @modifyMsg="modifyMsg($event)"/>
    <Hellow @setPeerMsg="handlePeerMsg($event)"/>
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";
import Hellow from './Hellow.vue';

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
    HelloWorld, Hellow
  },
  mounted() {
    // 父组件通过$refs修改子组件信息
    this.$refs.hw.firstname = "lily";
    // 父组件通过$children修改子组件信息
    this.$children[0].lastname = "Bush";
  },
  methods: {
    modifyMsg(e) {
      this.msg = e
    }
  },
};
</script>

<style>
.title {

}
</style>
