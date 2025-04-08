<template>
  <div class="top">
    <img src="../components/img/index-top-img.png" alt="tx">
    <self-card />
  </div>
  <my-feel/>
  <div class="list">
    <list-views title="最近文章"/>
    <list-views title="我的手记"/>
  </div>


</template>

<script setup>
import { ref } from 'vue'
import SelfCard from '../components/selfCard.vue'
import MyFeel from '../components/my-feel.vue'
import ListView from '../components/list-views.vue'
import ListViews from "@/components/list-views.vue";

// 可配置数据
const articles = ref([/* 文章数据 */])
const notes = ref([/* 手记数据 */])
</script>

<style scoped>
.top{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: max(100px , 12vw);
  margin-top: 150px;
  margin-bottom: 150px;
}
.list{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: max( 100px , 9vw );
  margin-top: 230px;
  margin-bottom: 150px;
}
body {
  width: 100%;
  height: auto;
  min-height: calc(100vh - 160px);
  background-color: rgba(255, 255, 255, 0.83);
  /* 新增以下属性 */
  flex-shrink: 0; /* 禁止 header 被压缩 */
  position: relative; /* 确保层级 */
  z-index: 1; /* 避免被其他元素覆盖 */
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

}
img {
  width: 400px;
  height: 400px;
}
</style>