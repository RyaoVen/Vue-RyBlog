<script setup>

import Tx from "@/components/tx.vue";
import {
  User,
    Link
} from '@element-plus/icons-vue'
import router from "@/route/index-page.js";
function goSelfPage(){
  router.push("/myself");
}
</script>

<template>
  <el-card style="width: 400px" shadow="always">
    <div class="top">
      <tx/>
      <article>
        <p class="name">
          Ryao_VenKing
        </p>
        <p class="content">
          Java + JS 全栈开发者 // 一个励志做出自己的独立游戏的梦想家
        </p>
      </article>
    </div>

    <div class="main">
      <p>
        大一 Java + JS 全栈开发者\喜欢音乐的业余摄影师\还想学点做饭<br>
        欢迎来到我的个人博客，觉得不错就点个star吧。
      </p>
    </div>
    <div class="btn">
      <el-tooltip
          class="box-item"
          effect="light"
          content="Ryao_VenKing's Github"
          placement="bottom"
      >
        <el-button type="primary" :icon="Link" plain>Github</el-button>
      </el-tooltip>

      <el-tooltip
          class="box-item"
          effect="light"
          content="Ryao_VenKing's Page"
          placement="bottom"
      >
      <el-button type="primary" :icon="User" plain @click="goSelfPage">个人主页</el-button>
      </el-tooltip>
    </div>
  </el-card>
</template>

<style scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row ;
}
.name {
font-weight:600 ;
  font-size: large;
}
.content {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);

}
p{
  margin: 5px;
}
.main p{
  font-size: 15px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row ;
margin-top: 25px ;
  margin-left: 10px;
  margin-right: 10px;
}
</style>