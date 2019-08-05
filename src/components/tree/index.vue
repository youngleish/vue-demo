<template>
    <div>
        <h1>TreeTest</h1>
        <ul>
            <item :model="model" v-for="model in modelData" :key="model.title"></item>
        </ul>
    </div>
</template>

<script>
    import Item from './item.vue';
    export default {
        components: {
            Item
        },
        data() {
            return {
                // modelData: {
                //     title: "水果蔬菜分类",
                //     children: [
                //         {
                //             title: "水果",
                //             children: [
                //                 {
                //                     title: "苹果",
                //                     children: [
                //                         {title: "青苹果"},
                //                         {title: "黄苹果"},
                //                         {title: "嘎啦苹果"}
                //                     ]
                //                 },
                //                 {
                //                     title: "梨子",
                //                     children: [
                //                         {title: "青花梨"},
                //                         {title: "鸭梨"},
                //                         {title: "库尔勒梨"}
                //                     ]
                //                 },
                //                 {
                //                     title: "橘子"
                //                 },
                //                 {
                //                     title: "香蕉"
                //                 }
                //             ]
                //         },
                //         {
                //             title: "蔬菜",
                //             children: [
                //                 {
                //                     title: "根茎类",
                //                     children: [
                //                         {title: "土豆"},
                //                         {title: "红薯"},
                //                         {title: "紫薯"}
                //                     ]
                //                 },
                //                 {
                //                     title: "叶菜",
                //                     children: [
                //                         {title: "菠菜"},
                //                         {title: "油菜"},
                //                         {title: "鸡毛菜"}
                //                     ]
                //                 }
                //             ]
                //         }
                //     ]
                // }
                modelData: [
                    {
                        title: "水果",
                        children: [
                            {
                                title: "苹果",
                                children: [
                                    {title: "青苹果"},
                                    {title: "黄苹果"},
                                    {title: "嘎啦苹果"}
                                ]
                            },
                            {
                                title: "梨子",
                                children: [
                                    {title: "青花梨"},
                                    {title: "鸭梨"},
                                    {title: "库尔勒梨"}
                                ]
                            },
                            {
                                title: "橘子"
                            },
                            {
                                title: "香蕉"
                            }
                        ]
                    },
                    {
                        title: "蔬菜",
                        children: [
                            {
                                title: "根茎类",
                                children: [
                                    {title: "土豆"},
                                    {title: "红薯"},
                                    {title: "紫薯"}
                                ]
                            },
                            {
                                title: "叶菜",
                                children: [
                                    {title: "菠菜"},
                                    {title: "油菜"},
                                    {title: "鸡毛菜"}
                                ]
                            }
                        ]
                    },
                    {title: "五谷"}
                ]
            }
        },
    }
</script>

<style scoped>

</style>
