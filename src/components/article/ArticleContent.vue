<template>
  <div class="article-content" ref="contentRef">
    <div class="content" v-html="article.content"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})

const contentRef = ref(null)

const highlightCode = () => {
  if (contentRef.value) {
    const blocks = contentRef.value.querySelectorAll('pre code')
    blocks.forEach(block => {
      hljs.highlightElement(block)
    })
  }
}

onMounted(() => {
  nextTick(() => {
    highlightCode()
  })
})
</script>

<style scoped>
.article-content {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.content {
  line-height: 1.8;
  font-size: 16px;
}

:deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
}

:deep(pre) {
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
}

:deep(h1, h2, h3, h4, h5, h6) {
  margin: 24px 0 16px;
  font-weight: 600;
  line-height: 1.25;
}
</style>