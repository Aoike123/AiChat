<template>
  <div class="main">主内容</div>
</template>

<script setup>
import { ref } from 'vue';

const feature = ref();
</script>

<style scoped>
.main {
  position: absolute;
  top: 50px;
  left: 230px;
  padding: 10px;
  background-color: pink;
  width: 100%;
  height: 100%;
}
</style>
