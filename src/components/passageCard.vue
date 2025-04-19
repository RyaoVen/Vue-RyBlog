<script setup>
// 引入图片
import passageImg from './img/Passage_img.jpg';
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import 'element-plus/dist/index.css';
import { MoreFilled, Share, Star, Collection } from '@element-plus/icons-vue'

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
    setTimeout(() => showNextItem(items, index + 1), 200);
  }
};

onMounted(async () => {
  // 模拟加载数据
  setTimeout(() => {
    const items = Array.from({ length: 10 }, (_, index) => ({
      index: index,
      title: `测试标题${index + 1}`,
      content: `测试内容${index + 1}，《脱离电网生活：城市居民家庭如何发现简单生活》讲述了一个鼓舞人心的故事，关于一个家庭从拉斯维加斯繁忙的城市生活过渡到脱离电网的乡村生活。面对停电和供水等问题，他们没有放弃，而是努力解决问题，适应新的生活方式。
这个故事让我们意识到自给自足和资源节约的重要性。在一个资源触手可及的世界里，他们的经历表明，简单生活并充分利用大自然的馈赠是有意义的。同时，这也给年轻一代传授了respect和保护环境的宝贵经验。他们的旅程不仅是地理位置上的迁移，更是向更可持续、更有意义生活的精神转变。`,
      img: passageImg,
      id: index,
      date:'2025/4/9/1:45'
    }));
    isLoading.value = false;
    showNextItem(items);
  }, 1000);
});
</script>

<template>
  <div class="passage-container">
    <div v-if="isLoading" class="loading-container">
      <div class="loading-content">
        <div class="loading-dot"></div>
        <p>加载中...</p>
      </div>
    </div>
    <ul v-else class="passage-list">
      <li v-for="item in visibleItems" :key="item.id" class="passage-item">
        <div class="img-wrapper">
          <img :src="item.img" alt="img">
        </div>
        <div class="content">
          <div class="content-header">
            <h1>{{ item.title }}</h1>
            <el-dropdown @command="(command) => handleCommand(command, item)" trigger="click">
              <div class="more-btn">
                <el-icon><MoreFilled /></el-icon>
              </div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="share">
                    <el-icon><Share /></el-icon>转发
                  </el-dropdown-item>
                  <el-dropdown-item command="like">
                    <el-icon><Star /></el-icon>点赞
                  </el-dropdown-item>
                  <el-dropdown-item command="collect">
                    <el-icon><Collection /></el-icon>收藏
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <p>{{ item.content }}</p>
          <span>落笔于：{{item.date}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.passage-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.loading-content {
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;
  text-align: center;
}

.loading-dot {
  width: 12px;
  height: 12px;
  background-color: #3498db;
  border-radius: 50%;
  margin: 0 auto 15px;
  animation: pulse 1.5s ease infinite;
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

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0.5;
  }
}

.passage-list {
  padding: 0;
  list-style: none;
}

.passage-item {
  margin: 20px 0;
  transition: all 0.35s ease;
  display: flex;
  justify-content: space-between;
  height: 200px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
  animation: slideIn 0.6s ease forwards;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.img-wrapper {
  flex: 0 0 300px;
  overflow: hidden;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.passage-item:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

.passage-item:hover img {
  transform: scale(1.05);
}

.content {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
}

.more-btn {
  padding: 8px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.more-btn:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

:deep(.el-dropdown-menu__item) {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
}

:deep(.el-icon) {
  font-size: 16px;
}

h1 {
  margin: 0;
  font-size: 1.5rem;
  color: #2c3e50;
  position: relative;
  display: inline-block;
  padding-bottom: 5px;
  cursor: pointer;
}

h1::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: #3498db;
  transition: width 0.3s ease;
}

.passage-item:hover h1::before {
  width: 100%;
}

p {
  margin: 0;
  color: #666;
  font-size: 15px;
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  letter-spacing: 1px;
  word-break: break-all; /* 确保在单词中间换行 */
  white-space: normal; /* 允许自动换行 */
}

span {
  margin-top: 15px;
  font-size: 14px;
  color: #999;
  align-self: flex-end;
}
</style>