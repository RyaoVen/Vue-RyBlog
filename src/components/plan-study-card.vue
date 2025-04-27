<script setup>
import {computed} from "vue";

const props = defineProps({
  name:{type:String,required: true},
  content:{type:String,required: true},
  progress:{type:Number,required:true}
})

const progressStyle = computed(() => ({
  '--progress': `${props.progress}%`
}));
</script>

<template>
<div class="container">
  <div class="name">
    <p>{{props.name}}</p>
  </div>
  <div class="content">
    <p>{{props.content}}</p>
  </div>
  <div class="progress"><div class="stick" :style="progressStyle" ></div><span>{{props.progress}}%</span></div>
</div>
</template>

<style scoped>
.container {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
  padding: 25px;
  border-radius: 10px;
  width: 350px;
}
.name{
  font-size: 1.2em;
  font-weight: bold;
  color: #2c3e50;
}
.content{
  font-size: 0.9em;
  color: #666666 ;
}
.progress{
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: row;
  gap: 10px;  /* 添加间距 */
}

.stick{
  position: relative;
  width: 250px;  /* 调整宽度 */
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
  flex-shrink: 0;  /* 防止压缩 */
}
.stick::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: var(--progress);
  background-color: #23c68d;
  border-radius: 5px;
  transition: width 0.3s ease;
}
</style>