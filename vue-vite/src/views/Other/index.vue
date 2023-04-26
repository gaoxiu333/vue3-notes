<template>
    鼠标位置X:{{ x }};Y:{{ y }}
</template>
<script lang="ts" setup>
import { useMouse } from '../../hooks/mouse';
const { x, y } = useMouse()

</script>