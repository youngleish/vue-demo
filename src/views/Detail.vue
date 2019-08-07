<template>
    <div class="detail">
        <h1>这里是详情页查看动态路由</h1>
        <div><span>我是面包屑--------</span><span class="breadcrumb" @click="handleRoutLink(0)">{{crumbDataName[0]}}</span>/<span @click="handleRoutLink(1)">{{crumbDataName[1]}}</span></div>
        <div>{{id}}</div>
        <router-link tag="div" to="/detail/789">跳转到id为789详情页</router-link>
    </div>
</template>
<script>
    export default {
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
        },
        watch: {
            $route: {
                handler(route) {
                    console.log(route);
                    console.log(this.$route.matched);
                    this.crumbData = this.$route.matched
                    this.crumbDataName = this.$route.matched.map(item => item.name || item.redirect) //注意这里获取的嵌套路径片段不包含片段中的children
                },
                immediate: true // 一般的watch是监听到$route发生变化的时候，才会执行handler里面的函数，加上这个属性以后会立即执行一次
            }
        },
        beforeRouteUpdate(to, from, next) {
            // console.log(21213444444)
            // react to route changes...
            // don't forget to call next()
            next()
        },
        methods: {
            handleRoutLink(index) {
                console.log(32323);
                // this.$router.push("/home")
                console.log(this.crumbData[index]);
                this.$router.push(this.crumbData[index].path)
            }
        },
    }
</script>
<style>
    .breadcrumb {
        color: blue;
    }
</style>
