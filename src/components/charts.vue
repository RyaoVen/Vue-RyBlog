<template>
<main>
  <div class="stats-container">
    <!-- 阅读趋势图 -->
    <div class="stats-card trend-card fade-in-animation" style="animation-delay: 0.8s">
      <div class="card-header">
        <h3 class="card-title">阅读趋势分析</h3>
        <div class="time-buttons">
          <button class="time-btn active" @click="setTimeRange('day')">日</button>
          <button class="time-btn" @click="setTimeRange('week')">周</button>
          <button class="time-btn" @click="setTimeRange('month')">月</button>
        </div>
      </div>
      <div class="chart-container">
        <canvas ref="readTrendChartRef"></canvas>
      </div>
    </div>

    <!-- 文章分类占比 -->
    <div class="stats-card category-card fade-in-animation" style="animation-delay: 0.9s">
      <div class="card-header">
        <h3 class="card-title">文章分类占比</h3>
        <button class="options-btn">
          <i class="fa-solid fa-ellipsis-v"></i>
        </button>
      </div>
      <div class="chart-container">
        <canvas ref="categoryChartRef"></canvas>
      </div>
      <div class="legend-grid">
        <div class="legend-item" v-for="(item, index) in chartLegend" :key="index">
          <div class="legend-marker" :style="{backgroundColor: item.color}"></div>
          <span class="legend-label">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script setup>
import { ref, onMounted, nextTick, reactive } from 'vue'
import Chart from 'chart.js/auto'

// 引用DOM元素
const readTrendChartRef = ref(null)
const categoryChartRef = ref(null)

// 状态管理
const state = reactive({
  timeRange: 'day',
  chartLegend: [
    { label: '技术文章', color: '#0080ff' },
    { label: '生活随笔', color: '#36c9a7' },
    { label: '教程指南', color: '#ffb74d' },
    { label: '其他分类', color: '#6c757d' }
  ],
  readTrendChart: null,
  categoryChart: null
})

// 设置时间范围
const setTimeRange = (range) => {
  if (state.timeRange === range) return
  state.timeRange = range

  // 更新图表数据
  updateReadTrendChart()
}

// 初始化阅读趋势图表
const initReadTrendChart = () => {
  const ctx = readTrendChartRef.value.getContext('2d')

  // 图表配置
  const config = {
    type: 'line',
    data: {
      labels: Array.from({ length: 7 }, (_, i) => {
        const date = new Date()
        date.setDate(date.getDate() - 6 + i)
        return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
      }),
      datasets: [{
        label: '阅读量',
        data: [65, 78, 52, 91, 86, 120, 103],
        borderColor: '#0080ff',
        backgroundColor: 'rgba(0, 128, 255, 0.1)',
        tension: 0.3,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  }

  state.readTrendChart = new Chart(ctx, config)
}

// 更新阅读趋势图表
const updateReadTrendChart = () => {
  if (!state.readTrendChart) return

  // 根据时间范围更新数据
  let data = []
  let labels = []

  if (state.timeRange === 'day') {
    data = [65, 78, 52, 91, 86, 120, 103]
    labels = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - 6 + i)
      return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' })
    })
  } else if (state.timeRange === 'week') {
    data = [320, 450, 380, 520, 490, 610, 580]
    labels = ['第1周', '第2周', '第3周', '第4周', '第5周', '第6周', '第7周']
  } else {
    data = [1250, 1890, 1420, 2100, 1980]
    labels = ['1月', '2月', '3月', '4月', '5月']
  }

  state.readTrendChart.data.labels = labels
  state.readTrendChart.data.datasets[0].data = data
  state.readTrendChart.update()
}

// 初始化分类占比图表
const initCategoryChart = () => {
  const ctx = categoryChartRef.value.getContext('2d')

  // 图表配置
  const config = {
    type: 'doughnut',
    data: {
      labels: ['技术文章', '生活随笔', '教程指南', '其他分类'],
      datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [
          '#0080ff',
          '#36c9a7',
          '#ffb74d',
          '#6c757d'
        ],
        borderWidth: 0,
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      },
      cutout: '70%'
    }
  }

  state.categoryChart = new Chart(ctx, config)
}

// 组件挂载后初始化图表
onMounted(() => {
  nextTick(() => {
    initReadTrendChart()
    initCategoryChart()
  })
})
</script>

<style scoped>
main{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
}
/* 基础样式 */
:root {
  --primary-color: #0080ff;
  --success-color: #36c9a7;
  --warning-color: #ffb74d;
  --secondary-color: #6c757d;
  --dark-color: #333;
  --gray-100: #f8f9fa;
  --gray-200: #e9ecef;
  --gray-500: #6c757d;
}

/* 容器样式 */
.stats-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  .stats-container {
    grid-template-columns: 2fr 1fr;
  }
}

/* 卡片样式 */
.stats-card {
  background-color: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.trend-card {
  grid-column: span 1;
}

@media (min-width: 1024px) {
  .trend-card {
    grid-column: span 2;
  }
}

/* 卡片头部 */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--dark-color);
}

/* 时间按钮 */
.time-buttons {
  display: flex;
  gap: 0.5rem;
}

.time-btn {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.time-btn.active {
  background-color: rgba(0, 128, 255, 0.1);
  color: var(--primary-color);
}

.time-btn:not(.active) {
  background-color: var(--gray-100);
  color: var(--gray-500);
}

.time-btn:not(.active):hover {
  background-color: var(--gray-200);
}

/* 选项按钮 */
.options-btn {
  color: var(--gray-500);
  transition: color 0.2s;
}

.options-btn:hover {
  color: var(--primary-color);
}

/* 图表容器 */
.chart-container {
  height: 20rem;
}

/* 图例样式 */
.legend-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1.5rem;
}

.legend-item {
  display: flex;
  align-items: center;
}

.legend-marker {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.legend-label {
  font-size: 0.875rem;
  color: #666;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-animation {
  animation: fadeIn 0.5s ease forwards;
  opacity: 0;
}
</style>