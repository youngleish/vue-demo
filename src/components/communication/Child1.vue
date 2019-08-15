<template>
    <div>
        <span class="title">我是child1---</span>
        <p @click="$bus.$emit('changeChild2Msg', changeChild2Msg)">{{ child1Msg }}</p>
        <grand-child :child1Msg="grandChildMsg" @changeChild1Msg="changeGrandChildMsg"></grand-child>
    </div>
</template>

<script>
    import GrandChild from "./GrandChild";
    export default {
        components: {GrandChild},
        data() {
            return {
                child1Msg: " 点击我****可以修改child2里面的值",
                changeChild2Msg: "我是child1, 刚刚修改了child2里面的值",
                grandChildMsg: "我是child1传递给grandchild的值"
            }
        },
        methods: {
            changeGrandChildMsg() {
                this.grandChildMsg = "jflasjflsajflkajsflkj"
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
