<template>
    <h1>响应式原理</h1>
    <p>{{ obj.count }}</p>
    <p>{{ countObj.count }}</p>
    <button @click="handleCount()">click</button>
</template>
<script setup lang="ts">
import { reactive, ref, toRaw } from 'vue';
const count = ref(1) // ref 定义基础类型:实现原理还是基于defineProperty（源码用的是class的get和set）
const countObj = ref({ count: 0 }) // ref 定义对象：对象基于 proxy 实现劫持和依赖收集
console.log(count, countObj)
const obj = reactive({ count }) // reactive 定义
countObj.value.count
const handleCount = () => {
    // obj.count++
    countObj.value.count++
    count.value++
}
// 将一个 ref 赋值给为一个 reactive 属性
// 如果是属性，会自动解包，如果是数组或者map不会被解包
const objRef = reactive({ count })
const books = reactive([count])
const map = reactive(new Map([['count', count]]))
// 解包
console.log('book原始对象', { booksRaw: toRaw(books), books })
console.log(objRef.count === count.value)
console.log(books[0].value)// 不能自动解包，只能通过.value访问值。
</script>