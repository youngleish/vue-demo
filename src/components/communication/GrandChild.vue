<template>
    <div class="grandChild">
        <span class="title">-----我是grandchild----</span>
        <div>{{child1Msg}}</div>
        <div>{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: "GrandChild",
        componentName: "GrandChild",
        props: {
            child1Msg: String
        },
        data() {
            return {
                msg: '我即将接受祖组件helloworld传来的值'
            }
        },
        created() {
            this.$on('changeChild1Msg', (val) => {
                console.log(13333);
                this.msg = val
            })
        }
    }
</script>

<style scoped>
    .title {
        display: inline-block;
        background-color: purple;
    }
</style>
