<template>
  <div class="article-page">
    <!-- 阅读进度条 -->
    <div class="progress-bar" :style="{ width: readingProgress + '%' }"></div>
    
    <!-- 内容区域包装器 -->
    <div class="content-wrapper">
      <!-- 主要内容区域 -->
      <div class="article-main">
        <article-header 
          :article="article" 
          @like="handleLike" 
          :is-liked="isLiked"
        />
        
        <article-content 
          :article="article" 
          ref="contentRef"
        />
        
        <article-comments 
          :article-id="article.id"
          ref="commentsRef"
        />
        
        <div class="article-footer">
          <el-button type="primary" @click="goBack" class="back-button">
            <el-icon><Back /></el-icon> 返回
          </el-button>
        </div>
      </div>
      
      <!-- 右侧目录 -->
      <article-toc 
        :content-ref="contentRef"
        @scroll-to="scrollToHeading"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Back } from '@element-plus/icons-vue'
import ArticleHeader from './article/ArticleHeader.vue'
import ArticleContent from './article/ArticleContent.vue'
import ArticleComments from './article/ArticleComments.vue'
import ArticleToc from './article/ArticleToc.vue'
import { articlesData } from '@/data/articles.js'

const route = useRoute()
const router = useRouter()
const article = ref({})
const contentRef = ref(null)
const commentsRef = ref(null)
const readingProgress = ref(0)
const isLiked = ref(false)

// 计算阅读进度
const handleScroll = () => {
  const docElement = document.documentElement
  const totalHeight = docElement.scrollHeight - docElement.clientHeight
  const scrollPosition = window.scrollY
  readingProgress.value = (scrollPosition / totalHeight) * 100
}

// 处理点赞
const handleLike = () => {
  if (!isLiked.value) {
    article.value.likes++
    isLiked.value = true
  } else {
    article.value.likes--
    isLiked.value = false
  }
}

// 滚动到指定标题
const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  const articleId = route.params.id
  
  // 获取文章数据
  article.value = articlesData[articleId] || { 
    title: '文章不存在', 
    content: '抱歉，您请求的文章不存在。' 
  }
  
  // 添加滚动监听
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  // 移除滚动监听
  window.removeEventListener('scroll', handleScroll)
})

const goBack = () => {
  router.back()
}
</script>

<style scoped>
.article-page {
  position: relative;
  padding-top: 4px;
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background-color: #42b983;
  z-index: 1000;
  transition: width 0.2s;
}

.content-wrapper {
  display: flex;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 40px;
}

.article-main {
  flex: 1;
  min-width: 0;
}

.article-footer {
  margin-top: 40px;
  text-align: center;
}

.back-button {
  padding: 10px 20px;
}

@media (max-width: 1200px) {
  .content-wrapper {
    flex-direction: column;
  }
}
</style>