<script setup>
import '../components/tx.vue'
import Tx from "@/components/tx.vue";
import {
  Search,Sunny
} from '@element-plus/icons-vue'
import SelfCard from "@/components/selfCard.vue";
import ListViews from "@/components/list-views.vue";
import MyFeel from "@/components/my-feel.vue";
</script>

<template>
  <header class="flex-header">
    <!-- 左侧元素 -->
    <div class="tx">
      <tx />
    </div>

    <!-- 中间按钮组 -->
    <div class="btn-group">
      <el-space :size="16">
        <el-button><el-text class="mx-1">主页</el-text></el-button>
        <el-button><el-text class="mx-1">文章</el-text></el-button>
        <el-button><el-text class="mx-1">手记</el-text></el-button>
        <el-button><el-text class="mx-1">归档</el-text></el-button>
        <el-dropdown placement="bottom">
          <el-button> <el-text class="mx-1">更多</el-text> </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>关于我</el-dropdown-item>
              <el-dropdown-item>博客项目</el-dropdown-item>
              <el-dropdown-item>去后台</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-space>
    </div>

    <!-- 右侧搜索 -->
    <div class="search-box">
      <el-button  :icon="Sunny" circle />
      <el-button :icon="Search" circle />
    </div>
  </header>

  <main>
<div class="top">
  <img src="../../src/components/img/index-top-img.png" alt="tx">
  <self-card />
</div>
    <my-feel/>
    <div class="list">
      <list-views title="最近文章"/>
      <list-views title="我的手记"/>
    </div>


  </main>
  <footer>

  </footer>
</template>

<style scoped>
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
  height: auto;
  min-height: calc(100vh - 160px);
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
  /* 新增以下属性 */
  flex-shrink: 0; /* 禁止 header 被压缩 */
  position: relative; /* 确保层级 */
  z-index: 1; /* 避免被其他元素覆盖 */
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
img {
  width: 400px;
  height: 400px;
}
.top{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: max(100px , 12vw);
  margin-top: 150px;
  margin-bottom: 150px;
}
.list{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: max( 100px , 9vw );
  margin-top: 230px;
  margin-bottom: 150px;
}


</style>