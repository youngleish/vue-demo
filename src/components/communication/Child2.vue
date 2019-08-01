<template>
    <div>
        <span class="title">我是child2----</span>
        <p @click="$bus.$emit('changeHellowMsg', 'chile2值把组件Hellow组件值修改了')">{{child2Msg}}</p>
        <p>{{child2ChangedMsg}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                child2Msg: "点击我***可以修改HelloW组件里面的值",
                child2ChangedMsg: "我是将来被修改的内容"
            }
        },
        created () {
            this.$bus.$on('changeChild2Msg', e => {
                this.child2ChangedMsg = e
            });
        }
    }
</script>

<style scoped>
.title {
    display: inline-block;
    background-color: orange;
}
</style>