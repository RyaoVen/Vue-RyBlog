<script setup>

import PassageCard from "@/components/passageCard.vue";
</script>

<template>
<div class="passage">
  <h1>文章</h1>
<passage-card />
  <el-text class="mx-1"> 没有更多了qwq</el-text>
</div>
</template>

<style scoped>
h1 {
  position: relative; /* 创建定位上下文 */
  font-size: 2rem;
  color: #2c3e50;
  /* 可选：确保背景透明，避免遮挡伪元素 */
  background: transparent;
  text-align: center;
  text-shadow: 0 0 25px rgba(128, 128, 128, 0.45);
}
.passage{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mx-1{
  margin: 0.8rem;
}
</style>