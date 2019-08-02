<template>
    <div>
        <h1>FormTest</h1>
        <VForm :model='model' :rules="rules" ref="loginForm">
            <VFormItem label="用户名" prop="username">
                <VInput v-model="model.username"></VInput>
            </VFormItem>
            <VFormItem label="密码" prop="password">
                <VInput v-model="model.password" type="password"></VInput>
            </VFormItem>
            <VFormItem>
                <button @click="onLogin">登录</button>
            </VFormItem>
        </VForm> 
        <p>{{ model }}</p>
    </div>
</template>

<script>
import VInput from './VInput.vue';
import VFormItem from './VFormItem.vue';
import VForm from './VForm.vue';
    export default {
       components: {
           VInput, VFormItem, VForm
       }, 
       data() {
           return {
               model: {
                   username: 'tom',
                   password: ''
               },
               rules: {
                   username: [
                       {required: true, message: "请输入用户名"}
                   ],
                   password: [
                      {required: true, message: "请输入密码"}
                   ]
               }
               
           }
       },
       methods: {
           handleValue(e) {
               this.model.username = e
           },
           onLogin() {
               this.$refs.loginForm.validate((isValidate) => {
                   if (isValidate) {
                       alert("校验成功")
                   } else {
                       alert("校验失败")
                   }
               })
           }
       },
    }
</script>

<style lang="scss" scoped>

</style>