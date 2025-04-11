<script setup>
import passageImg from './img/Passage_img.jpg';
import { ChatDotRound, Share, Star, ZoomIn } from "@element-plus/icons-vue";
import { ref, onMounted } from 'vue';

const visibleItems = ref([]);
const dialogVisible = ref(false);
const currentImage = ref('');

const showNextItem = (items, index = 0) => {
  if (index < items.length) {
    visibleItems.value.push(items[index]);
    setTimeout(() => showNextItem(items, index + 1), 200);
  }
};

const previewImage = (imgUrl) => {
  currentImage.value = imgUrl;
  dialogVisible.value = true;
};

const items = Array.from({ length: 6 }, (_, index) => ({
  index: index,
  title: `测试标题${index + 1}`,
  content: `测试内容${index + 1}时间的脚步终究还是没有停留，恍惚之间，已经二十岁了。 而这二十年又被分为了两个阶段，一半在低头赶路，诉说着寒窗苦读立志出乡关的故事，一半在仰望未及的星空，在人潮中不断叩问自己的想法，是否坚持求索。从走出家乡去汇入人海，在每个夜晚思索意义，或许是我第二阶段的主旋律了。 人们总歌颂人生的伟大价值，热烈而富有激情，而对我来说生活是一个连续的路径，在某个特定的节点又有了新的矢量，于是累加成了未来，让自己的`,
  img: passageImg,
  id: index,
  numberOfComments: (index + 1),
  Likes: (index + 1)
}));

onMounted(() => {
  showNextItem(items);
});
</script>

<template>
  <ul class="log-list">
    <li v-for="item in visibleItems" :key="item.id" class="log-item">
      <div class="passage-card">
        <div class="passage-content">
          <div class="passage-title">
            <h1>{{ item.title }}</h1>
          </div>
          <div class="passage-content-text">
            <p>{{ item.content }}</p>
          </div>
        </div>
        <div class="passage-img" @click="previewImage(item.img)">
          <img :src="item.img" alt="">
          <div class="image-overlay">
            <el-icon class="preview-icon"><ZoomIn /></el-icon>
          </div>
        </div>
        <div class="bottom">
          <div class="btn">
            <el-button round>
              <el-icon><ChatDotRound /></el-icon>
              <el-text class="mx-1">{{ item.numberOfComments }}</el-text>
            </el-button>
            <el-button round>
              <el-icon><Star /></el-icon>
              <el-text class="mx-1">{{ item.Likes }}</el-text>
            </el-button>
            <el-button round>
              <el-icon><Share /></el-icon>
              <el-text class="mx-1">{{ item.numberOfComments }}</el-text>
            </el-button>
          </div>
          <div class="go">
            <el-button type="primary" plain>查看详情</el-button>
          </div>
        </div>
      </div>
    </li>
  </ul>

  <el-dialog v-model="dialogVisible" width="80%" :show-close="true">
    <div class="image-preview">
      <img :src="currentImage" alt="预览图">
    </div>
  </el-dialog>
</template>

<style scoped>
.log-list {
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
}

.log-item {
  list-style-type: none;
  margin-bottom: 20px;
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

.passage-card {
  width: min(700px, 90vw);
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.passage-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.passage-title h1 {
  margin: 0 0 16px 0;
  font-size: 1.5rem;
  color: #2c3e50;
}

.passage-content-text {
  margin-bottom: 16px;
}

.passage-content-text p {
  color: #666;
  line-height: 1.6;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.passage-img {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  margin-bottom: 16px;
}

.passage-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.passage-img:hover img {
  transform: scale(1.05);
}

.passage-img:hover .image-overlay {
  opacity: 1;
}

.preview-icon {
  color: white;
  font-size: 24px;
}

.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.btn {
  display: flex;
  gap: 8px;
}

.btn .el-button {
  padding: 8px 16px;
}

.image-preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-preview img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

:deep(.el-dialog) {
  border-radius: 12px;
  overflow: hidden;
}

:deep(.el-button) {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>