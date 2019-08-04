<template>
    <div>
        <p>{{msg}}</p>
        <input type="text" :value="msg" @input="handleVal">
    </div>
</template>

<script>
    export default {
        props: ['msg'],
        data() {
            return {
                val: ""
            }
        },
        methods: {
            handleVal(e) {
                this.$emit("update:msg", e.target.value);
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>