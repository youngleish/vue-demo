<template>
    <h4 @click="onLogin">点我登录</h4>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                routes: [ // 假装是后端返回的数据
                    {
                        path: '/home',
                        name: 'home',
                        component: 'Home',
                        children: [
                          {path:'', name: 'list', component: "List"},
                          {path:'/detail/:id', name: 'detail', component: "Detail", props: true}
                        ]
                    }
                ],
                compMap: { // 路由映射关系
                    Home:  () => import('./Home'),
                    List: () => import('./List'),
                    Detail: () => import('./Detail'),
                }
            }
        },
        methods: {
            onLogin() {
                let configRoute = this.routes.map(route => this.handleCompMap(route))
                // console.log(configRoute)
                // // 动态添加路由
                this.$router.addRoutes(configRoute)

                setTimeout(() => {
                    this.$router.push("/home")
                }, 100)
            },
            // 递归替换路由中的component
            handleCompMap(route) {
                route.component = this.compMap[route.component]
                if (route.children) {
                    route.children.map(item => this.handleCompMap(item))
                }
                return route
            }
        },
    }
</script>

<style scoped>

</style>
