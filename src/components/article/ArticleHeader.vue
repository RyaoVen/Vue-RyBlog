<template>
  <div class="article-header">
    <h1 class="title">{{ article.title }}</h1>
    
    <div class="meta">
      <div class="meta-item">
        <el-icon><Calendar /></el-icon>
        <span>{{ formatDate(article.date) }}</span>
      </div>
      
      <div class="meta-item">
        <el-icon><User /></el-icon>
        <span>{{ article.author }}</span>
      </div>
      
      <div class="meta-item">
        <el-icon><Collection /></el-icon>
        <span>{{ article.category }}</span>
      </div>
      
      <div class="meta-item">
        <el-icon><View /></el-icon>
        <span>{{ article.views }} 阅读</span>
      </div>
      
      <div class="meta-item">
        <el-icon><ChatDotRound /></el-icon>
        <span>{{ article.comments }} 评论</span>
      </div>
    </div>
    
    <div class="tags" v-if="article.tags && article.tags.length">
      <el-icon><PriceTag /></el-icon>
      <el-tag
        v-for="tag in article.tags"
        :key="tag"
        size="small"
        class="tag"
      >
        {{ tag }}
      </el-tag>
    </div>
  </div>
</template>

<script setup>
import { Calendar, User, Collection, PriceTag, View, ChatDotRound } from '@element-plus/icons-vue'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
.article-header {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.title {
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 20px;
}

.meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 15px;
  color: #666;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}

.tags {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
}

.tag {
  margin-right: 8px;
}

.el-icon {
  font-size: 16px;
}
</style>