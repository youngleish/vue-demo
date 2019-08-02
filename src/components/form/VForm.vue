<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import { Promise } from 'q';
    export default {
        props: {
            model: {
                type: Object,
                required: true
            },
            rules: {
                type: Object
            }
        },
        provide() {
            return {
                form: this // 传递form实例给后代，比如formItem 进行校验
            }
        },
        methods: {
            validate(cb) {
                // 调用孩子的校验函数, map的结果是包含若干个Promise的数组
                const tasks = this.$children
                .filter(item => item.prop)
                .map(item => item.validata())
                
                Promise.all(tasks)
                    .then(() => cb(true))
                    .catch(() => cb(false));
            }
        },
    }
</script>

<style lang="scss~~" scoped>

</style>