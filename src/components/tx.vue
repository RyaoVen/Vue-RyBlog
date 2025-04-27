<script setup>
import { defineProps } from 'vue';

// 定义props
const props = defineProps({
  size: {
    type: Number,
    default: 35
  }
});

// 动态计算样式
const imgStyle = {
  width: `${props.size}px`,
  height: `${props.size}px`
};
</script>

<template>
  <el-tooltip
      class="box-item"
      effect="light"
      content="Ryao_VenKing"
      placement="bottom"
  >
    <img src="./img/tx.jpg" :style="imgStyle">
  </el-tooltip>
</template>

<style scoped>
img {
  border-radius: 7px;
  border: rgba(166, 166, 166, 0.25) solid 1px;
  transition: transform 0.185s ease-in-out;
  margin-right: 15px;
  padding: 1px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
}
img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>