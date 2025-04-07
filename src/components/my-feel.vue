<script setup>
import {ArrowDownBold} from "@element-plus/icons-vue";

const myFeel = {zhuozhe:'原创',content:'人不会踏进同一条河流，因为你时刻都在改变。',date:'2025/4/7/17:22'}
</script>

<template>
<p><span class="top">{{myFeel.content}}</span><br><span class="bottom">{{myFeel.zhuozhe}}&nbsp&nbsp&nbsp发布于{{myFeel.date}}</span></p>
  <el-icon class="icon"><ArrowDownBold /></el-icon>
</template>

<style scoped>
p{
display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: start;
}
.bottom{
  font-size:12px;
  margin-top:-10px;
  margin-right: 18px;
  color: rgba(128, 128, 128, 0.75);
}
.top {
  position: relative;
  display: inline-block;
  padding-bottom: 3px; /* 为下划线留出空间 */
  cursor: pointer;
}

/* 自定义下划线 */
.top::before {
  content: '';
  position: absolute;
  left: 50%;          /* 从中心开始 */
  bottom: 0;
  width: 0;           /* 初始不可见 */
  height: 2px;
  background: #333;
  transform: translateX(-50%); /* 居中定位 */
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* 平滑过渡 */
}

/* 悬停时展开 */
.top:hover::before {
  width: 100%;        /* 完全展开 */
}
body{
  position: absolute;
}
.icon{
  animation:2s linear 0s infinite alternate start ;
}
@keyframes start{
  from{
    top: -5px;
  }
  to{
    top: 10px;
  }
}


</style>