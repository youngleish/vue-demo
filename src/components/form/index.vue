<template>
  <div>
    <h1>FormTest</h1>
    <VForm :model="model" :rules="rules" ref="loginForm">
      <VFormItem label="用户名" prop="username" >
        <VInput v-model="model.username"></VInput>
      </VFormItem>
      <VFormItem label="密码" prop="password">
        <VInput v-model="model.password" type="password"></VInput>
      </VFormItem>
      <VFormItem label="记住密码" prop="agree">
        <VCheckedbox v-model="model.agree" type="checkbox"></VCheckedbox>  
      </VFormItem>
      <VFormItem>
        <button @click="onLogin">登录</button>
      </VFormItem>
    </VForm>
    <p>{{ model }}</p>
  </div>
</template>

<script>
import VInput from "./VInput.vue";
import VCheckedbox from './VCheckedbox.vue';
import VFormItem from "./VFormItem.vue";
import VForm from "./VForm.vue";
export default {
  components: {
    VInput,
    VFormItem,
    VForm,
    VCheckedbox
  },
  data() {
    return {
      model: {
        username: "tom",
        password: "",
        agree: false
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
        agree: [{required: true, message: "请阅读登录协议，并勾选已读"}]
      }
    };
  },
  methods: {
    handleValue(e) {
      this.model.username = e;
    },
    onLogin() {
      // 传给校验函数一个回调函数，校验函数在回调函数中传校验结果
      this.$refs.loginForm.validate(isValidate => {
        if (isValidate) {
          alert("校验成功");
        } else {
          alert("校验失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>