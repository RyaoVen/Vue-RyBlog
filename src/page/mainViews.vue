<template>
  <div class="top">
    <img src="../components/img/index-top-img.png" alt="tx">
    <self-card />
  </div>
  <my-feel/>
  <div class="list">
    <list-views title="最近文章" :items="articles" @item-click="navigateToArticle"/>
    <list-views title="我的手记" :items="notes" @item-click="navigateToNote"/>
  </div>
  <friend-links />
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SelfCard from '../components/selfCard.vue'
import MyFeel from '../components/my-feel.vue'
import ListViews from "@/components/list-views.vue"
import FriendLinks from "@/components/friend-links.vue"

const router = useRouter()

// 可配置数据
const articles = ref([
  { id: 1, title: 'Vue3 组合式API详解', date: '2023-10-15', summary: 'Vue3的组合式API提供了更灵活的代码组织方式...' },
  { id: 2, title: 'Vite构建工具使用指南', date: '2023-10-10', summary: 'Vite是一个现代前端构建工具，它显著提升了开发体验...' },
  { id: 3, title: '关于RyBlog', date: '2025-06-09', summary: '关于RyBlog和RyaoVen的一些介绍' },
  { id: 4, title: '前端性能优化策略', date: '2023-09-28', summary: '本文总结了提升前端应用性能的多种实用技巧...' }
])

const notes = ref([
  { id: 101, title: '学习TypeScript的心得', date: '2023-10-12', summary: '记录了我在学习TypeScript过程中的一些思考和经验...' },
  { id: 102, title: '前端工程化实践', date: '2023-10-08', summary: '分享我在项目中实施前端工程化的一些做法和收获...' },
  { id: 103, title: 'React vs Vue比较', date: '2023-09-30', summary: '从多个角度对比这两个流行的前端框架，帮助选择合适的技术栈...' }
])

// 导航函数
const navigateToArticle = (item) => {
  router.push({
    path: `/article/${item.id}`,
    query: { title: item.title }
  })
}

const navigateToNote = (item) => {
  router.push({
    path: `/note/${item.id}`,
    query: { title: item.title }
  })
}
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