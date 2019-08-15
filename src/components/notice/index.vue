<template>
    <div v-if="showFlag" class="notice-box">
        <div class="mask"></div>
        <div class="con">
            <h4>{{title}}</h4>
            <p>{{msg}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: "提示"
            },
            msg: [String],
            duration: {
                type: Number,
                default: 300
            }
        },
        data() {
            return {
                showFlag: false,
                timer: null
            }
        },
        methods: {
            show() {
                this.showFlag = true
                this.timer = setTimeout(() => {
                    this.hide()
                }, this.duration);
            },
            hide() {
                this.showFlag = false
                window.clearTimeout(this.timer);
                this.remove();
            }
        },
    };
</script>

<style scoped>
    .notice-box {
        position: absolute;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }

    .mask {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
    }

    .con {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 200;
        width: 200px;
        height: 200px;
        background-color: #fff;
    }
</style>
