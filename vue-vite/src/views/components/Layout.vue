<template>
    <!-- <h1>Layout</h1> -->
    <HeaderVue>
        <small class="logo" @click="handleClick">Logo</small>
    </HeaderVue>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import HeaderVue from './Header.vue';
const theme = reactive({
    color:'red'
})
const handleClick = ()=>{
    theme.color = 'blue'
}
</script>
<style>
.logo{
    color:v-bind('theme.color')
}
</style>