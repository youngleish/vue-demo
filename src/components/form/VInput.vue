<template>
    <div>
        <!-- 自定义组件要实现v-model 必须实现:value 和 @input事件 -->
        <!-- $attrs存放的是props以外父组件传过来的属性 -->
        <input :value="value" @input="handleInput" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        inheritAttrs: false, // 避免顶层容器继承属性
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        methods: {
            handleInput(e) {
                // 通知父组件数据发生了变化（单向数据流，父级把值传给我，我通知父级值发生变化）
                this.$emit("input", e.target.value)
                // 通知父组件formItem进行校验
               this.$parent.$emit("validate")
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>