<template>
  <div class="heatmap">
    <div
        v-for="(week, weekIndex) in weeks"
        :key="weekIndex"
        class="week"
    >
      <div
          v-for="day in 7"
          :key="day"
          class="day"
          :style="getDayStyle(weekIndex, day)"
          :data-count="getDayCount(weekIndex, day)"
          :data-date="getDayDate(weekIndex, day)"
      ></div>
    </div>
  </div>
  <div class="legend">
    <!-- 图例保持不变 -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// 响应式数据
const data = ref({});
const weeks = 51;

// 生成模拟数据
function generateData() {
  const today = new Date();
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const newData = {};
  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    const dateStr = d.toISOString().split('T')[0];
    newData[dateStr] = Math.floor(Math.random() * 5);
  }
  data.value = newData;
}

// 获取日期对应的数值
function getDayCount(weekIndex, dayIndex) {
  const date = new Date();
  date.setDate(date.getDate() - ((weeks - weekIndex) * 7 - dayIndex));
  return data.value[date.toISOString().split('T')[0]] || 0;
}

// 获取日期字符串
function getDayDate(weekIndex, dayIndex) {
  const date = new Date();
  date.setDate(date.getDate() - ((weeks - weekIndex) * 7 - dayIndex));
  return date.toISOString().split('T')[0];
}

// 获取颜色样式
function getDayStyle(weekIndex, dayIndex) {
  const count = getDayCount(weekIndex, dayIndex);
  return {
    backgroundColor: getColor(count)
  };
}

// 颜色映射函数
function getColor(count) {
  if (count > 4) return '#216e39';
  if (count > 3) return '#30a14e';
  if (count > 2) return '#40c463';
  if (count > 0) return '#9be9a8';
  return '#ebedf0';
}

onMounted(() => {
  generateData();
});
</script>

<style>
/* 移除scoped，或使用:deep选择器 */
.heatmap {
  display: flex;
  gap: 3px;
  padding: 10px;
  background: #f5f5f5;
  border-radius: 5px;
  max-width: 1200px;
  margin: 20px auto;
}

.week {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.day {
  width: 15px;
  height: 15px;
  background: #ebedf0;
  border-radius: 3px;
  cursor: pointer;
  position: relative;
}

.day:hover::after {
  content: attr(data-count) "次 - " attr(data-date);
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 4px 8px;
  border-radius: 3px;
  white-space: nowrap;
  font-size: 12px;
}

.legend {
  display: flex;
  gap: 3px;
  justify-content: center;
  margin-top: 10px;
}
</style>