<template>
    <div class="wrap">
        <!-- 匿名插槽 备用内容是指父组件没有传递内容的时候显示的内容-->
        <slot>备用内容</slot>
        <!-- 具名插槽 -->
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    export default {
    
    }
</script>

<style scoped>
.wrap{
    border: 1px solid #000;
    margin-top: 10px;
}
</style>