<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-view></router-view>
    <ComponentsTest/>
    <SlotTest/>
    <FormTest/>
    <TreeTest></TreeTest>
  </div>
</template>

<script>
  import ComponentsTest from "../components/communication";
  import SlotTest from '../components/slots';
  import FormTest from '../components/form';
  import TreeTest from '../components/tree';

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
      ComponentsTest, SlotTest, FormTest, TreeTest
    },
    methods: {
      modifyMsg(e) {
        this.msg = e
      }
    },
  };
</script>

<style>

</style>
