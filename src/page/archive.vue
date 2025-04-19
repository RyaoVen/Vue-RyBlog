<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage, ElLoading } from 'element-plus';
import { Share, Star, Collection, Right } from '@element-plus/icons-vue';

const isLoading = ref(true);
const listTitle = ref([]);
const visibleItems = ref([]);

const handleCommand = (command, item) => {
  switch (command) {
    case 'share':
      ElMessage.success(`已转发文章：${item.title}`);
      break;
    case 'like':
      ElMessage.success('点赞成功');
      break;
    case 'collect':
      ElMessage.success('收藏成功');
      break;
  }
};

const showNextItem = (items, index = 0) => {
  if (index < items.length) {
    visibleItems.value.push(items[index]);
    setTimeout(() => showNextItem(items, index + 1), 350);
  }
};

onMounted(async () => {
  // 删除这行：const loadingInstance = ElLoading.service({
  // 删除这行：  lock: true,
  // 删除这行：  text: '正在加载归档数据...',
  // 删除这行：  background: 'rgba(0, 0, 0, 0.7)',
  // 删除这行：});
  
  setTimeout(() => {
    listTitle.value = Array.from({ length: 5 }, (_, index) => ({
      year: index + 2020,
      months: Array.from({ length: 12 }, (_, monthIndex) => ({
        month: monthIndex + 1,
        articles: Array.from({ length: 3 }, (_, articleIndex) => ({
          title: `测试标题 ${monthIndex + 1}-${articleIndex + 1}`,
          content: `测试内容 ${monthIndex + 1}-${articleIndex + 1}`,
          date: `${index + 2020}/${monthIndex + 1}/${articleIndex + 1}`,
          id: `${index}-${monthIndex}-${articleIndex}`
        }))
      }))
    }));
    
    isLoading.value = false;
    // 删除这行：loadingInstance.close();
    showNextItem(listTitle.value);
  }, 100);
});

// 修改排序功能
const sortOrder = ref('desc');

const toggleSortOrder = () => {
  sortOrder.value = sortOrder.value === 'desc' ? 'asc' : 'desc';
  // 重新生成数据以保持排序一致性
  listTitle.value = Array.from({ length: 5 }, (_, index) => ({
    year: sortOrder.value === 'desc' ? 2024 - index : 2020 + index,
    months: Array.from({ length: 12 }, (_, monthIndex) => ({
      month: monthIndex + 1,
      articles: Array.from({ length: 3 }, (_, articleIndex) => ({
        title: `测试标题 ${monthIndex + 1}-${articleIndex + 1}`,
        content: `测试内容 ${monthIndex + 1}-${articleIndex + 1}`,
        date: `${index + 2020}/${monthIndex + 1}/${articleIndex + 1}`,
        id: `${index}-${monthIndex}-${articleIndex}`
      }))
    }))
  }));
};
</script>

<template>
  <div class="archive-container">
    <div class="header-row">
      <h1 class="archive-title">归档</h1>
      <el-tooltip 
        effect="dark" 
        :content="sortOrder === 'desc' ? '当前: 最新优先' : '当前: 最早优先'" 
        placement="left"
      >
        <el-button 
          @click="toggleSortOrder" 
          size="small" 
          :icon="sortOrder === 'desc' ? 'SortDown' : 'SortUp'"
          circle
        />
      </el-tooltip>
    </div>
    
    <div v-for="yearItem in visibleItems" :key="yearItem.year" class="year-section">
      <h2 class="year-title">#{{ yearItem.year }}年</h2>
      
      <div v-for="monthItem in yearItem.months" :key="monthItem.month" class="month-section">
        <h3 class="month-title">{{ monthItem.month }}月</h3>
        
        <div class="article-list">
          <div 
            v-for="(article, index) in monthItem.articles" 
            :key="article.id" 
            class="article-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <span class="article-title">{{ article.title }}</span>
            <el-icon class="icon"><Right /></el-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.archive-title {
  margin-bottom: 0; /* 移除原来的下边距 */
}

.archive-container {
  width: min(65vw,800px);  /* 增加最大宽度 */
  margin: 0 auto;
  padding: 30px;  /* 增加内边距 */
}

.article-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 25px;  /* 增加上下和左右内边距 */
  margin: 0 -15px;  /* 让内容扩展到容器边缘 */
  border-bottom: 1px solid var(--el-border-color-lighter);
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.article-title {
  font-size: 1.1rem;  /* 稍微增大字体 */
  padding-right: 20px;  /* 标题和图标之间增加间距 */

}

.article-item:hover {
  background-color: var(--el-color-primary-light-9);
  cursor: pointer;
}

.icon {
  transform: rotate(0);
  transition: transform 0.3s ease;
}

.article-item:hover .icon {
  transform: rotate(90deg);
}

/* 保留原有的年份和月份标题样式 */
.year-title, .month-title {

  color: var(--el-text-color-regular);
  margin: 10px 0;
}
.month-title{
  font-size: 1.2rem;
  color: #1d9fe3;
}
.year-title {
  font-size: 1.4rem;
  color: #07a2d6;
}
</style>