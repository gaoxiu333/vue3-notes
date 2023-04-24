<template>
    <h1>组合式API + 选项式API</h1>
    <p>{{ count }}</p>
    <button @click="handleData">click 选项式</button>
    <button @click="handleClick">click 同名Fn</button>
</template>
<script lang="ts">
import { ref } from 'vue';
// 选项式和组合式变量名冲突：
// 变量名冲突时，看变量声明的顺序，后面的变量会覆盖前面的变量；
// 但是data属性比较特殊，只能放在最前面，所以data属性中的变量都会setup中声明的变量覆盖
export default {
    data() {
        return {
            count: 0
        }
    },
    setup() {
        const count = ref(1)
        const handleClick = () => {
            count.value++
        }
        return {
            count,
            handleClick
        }
    },
    methods: {
        handleClick() {
            this.count--
        },
        handleData() {
            this.count--
        }
    },

}
</script>