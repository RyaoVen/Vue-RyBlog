<template>
  <div class="article-toc" v-if="toc.length > 0">
    <div class="toc-title">目录</div>
    <ul class="toc-list">
      <li 
        v-for="(item, index) in toc" 
        :key="index" 
        :class="{ 'active': activeHeading === item.id }"
        @click="scrollToHeading(item.id)"
      >
        <span :style="{ 'margin-left': (item.level - 1) * 15 + 'px' }">
          {{ item.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  contentRef: {
    type: Object,
    required: true
  }
})

const toc = ref([])
const activeHeading = ref('')

const generateTOC = () => {
  if (!props.contentRef) return
  
  const headings = props.contentRef.querySelectorAll('h1, h2, h3, h4, h5, h6')
  toc.value = Array.from(headings).map((heading, index) => {
    const id = `heading-${index}`
    heading.id = id
    return {
      id,
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1))
    }
  })
}

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const updateActiveHeading = () => {
  const headings = toc.value.map(item => document.getElementById(item.id))
  const scrollPosition = window.scrollY

  for (let i = headings.length - 1; i >= 0; i--) {
    if (headings[i] && headings[i].offsetTop <= scrollPosition + 100) {
      activeHeading.value = headings[i].id
      break
    }
  }
}

onMounted(() => {
  generateTOC()
  window.addEventListener('scroll', updateActiveHeading)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveHeading)
})
</script>

<style scoped>
.article-toc {
  position: sticky;
  top: 100px;
  width: 250px;
  max-height: calc(100vh - 150px);
  overflow-y: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
}

.toc-title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.toc-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.toc-list li {
  padding: 5px 0;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 14px;
  color: #666;
}

.toc-list li:hover {
  color: #409EFF;
}

.toc-list li.active {
  color: #409EFF;
  font-weight: 500;
}

.toc-list li span {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>