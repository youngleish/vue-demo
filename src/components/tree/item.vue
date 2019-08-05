<template>
    <li>
        <div class="item-head" @click="toggle">
            <h4>{{model.title}}</h4>
            <span class="item-folder" v-if="isFoldre">{{open ? "-" : "+"}}</span>
        </div>
        <ul v-show="open" v-if="isFoldre">
           <treeItem :model="item" v-for="item in model.children" :key="item.title"></treeItem>
        </ul>
    </li>
</template>

<script>
    export default {
        name: "treeItem",
        props: {
            model: Object
        },
        data() {
            return {
                open: false
            }
        },
        // mounted() {
        //     console.log(this.model)
        // },
        computed: {
            isFoldre() {
                return this.model.children && this.model.children.length;
            }
        },
        methods: {
            toggle() {
                this.open = !this.open
            }
        },
    }
</script>

<style scoped>
    .item-head {
        display: flex;
        align-items: center;
    }

    .item-folder {
        font-size: 18px;
    }
</style>
