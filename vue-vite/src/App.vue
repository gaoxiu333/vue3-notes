<template>
  <compositionApi />
  <hr>
  <optionsApi />
  <hr>
  <BothApi />
  <hr>
  <ReactivityVue />
  <hr>
  <OtherVue />
  <hr>
  <ComponentVue />
</template>
<script setup lang="ts">
import compositionApi from './views/diffApi/CompositionApi.vue';
import optionsApi from './views/diffApi/OptionsApi.vue';
import BothApi from './views/diffApi/BothApi.vue';
import ReactivityVue from './views/Reactivity/index.vue'
import OtherVue from './views/Other/index.vue'
import ComponentVue from './views/components/index.vue'
</script>
<style scoped></style>
