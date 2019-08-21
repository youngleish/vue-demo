<template>
    <div class="vuex-box">
        <h1>VuexTest</h1>
        <div>{{$store.state.counter.count}}</div>
        <div>{{$store.getters['counter/score']}}</div>
        <button @click="add">add</button>
        <button @click="increment">increment</button>
        <button @click="asyncAdd">asyncAdd</button>
    </div>
</template>

<script>
    export default {
        name: "vuexTest",
        methods: {
            add() {
                this.$store.commit('counter/add', 2)
            },
            increment() {
                this.$store.commit('counter/increment', {num: 1})
            },
            asyncAdd() {
                this.$store.dispatch('counter/asyncAdd', {num: 3}).then((obj) => {
                    if (obj.ok) {
                       alert('成功了')
                    }
                })
            }
            // async asyncAdd() {
            //     const res = await this.$store.dispatch('asyncAdd', {num: 3})
            //     if (res.ok) {
            //         alert('成功了')
            //     }
            // }
        },
    }
</script>

<style scoped>

</style>
