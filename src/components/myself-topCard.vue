<script setup>

import Tx from "@/components/tx.vue";
const date = {
  name:'Ryao_VenKing',
  saying:'无限进步'
}
</script>

<template>
<div class="container">
  <tx size="65"/>
  <div class="content">
    <div class="top">
  <span class="name">
{{date.name}}
  </span>
      <span class="saying">
{{date.saying}}
  </span>
    </div>
    <div class="link">
      <el-button circle><img src="./icon/github.png" alt=""></el-button>
      <el-button circle><img src="./icon/bilibili.png" alt=""></el-button>
      <el-button circle><img src="./icon/gitee.png" alt=""></el-button>
      <el-button circle><img src="./icon/weibo.png" alt=""></el-button>
      <el-button circle><img src="./icon/leetcode.png" alt=""></el-button>

    </div>
  </div>
</div>
<p>这里是一个日历热力图，但是还没写</p>




</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  width: max(70vw, 800px);
  margin: 20px;
  border-radius: 10px;
  padding-left: 30px;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:start;
  padding: 20px;
}
.top{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 5px 0;
}
img{
  width: 15px;
}
.name{
font-weight: bold;
  font-size: large;
}
.saying{
  font-size: 0.8em;
  color: #666666;
}

</style>