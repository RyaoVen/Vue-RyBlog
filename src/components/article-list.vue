<template>
  <div class="article-list">
    <div class="list-header">
      <h2 class="list-title">{{ title }}</h2>
      <div class="list-filters">
        <el-select v-model="selectedCategory" placeholder="选择分类" clearable>
          <el-option
            v-for="category in categories"
            :key="category"
            :label="category"
            :value="category"
          />
        </el-select>
        <el-input
          v-model="searchQuery"
          placeholder="搜索文章"
          prefix-icon="Search"
          clearable
        />
      </div>
    </div>

    <div class="articles-grid">
      <article-card
        v-for="article in filteredArticles"
        :key="article.id"
        :article="article"
      />
    </div>

    <div class="pagination">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="totalArticles"
        :page-sizes="[6, 12, 24, 36]"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ArticleCard from './article-card.vue'
import { Search } from '@element-plus/icons-vue'

const props = defineProps({
  title: {
    type: String,
    default: '文章列表'
  },
  articles: {
    type: Array,
    default: () => []
  }
})

// 分页相关
const currentPage = ref(1)
const pageSize = ref(6)
const totalArticles = computed(() => props.articles.length)

// 分类和搜索
const selectedCategory = ref('')
const searchQuery = ref('')
const categories = computed(() => {
  const cats = new Set(props.articles.map(article => article.category))
  return Array.from(cats)
})

// 过滤文章
const filteredArticles = computed(() => {
  let result = props.articles

  // 分类过滤
  if (selectedCategory.value) {
    result = result.filter(article => article.category === selectedCategory.value)
  }

  // 搜索过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.summary.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  // 分页
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return result.slice(start, end)
})

// 分页处理
const handleSizeChange = (val) => {
  pageSize.value = val
  currentPage.value = 1
}

const handleCurrentChange = (val) => {
  currentPage.value = val
}
</script>

<style scoped>
.article-list {
  padding: 20px;
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.list-title {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.list-filters {
  display: flex;
  gap: 15px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

@media screen and (max-width: 768px) {
  .list-header {
    flex-direction: column;
    gap: 15px;
  }

  .list-filters {
    width: 100%;
    flex-direction: column;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }
}
</style> 