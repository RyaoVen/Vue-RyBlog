<script setup>
import '../components/tx.vue'
import Tx from "@/components/tx.vue";
import {
  Search,Sunny
} from '@element-plus/icons-vue'
import SelfCard from "@/components/selfCard.vue";
import ListViews from "@/components/list-views.vue";
import MyFeel from "@/components/my-feel.vue";
import MainViews from "@/page/mainViews.vue";
import {useRouter, useRoute} from 'vue-router'
import { ref, onMounted, watch } from 'vue'

const router = useRouter()
const route = useRoute()
const isPageLoaded = ref(false)
const currentPath = ref('')
const searchDialogVisible = ref(false)
const searchQuery = ref('')
const searchResults = ref([])

// 监听路由变化
watch(() => route.path, (newPath) => {
  currentPath.value = newPath
}, { immediate: true })

onMounted(() => {
  setTimeout(() => {
    isPageLoaded.value = true
  }, 100)
})

// 打开搜索对话框
const openSearchDialog = () => {
  searchDialogVisible.value = true
  searchQuery.value = ''
  searchResults.value = []
}

// 执行搜索
const performSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  // 模拟搜索结果
  searchResults.value = [
    { id: 1, title: '搜索结果1', type: '文章' },
    { id: 2, title: '搜索结果2', type: '手记' },
    { id: 3, title: '搜索结果3', type: '项目' },
  ]
}

// 关闭搜索对话框
const closeSearchDialog = () => {
  searchDialogVisible.value = false
  searchQuery.value = ''
  searchResults.value = []
}

// 处理搜索结果点击
const handleResultClick = (result) => {
  // 根据结果类型跳转到不同页面
  switch(result.type) {
    case '文章':
      router.push('/passage')
      break
    case '手记':
      router.push('/selfLog')
      break
    case '项目':
      router.push('/myWork')
      break
  }
  closeSearchDialog()
}

async function goHome(){
  currentPath.value = ''
  await router.push('/home')
}

async function goPassage(){
  currentPath.value = ''
  await router.push('/passage')
}

async function goSelfLog(){
  currentPath.value = ''
  await router.push('/selfLog')
}

async function goArchive(){
  currentPath.value = ''
  await router.push('/archive')
}

async function goMyWork(){
  currentPath.value = ''
  await router.push('/myWork')
}

async function goMyTools(){
  currentPath.value = ''
  await router.push('/myTools')
}

async function goMyself(){
  currentPath.value = ''
  await router.push('/myself')
}

// 添加路由守卫
router.beforeEach((to, from, next) => {
  currentPath.value = ''
  next()
})

router.afterEach((to) => {
  nextTick(() => {
    currentPath.value = to.name
  })
})
</script>

<template>
  <div class="page-container" :class="{ 'page-loaded': isPageLoaded }">
    <header class="flex-header">
      <!-- 左侧元素 -->
      <div class="tx">
        <tx />
      </div>

    <!-- 中间按钮组 -->
    <div class="btn-group">
      <el-space :size="16">
        <el-button @click="goHome"><el-text class="mx-1">主页</el-text></el-button>
        <el-button @click="goPassage"><el-text class="mx-1">文章</el-text></el-button>
        <el-button @click="goSelfLog"><el-text class="mx-1">手记</el-text></el-button>
        <el-button @click="goArchive"><el-text class="mx-1">归档</el-text></el-button>
        <el-dropdown placement="bottom">
          <el-button> <el-text class="mx-1">更多</el-text> </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="goMyself">关于我</el-dropdown-item>
              <el-dropdown-item @click="goMyWork">我的项目</el-dropdown-item>
              <el-dropdown-item @click="goMyTools">小工具</el-dropdown-item>
              <el-dropdown-item>个人笔记</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-space>
    </div>

      <!-- 右侧搜索 -->
      <div class="search-box">
        <el-button :icon="Sunny" circle />
        <el-button :icon="Search" circle @click="openSearchDialog" />
      </div>
    </header>

    <main>
      <Suspense>
        <template #default>
          <RouterView v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <keep-alive>
                <component
                  :is="Component"
                  :key="currentPath"
                  v-if="currentPath"
                />
              </keep-alive>
            </transition>
          </RouterView>
        </template>
        <template #fallback>
          <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>加载中...</p>
          </div>
        </template>
      </Suspense>
    </main>

    <footer>
      <div class="footer-content">
        <div class="copyright">
          © {{ new Date().getFullYear() }} 个人博客. All Rights Reserved.
        </div>
        <div class="footer-links">
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">备案号</a>
          <a href="/backstage">后台</a>
          <span class="divider">|</span>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>

    <!-- 搜索对话框 -->
    <el-dialog
      v-model="searchDialogVisible"
      title="搜索"
      width="500px"
      :close-on-click-modal="false"
      @close="closeSearchDialog"
    >
      <div class="search-container">
        <el-input
          v-model="searchQuery"
          placeholder="请输入搜索内容"
          clearable
          @keyup.enter="performSearch"
        >
          <template #append>
            <el-button :icon="Search" @click="performSearch">搜索</el-button>
          </template>
        </el-input>

        <div class="search-results" v-if="searchResults.length > 0">
          <div
            v-for="result in searchResults"
            :key="result.id"
            class="search-result-item"
            @click="handleResultClick(result)"
          >
            <div class="result-title">{{ result.title }}</div>
            <div class="result-type">{{ result.type }}</div>
          </div>
        </div>

        <div class="no-results" v-else-if="searchQuery && !searchResults.length">
          没有找到相关结果
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style scoped>
.page-container {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.page-loaded {
  opacity: 1;
  transform: translateY(0);
}

.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* 路由切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

header {
  width: 100%;
  height: 60px;
  background-color: #fbfbf9;
  /* 新增以下属性 */
  flex-shrink: 0; /* 禁止 header 被压缩 */
  position: relative; /* 确保层级 */
  z-index: 1; /* 避免被其他元素覆盖 */
  display: flex;
  justify-content: center;
  align-items: center;
}
main {
  width: 100%;
  height: max(calc(100vh - 160px),auto);
  min-height: 110vh;
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
footer {
  width: 100%;
  height: 100px;
  background-color: #f0f6fd;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-header {
  display: flex;
  justify-content: space-between; /* 三列布局 */
  align-items: center;
  width: 100%;
}

/* 中间按钮组自动填充剩余空间 */
.btn-group {
  margin:  auto; /* 居中关键代码 */
}

/* 右侧搜索图标自适应 */
.search-box {
  margin-left: 10px; /* 强制右对齐 */
  margin-right: 10px;
}
.tx{
  margin-left: 10px;
}

.search-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.search-results {
  max-height: 300px;
  overflow-y: auto;
}

.search-result-item {
  padding: 12px;
  border-radius: 8px;
  background-color: #f5f7fa;
  margin-bottom: 8px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-result-item:hover {
  background-color: #e4e7ed;
  transform: translateY(-2px);
}

.result-title {
  font-weight: 500;
  color: #303133;
}

.result-type {
  font-size: 12px;
  color: #909399;
  background-color: #ecf5ff;
  padding: 2px 8px;
  border-radius: 4px;
}

.no-results {
  text-align: center;
  color: #909399;
  padding: 20px 0;
}

:deep(.el-dialog__body) {
  padding-top: 20px;
}

.footer-content {
  text-align: center;
  color: #666;
  font-size: 14px;
}

.copyright {
  margin-bottom: 8px;
}

.footer-links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}

.footer-links a {
  color: #666;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #409EFF;
}

.divider {
  color: #999;
}
</style>