<template>
    <h3 ref="h3Ref">选项</h3>
    <p>{{ count }}</p>
    <p>{{ formatCount }}</p>
    <button @click="increment">count +1</button>
</template>
<script lang="ts">
export default {
    data() {
        return {
            count: 0
        }
    },
    created() {
        const unWatchCount = this.$watch('count', (val) => {
            console.log('$watch', val)
        })
        // unWatchCount() 当不再需要监听时
    },
    mounted() {
        console.log('组件挂载后查看模版引用', { ref: this.$refs.h3Ref })
    },
    // ... 其他生命周期钩子
    computed: {
        formatCount: {
            get() {
                return `¥ ${this.count}`
            },
            set(newVal: any) {
                console.log('formatCount is set', newVal)
            }
        }
    },
    methods: {
        increment() {
            ++this.count
        }
    },
    watch: {
        count: {
            handler(newVal) {
                console.log("watch", newVal)
            },
            //immediate: true,
            //deep
            //flush
        }
    }
}
</script>