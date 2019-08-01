<template>
  <div class="hello">
    <p class="title">我是helloworld组件------------</p>
    <strong @click="$emit('modifyMsg', otherMsg)">{{ msg }}</strong>
    <p>{{ firstname }} - {{ lastname }}</p>
    <p>{{ middleName }}</p>
    <p>{{ ancenstors.origin }}</p>
    <NewChild1/>>
 </div>
</template>

<script>
import NewChild1 from './Child1.vue';
export default {
  name: "HelloWorld",
  components: {
    NewChild1
  },
  props: {
    msg: String
  },
  inject: ['ancenstors'],
  data() {
    return {
      firstname: "tom",
      lastname: "tms",
      middleName: "和兄弟组件通信值",
      otherMsg: "子组件修改父组件信息"
    };
  },
  created() {
    this.$root.$on("setPeerMsg", e => {
      this.middleName = e
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
    height: 50px;
    line-height: 50px;
    background-color: pink;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
