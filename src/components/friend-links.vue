<template>
  <div class="friend-links-container">
    <div class="title">友情链接</div>
    <div class="carousel-container">
      <el-carousel :interval="4000" height="300px">
        <el-carousel-item v-for="(group, index) in linkGroups" :key="index">
          <div class="links-group">
            <div v-for="link in group" :key="link.id" class="link-card">
              <el-card shadow="always" class="card">
                <div class="top">
                  <img :src="link.avatar" class="avatar">
                  <article>
                    <p class="name">{{ link.name }}</p>
                    <p class="content">{{ link.description }}</p>
                  </article>
                </div>
                <div class="main">
                  <p>{{ link.description }}</p>
                </div>
                <div class="btn">
                  <el-tooltip
                    class="box-item"
                    effect="light"
                    :content="'访问 ' + link.name"
                    placement="bottom"
                  >
                    <el-button type="primary" :icon="Link" plain @click="visitLink(link.url)">
                      访问网站
                    </el-button>
                  </el-tooltip>
                </div>
              </el-card>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Link } from '@element-plus/icons-vue'

// 示例数据，实际使用时可以从API获取
const links = ref([
  {
    id: 1,
    name: '示例博客1',
    description: '这是一个示例博客描述',
    avatar: 'https://placeholder.com/150',
    url: 'https://example.com'
  },
  {
    id: 2,
    name: '示例博客2',
    description: '这是另一个示例博客描述',
    avatar: 'https://placeholder.com/150',
    url: 'https://example.com'
  },
  {
    id: 3,
    name: '示例博客3',
    description: '第三个示例博客描述',
    avatar: 'https://placeholder.com/150',
    url: 'https://example.com'
  },
  {
    id: 4,
    name: '示例博客4',
    description: '第四个示例博客描述',
    avatar: 'https://placeholder.com/150',
    url: 'https://example.com'
  },
  {
    id: 5,
    name: '示例博客5',
    description: '第五个示例博客描述',
    avatar: 'https://placeholder.com/150',
    url: 'https://example.com'
  },
  {
    id: 6,
    name: '示例博客6',
    description: '第六个示例博客描述',
    avatar: 'https://placeholder.com/150',
    url: 'https://example.com'
  },
  {
    id: 7,
    name: '示例博客7',
    description: '第七个示例博客描述',
    avatar: 'https://placeholder.com/150',
    url: 'https://example.com'
  },
  {
    id: 8,
    name: '示例博客8',
    description: '第八个示例博客描述',
    avatar: 'https://placeholder.com/150',
    url: 'https://example.com'
  }
])

// 将链接分组，每组显示4个
const linkGroups = ref([])
const groupSize = 4

for (let i = 0; i < links.value.length; i += groupSize) {
  linkGroups.value.push(links.value.slice(i, i + groupSize))
}

const visitLink = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.friend-links-container {
  width: 100%;
  padding: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
}

.carousel-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.links-group {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 100%;
  padding: 20px;
}

.link-card {
  width: 280px;
  height: 100%;
}

.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.top {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 15px;
  padding: 15px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.name {
  font-weight: 600;
  font-size: 16px;
  margin: 5px;
}

.content {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  margin: 5px;
}

.main {
  padding: 0 15px;
}

.main p {
  font-size: 14px;
  margin: 5px;
  color: #666;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-left: 10px;
  margin-right: 10px;
}

:deep(.el-carousel__item) {
  background-color: transparent;
}

:deep(.el-carousel__arrow) {
  background-color: rgba(31, 45, 61, 0.7);
}

:deep(.el-carousel__arrow:hover) {
  background-color: rgba(31, 45, 61, 0.9);
}

:deep(.el-carousel__container) {
  height: 100%;
}

:deep(.el-carousel__item) {
  height: 100%;
}

@media screen and (max-width: 1200px) {
  .links-group {
    flex-wrap: wrap;
    gap: 15px;
  }
  
  .link-card {
    width: calc(50% - 15px);
    min-width: 280px;
  }
}

@media screen and (max-width: 768px) {
  .links-group {
    flex-direction: column;
    align-items: center;
  }
  
  .link-card {
    width: 100%;
    max-width: 280px;
  }
}
</style> 