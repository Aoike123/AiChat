<template>
  <AppHeader />
  <AppMain />
  <AppNavbar />
</template>

<script>
import AppHeader from '@/components/AppHeader/index.vue'
import AppMain from '@/components/AppMain/index.vue';
import AppNavbar from '@/components/AppNavbar/index.vue';

export default {
  name: 'Layout',
  components: {
    AppHeader,
    AppMain,
    AppNavbar
  }
};
</script>

<style scoped>
/* 移除所有样式，因为已经移动到各个组件中 */
</style>