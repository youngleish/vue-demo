<template>
    <div class="about">
        <h1>这是about页面</h1>
    </div>
</template>
<script>
    export default {
        name: 'detail',
        props: {
            id: {
                type: String,
                default: "0"
            },
        },
        data() {
            return {
                crumbData: [],
                crumbDataName: []
            }
        }
    }
</script>
<style>
</style>
