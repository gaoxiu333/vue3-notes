<!--
 * @Author: xiu gao.yh1991@gmail.com
 * @Date: 2023-04-21 21:37:39
 * @LastEditors: xiu gao.yh1991@gmail.com
 * @LastEditTime: 2023-04-23 12:59:18
 * @FilePath: /vue3-notes/vue-vite/src/views/diffApi/compositionApi.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h3>组合式API</h3>
    <p>{{ count }}</p>
    <p>{{ formatCount }}</p>
    <button @click="increment">count +1</button>
</template>
<script lang="ts">
import { computed, h, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, ref } from 'vue'
export default {
    // props:props对象
    // ctx:setup的上下文，同vue2中的this
    setup(props, ctx) {
        console.log('setup', props, ctx)

        // ref 响应式数据
        const count = ref(0)
        // 定义方法
        const increment = () => ++count.value

        // 计算属性
        const formatCount = computed(() => {
            return `¥ ${count.value}`
        })


        // 生命周期钩子函数
        /**
         * onMounted:在组件挂载完成后执行。
         * 1.所有同步子组件都已经被挂载;
         * 2.在服务器端渲染期间不会被调用。
         */
        onMounted(() => {
            console.log("生命周期：onMounted")
        })

        /**
         * onUpdated:响应式数据状态变更后， DOM 树更新之后调用。
         * 1. 父组件的钩子在子组件钩子执行后调用
         * 2. 在服务器端渲染期间不会被调用。
         */
        onUpdated(() => {
            console.log("生命周期：onUpdated")
        })

        /**
         * onUnmounted:组件实例被卸载之后调用。
         * 1. 可以在这个钩子清楚计时器、DOM 事件监听器等。
         * 2. 服务器端渲染期间不会被调用。
         */
        onUnmounted(() => {
            console.log("生命周期：onUnmounted")
        })

        /**
         * onBeforeMount:组件被挂载之前被调用。
         * 1. 响应式数据已经收集完成；
         * 2. DOM节点还没有被创建；
         * 3. 服务器端渲染期间不会被调用
         */
        onBeforeMount(() => {
            console.log("生命周期：onBeforeMount")
        })

        /**
         * onBeforeUpdate:响应式数据状态变更后， DOM 树更新之前调用
         * 1. 可以在DOM更新之前访问DOM的状态;
         * 2. 服务器端渲染期间不会被调用。
         */
        onBeforeUpdate(() => {
            console.log("生命周期：onBeforeUpdate")
        })

        /**
         * onBeforeUnmount：组件实例被卸载之前调用。
         * 1. 暂时没想到应用场景；
         * 2. 服务器端渲染期间不会被调用。
         */
        onBeforeUnmount(() => {
            console.log("生命周期：onBeforeUnmount")
        })

        // 被 <KeepAlive> 包裹的缓存组件 钩子
        /**
         * onActivated:调用时机为首次挂载，以及每次从缓存中被重新激活时
         * 1. 不仅适用于 <KeepAlive> 缓存的根组件，也适用于缓存树中的后代组件
         * 2. 服务器端渲染期间不会被调用。
         */
        onActivated(() => {
            console.log("缓存组件钩子：onActivated")
        })

        /**
         * onDeactivated：在从 DOM 上移除、进入缓存，以及组件卸载时调用
         * 1. 不仅适用于 <KeepAlive> 缓存的根组件，也适用于缓存树中的后代组件
         * 2. 服务器端渲染期间不会被调用。
         */
        onDeactivated(() => {
            console.log("缓存组件钩子：onBeforeMount")
        })

        // 服务端渲染（SSR） 钩子
        /**
         * onServerPrefetch:组件实例在服务器上被渲染之前调用。
         */
        onServerPrefetch(() => {
            console.log("生命周期：onBeforeMount")
        })

        // 其他钩子函数
        onErrorCaptured(() => { })
        onRenderTracked(() => { })
        onRenderTriggered(() => { })


        // 返回值会暴露给模板和其他的选项式 API 钩子
        return {
            count,
            formatCount,
            increment
        }
        // 也可以返回渲染函数，但是返回渲染函数会阻止返回其他东西
        // return () => h('div', [h('h1', '组合式API 渲染函数'), h('p', count.value), h('button', { onClick: increment }, 'count + 1')])

    }
}
</script>