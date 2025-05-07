<template>
  <div class="test-article">
    <el-card>
      <h1>{{ article.title }}</h1>
      <div class="article-meta">
        <span>作者：{{ article.author }}</span>
        <span>著于：{{ article.date }}</span>
      </div>
      <div class="tag">
        <ul>
          <li :key="tag" v-for="tag in article.tags">
              <span>
                {{tag}}
              </span>
          </li>
        </ul>
      </div>
      <hr class="separator" />
      <div v-if="article && article.content" v-html="article.content" class="article-content"></div>
      <hr class="separator" />
      <div class="foot">
        <div class="footer">

          <span >文章归类：{{article.category}}</span>
          <span>浏览数：{{article.views}}</span>
          <span>点赞数：{{article.likes}}</span>

        </div>

        <el-button type="primary" @click="goBack">返回</el-button>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { useArticlesStore } from '../store/articles.js';
import { useRoute, useRouter } from 'vue-router';
import {ElCard, ElButton, ElMessage} from 'element-plus';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { onMounted, createApp, h } from 'vue';
import { CopyDocument} from '@element-plus/icons-vue';

const articlesStore = useArticlesStore();
const router = useRouter();
const route = useRoute();
const articleId = route.params.id;
const article = articlesStore.getArticleById(articleId);

const goBack = () => {
  router.back();
};
const open2 = () => {
  ElMessage({
    message: '已复制',
    type: 'success',
  })
}

onMounted(() => {
  const codeBlocks = document.querySelectorAll('.article-content pre code');
  codeBlocks.forEach((block) => {
    hljs.highlightElement(block);
    const preElement = block.parentNode;
    preElement.style.position = 'relative';

    // 创建一个容器来放置 ElButton
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('copy-button-container');

    // 创建 ElButton 组件实例
    const copyButton = createApp({
      setup() {
        const copyText = async () => {
          try {
            await navigator.clipboard.writeText(block.textContent);
            const buttonEl = buttonContainer.querySelector('.el-button');

            open2();
          } catch (err) {
            console.error('复制失败:', err);
          }
        };

        return () =>
            h(ElButton, {


              onClick: copyText,
              icon:()=>h(CopyDocument),
              circle:true


            }, '');
      },
    }).mount(buttonContainer);

    // 将按钮容器插入到 pre 元素的顶部
    preElement.insertBefore(buttonContainer, preElement.firstChild);
  });
});
</script>

<style scoped>
@import url('https://fonts.font.im/css?family=Noto+Sans|PT+Sans');
.test-article {
  max-width: 800px;
  margin: 50px auto;
}

.el-card {
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.article-meta {
  color: #666;
  margin-bottom: 20px;
}

.article-meta span {
  margin-right: 15px;
}

.separator {
  border: none;
  border-top: 1px solid #e4e7ed;
  margin: 10px 0;
}

.article-content {
  color: #333;
  font-size: 16px;
  line-height: 1.8;
}

:deep(.article-content h2 ){
  font-size: 20px;
  color: #222;
  margin-top: 30px;
  margin-bottom: 10px;
}

:deep(.article-content h3 ){
  font-size: 18px;
  color: #222;
  margin-top: 25px;
  margin-bottom: 8px;
}

:deep(.article-content p) {
  margin-bottom: 15px;
}

:deep(.article-content pre ){
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  margin:0;
  position: relative;
}

:deep(.article-content code ){
  background-color: #f4f4f4;
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Noto Sans', sans-serif;
}


:deep(.article-content,ul.article-content ol) {
  padding-left: 20px;
  margin-bottom: 15px;
}

:deep(.article-content li) {
  margin-bottom: 8px;
}

.copy-button-container {
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
}

.el-button {
  padding: 5px 10px;
}

/* 使用 :deep() 伪类来调整 v-html 渲染内容的样式 */


:deep(.article-content p) {
  font-style: italic;
}

.el-button {
  padding: 10px 20px;
  font-size: 14px;
}
li span{
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  color: #666666;
  border: 1px solid #ebeef5;
  padding: 5px 10px;
  margin: 0;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s;
  width: auto;
  font-size: 0.8em;
}
li{
  list-style: none;
  padding: 0;
  margin: 0;
}
ul{
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: start;
  flex-direction: row;
  gap: 5px;
}
li span:hover{
  transform: translate(1px,-1px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.2);
}
.footer {
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  flex-direction: column;
  margin-left: 10px;
}
.footer span {
  font-size: 0.66em;
  color: #666666;
}
.foot{
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
}
</style>