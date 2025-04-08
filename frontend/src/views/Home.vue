<script setup lang="ts">
// 1. 导入路由
import { useRouter } from "vue-router";
const router = useRouter();

const hanldClickStart = () => {
  console.log("诶呀诶呀，我被点啦");
  router.push("/Layout");
}
</script>

<template>
  <div class="home_page">
    <div class="content">
      <p class="start_title">开始您的大模型探索之旅</p>
      <button class="start_button" @click="hanldClickStart">由此启程</button>
    </div>
  </div>
</template>

<style scoped>
.home_page {
  height: 100vh;
  background: #f0f2f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

/* 内容居中显示 */
.content {
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

/* logo 样式 */
.logo {
  width: 150px;
  margin-bottom: 20px;
}

/* 入口按钮样式 */
.enter-button {
  padding: 10px 30px;
  font-size: 18px;
  background: #409EFF;
  color: #fff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s, transform 0.3s;
}

/* 鼠标悬停时的效果 */
.enter-button:hover {
  background: #66b1ff;
  transform: scale(1.05);
}

/* 淡入动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
