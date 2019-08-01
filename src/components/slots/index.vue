<template>
    <div>
        <h1>SlotsTest</h1>
        <NewComp1>hello 我是匿名插槽</NewComp1>
        <NewComp2>
            <!-- 默认插槽用default -->
            <template v-slot:default>默认插槽用default</template>

            <!-- 具名插槽用v-slot: 插槽名字 -->
            <template v-slot:content>我是具名插槽content</template>
        </NewComp2>
        <NewComp3>
            <!-- 具名插槽用v-slot: 插槽名字 -->
            <template v-slot:content>{{msg}}</template>
            <!-- 作用域插槽 slotProps插槽属性随便命名-->
            <template v-slot:scope="slotProps">{{slotProps.msg}}</template>
            <!-- 可以吧插槽属性解构 -->
            <template v-slot:scope1="{msg}">{{msg}}</template>
        </NewComp3>
    </div>
</template>

<script>
import NewComp1 from './Comp1.vue';
import NewComp2 from './Comp2.vue';
import NewComp3 from './Comp3.vue';
    export default {
        components: {
            NewComp1, NewComp2, NewComp3
        },
        data() {
            return {
                msg: "这个具名插槽的作用域是父组件"
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>