<template>
    <div>
        <input :checked="checked" @change="handleChange" v-bind="$attrs">
    </div>
</template>

<script>
    export default {
        model: {
            prop: "checked",
            event: 'change'
        },
        inheritAttrs: false,
        props: {
            checked: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleChange(e) {
                this.$emit('change', e.target.checked)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>