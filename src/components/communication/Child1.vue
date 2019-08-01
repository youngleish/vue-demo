<template>
    <div>
        <span class="title">我是child1---</span>
        <p @click="$bus.$emit('changeChild2Msg', changeChild2Msg)">{{ child1Msg }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                child1Msg: " 点击我****可以修改child2里面的值",
                changeChild2Msg: "我是child1, 刚刚修改了child2里面的值"
            }
        },
    }
</script>

<style scoped>
.title {
    display: inline-block;
    background-color: orange;
}
</style>