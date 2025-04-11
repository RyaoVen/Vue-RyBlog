<script setup>

import SelfLogCard from "@/components/selfLogCard.vue";
</script>

<template>
<div class="content">
<div class="title">
  <h1>手记</h1>
</div>
  <self-log-card class="card" />
</div>
</template>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
h1 {
  position: relative; /* 创建定位上下文 */
  font-size: 2rem;
  color: #2c3e50;
  /* 可选：确保背景透明，避免遮挡伪元素 */
  background: transparent;
  text-align: center;
  text-shadow: 0 0 25px rgba(128, 128, 128, 0.45);
}

.card{
  padding: 25px;
}
.title{
  padding: 10px;
  margin: 10px;
}
</style>