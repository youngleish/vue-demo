<template>
    <div>
        <p class="title">我是Hellow组件-----------</p>
        <p @click="$parent.$emit('setPeerMsg', msg)">
            我是另外一个组件点击我，可以改变我的兄弟组件中msg的值
        </p>
        <p>{{changedMsg}}</p>
        <NewChild2/>
    </div>
</template>

<script>
import NewChild2 from './Child2.vue';
    export default {
        components: {
            NewChild2,
        },
        data() {
            return {
                msg: "我是同辈中的msg值",
                changedMsg: "我是可以被修改的值"
            }
        },
        created () {
            this.$bus.$on("changeHellowMsg", e => {
                this.changedMsg = e
            });
        },
    }
</script>

<style scoped>
.title {
    height: 50px;
    line-height: 50px;
    background-color: pink;
}
</style>
