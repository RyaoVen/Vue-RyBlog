<script setup>
import PlanStudyCard from "@/components/plan-study-card.vue";

const date = [
  {
    name: "Vue3",
    content: "Vue 是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。",
    progress: "80",
    id: 1
  },
  {
    name: "Flutter",
    content: "Flutter 是 Google 开源的应用开发框架，仅通过一套代码库，就能构建精美的、原生平台编译的多平台应用。",
    progress: "1",
    id: 2
  },
  {
    name: "Java+JavaSpring",
    content: "纯粹的面向对象语言，多用于后台服务端应用程序的开发，在市面上得到了广泛的运用，Spring框架为JAVA提供了一个更加便于维护与开发的环境。",
    progress: "25",
    id: 3
  }
];
</script>

<template>
  <div class="outer-container">
    <h1>Studying</h1>
    <ul>
      <li v-for="works in date" :key="works.id">
        <plan-study-card :name="works.name" :content="works.content" :progress="works.progress" class="card" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.outer-container {
  padding: 30px;
  border: 1px solid #ebeef5; /* el-border-color-light */
  border-radius: 4px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); /* el-box-shadow-light */
}

h1 {
  font-size: 1.6em;
  color: #303133; /* el-text-color-primary */
  margin: 0 0 20px 0;
  padding-left: 8px;
  border-left: 4px solid #409EFF; /* el-color-primary */
  line-height: 1.2;
}

ul {
  padding: 0;
  margin: 20px 0;
  display: grid;
  gap: 16px;
}

li {
  list-style: none;
  margin: 0;
  padding: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* el-transition */
}

li:hover {
  transform: translateY(-2px);
}

.card {
  transition:
      box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
  border: 1px solid #ebeef5;
}

li:hover .card {
  box-shadow: 0 3px 6px -1px rgba(0, 0, 0, 0.08),
  0 6px 12px 0 rgba(0, 0, 0, 0.04),
  0 4px 8px 0 rgba(0, 0, 0, 0.02);
  border-color: #c0c4cc; /* el-border-color-hover */
  transform: scale(1.008);
}
</style>