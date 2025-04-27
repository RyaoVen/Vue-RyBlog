<template>
  <el-card class="article-card" shadow="hover">
    <div class="article-header">
      <div class="article-meta">
        <span class="article-date">{{ formatDate(article.date) }}</span>
        <el-tag size="small" :type="getTagType(article.category)">{{ article.category }}</el-tag>
      </div>
      <h2 class="article-title" @click="viewArticle">{{ article.title }}</h2>
    </div>
    
    <div class="article-content">
      <p class="article-summary">{{ article.summary }}</p>
      <div class="article-cover" v-if="article.cover">
        <img :src="article.cover" :alt="article.title">
      </div>
    </div>
    
    <div class="article-footer">
      <div class="article-tags">
        <el-tag
          v-for="tag in article.tags"
          :key="tag"
          size="small"
          effect="plain"
          class="tag"
        >
          {{ tag }}
        </el-tag>
      </div>
      <div class="article-stats">
        <span class="stat">
          <el-icon><View /></el-icon>
          {{ article.views }}
        </span>
        <span class="stat">
          <el-icon><ChatDotRound /></el-icon>
          {{ article.comments }}
        </span>
        <span class="stat">
          <el-icon><Star /></el-icon>
          {{ article.likes }}
        </span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { View, ChatDotRound, Star } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  article: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      title: '文章标题',
      summary: '文章摘要',
      content: '文章内容',
      date: new Date(),
      category: '技术',
      tags: ['Vue', 'JavaScript'],
      views: 0,
      comments: 0,
      likes: 0,
      cover: ''
    })
  }
})

const router = useRouter()

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getTagType = (category) => {
  const types = {
    '技术': 'primary',
    '生活': 'success',
    '随笔': 'warning',
    '项目': 'danger'
  }
  return types[category] || 'info'
}

const viewArticle = () => {
  router.push(`/article/${props.article.id}`)
}
</script>

<style scoped>
.article-card {
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-header {
  margin-bottom: 15px;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.article-date {
  color: #666;
  font-size: 14px;
}

.article-title {
  margin: 0;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  transition: color 0.3s;
}

.article-title:hover {
  color: #409EFF;
}

.article-content {
  margin-bottom: 15px;
}

.article-summary {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.article-cover {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;
}

.article-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.article-cover img:hover {
  transform: scale(1.05);
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}

.article-tags {
  display: flex;
  gap: 8px;
}

.tag {
  cursor: pointer;
}

.article-stats {
  display: flex;
  gap: 15px;
}

.stat {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 14px;
}

.stat .el-icon {
  font-size: 16px;
}
</style> 