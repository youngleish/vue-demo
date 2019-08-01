<template>
    <div class="wrap">
        <!-- 匿名插槽 备用内容是指父组件没有传递内容的时候显示的内容-->
        <slot>备用内容</slot>
        <!-- 具名插槽 -->
        <div>
            <slot name="content"></slot>
        </div>
        <div>
            <!-- 作用域插槽 -->
            <slot name="scope" :msg="msg"></slot>
        </div>
        <div>
            <slot name="scope1" :msg="msg2"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: "这个插槽的msg来自子组件Comp3",
                msg2: "通过解构插槽属性来显示这个插槽的msg来自子组件Comp3"
            }
        },
    }
</script>

<style scoped>
.wrap{
    border: 1px solid #000;
    margin-top: 10px;
}
</style>