<template>
    <li class="item">
        <div class="item-head" @click="toggle">
            <h3>{{model.title}}</h3>
            <span class="item-folder" v-show="isFolder">{{open ? '-' : '+'}}</span>
        </div>
        <ul>
            <treeItem v-show="open" v-for="model in model.children" :key="model.title" :model="model"></treeItem>
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
        computed: {
            isFolder() {
                return this.model.children && this.model.children.length;
            }
        },
        methods: {
            toggle() {
                this.open = !this.open
            }
        }
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
