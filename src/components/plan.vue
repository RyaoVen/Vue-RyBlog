<script setup>
import PlanStudyCard from "@/components/plan-study-card.vue";

const date = [
  {
    name: "Blog",
    content: "一个搭载了完整前后端前后台的博客项目，Vue3试手作。一个搭载了完整前后端前后台的博客项目，Vue3试手作。一个搭载了完整前后端前后台的博客项目，Vue3试手作。一个搭载了完整前后端前后台的博客项目，Vue3试手作。",
    progress: "50",
    id: 1
  },
  {
    name: "RyTools",
    content: "一个集成化的小工具包，集成了即时通讯，文件传输，私有云音乐部署与播放与笔记记录功能，便于团队协作。前端由Vue3+Election实现功能，后端使用JAVASpringBoot开发，前后台功能完整，支持web端访问。",
    progress: "1",
    id: 2
  },
  {
    name: "RyDiet",
    content: "一个移动端帮助你减肥的小软件，能够通过记录你的每一点摄入和运动精确反映热量是在积累还是在减少。离线脱机项目，Flutter试手作。",
    progress: "1",
    id: 3
  }
];
</script>

<template>
  <div class="outer-container">
    <h1>Plan</h1>
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