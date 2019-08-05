<template>
    <div class="detail">
        <h1>这里是详情页查看动态路由</h1>
        <div>{{id}}</div>
        <router-link tag="div" to="/detail/789">跳转到id为789详情页</router-link>
    </div>
</template>
<script>
    export default {
        props: {
            id: {
                type: String,
                default: 0
            },
        },
        watch: {
            '$route'(to, from) {
                console.log(to)
                console.log(from)
                // 对路由变化作出响应...
            }
        },
        beforeRouteUpdate(to, from, next) {
            // console.log(21213444444)
            // react to route changes...
            // don't forget to call next()
            next()
        },
    }
</script>
