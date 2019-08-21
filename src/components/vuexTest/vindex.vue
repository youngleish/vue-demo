<template>
    <div class="vuex-box">
        <h1>VuexTest</h1>
        <div>{{$store.state.count}}</div>
        <div>{{$store.getters.score}}</div>
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
                this.$store.commit('add', 2)
            },
            increment() {
                this.$store.commit('increment', {num: 1})
            },
            asyncAdd() {
                this.$store.dispatch('asyncAdd', {num: 3}).then((obj) => {
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
