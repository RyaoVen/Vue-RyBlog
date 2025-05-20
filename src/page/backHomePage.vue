<script lang="ts" setup>

import Chart from "chart.js/auto";
import {onMounted, ref} from "vue";
let line = ref();
let doughnut = ref();
let doughnutChart = null;
let lineChart = null;
 onMounted(() => {
   if (line.value) {
     lineChart = new Chart(line.value, {
       type: 'line',
       data: {
         labels: ['1日', '5日', '10日', '15日', '20日', '25日', '30日'],
         datasets: [{
           label: '访客数',
           data: [65, 59, 80, 81, 56, 14, 56],
           backgroundColor: 'rgba(75, 192, 192, 0.2)', // 背景色
           borderColor: 'rgba(75, 192, 192, 1)', // 边框色
           borderWidth: 3,// 边框宽度
           tension: 0.4,
           fill: true,
         }
           , {
             label: '阅读数',
             data: [35, 49, 50, 61, 46, 11, 44],
             backgroundColor: 'rgba(96,192,75,0.2)', // 背景色
             borderColor: 'rgba(96,192,75, 1)', // 边框色
             borderWidth: 3,
             tension: 0.4,
             fill: true,

           }]
       }

     })
   }

   if (doughnut.value) {
     // 为不同扇区定义不同颜色
     const sectorColors = [
       'rgba(54, 162, 235, 0.7)',  // 蓝色
       'rgba(255, 99, 132, 0.7)',  // 红色
       'rgba(255, 206, 86, 0.7)',  // 黄色
       'rgba(75, 192, 192, 0.7)'   // 绿色
     ];

     // 定义边框颜色（可选）
     const borderColors = [
       'rgba(54, 162, 235, 1)',
       'rgba(255, 99, 132, 1)',
       'rgba(255, 206, 86, 1)',
       'rgba(75, 192, 192, 1)'
     ];

     // 创建环形图
     doughnutChart = new Chart(doughnut.value, {
       type: 'doughnut',
       data: {
         labels: ['文章', '手记', '笔记', '项目'],
         datasets: [{
           label: '访客数',
           data: [65, 59, 80, 81],
           backgroundColor: sectorColors,  // 使用不同颜色区分扇区
           borderColor: borderColors,      // 边框颜色
           borderWidth: 2,                 // 减小边框宽度使图表更精致
           hoverOffset: 15                 // 鼠标悬停时的偏移效果
         }]
       },
       options: {
         responsive: true,
         maintainAspectRatio: false,
         cutout: '65%',                   // 设置环形图中间空洞大小
         plugins: {
           legend: {
             position: 'right',           // 图例位置
             labels: {
               padding: 20,
               font: {
                 size: 12
               }
             }
           },
           tooltip: {
             backgroundColor: 'rgba(255, 255, 255, 0.9)',
             titleColor: '#333',
             bodyColor: '#666',
             borderColor: '#ddd',
             borderWidth: 1,
             padding: 10,
             displayColors: true,
             callbacks: {
               label: function(context) {
                 const label = context.label || '';
                 const value = context.raw || 0;
                 const total = context.dataset.data.reduce((a, b) => a + b, 0);
                 const percentage = Math.round((value / total) * 100);
                 return `${label}: ${value} (${percentage}%)`;
               }
             }
           }
         },
         animation: {
           animateRotate: true,
           animateScale: true,
           duration: 2000,
           easing: 'easeOutQuart'
         }
       }
     });
   }
 });
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
<main>

  <div class="topCard blue-gradient">
    <div class="text">
      <h1>欢迎回来, RyaoVenKing</h1>
      <span>这里并非终点，你还不能倒下。</span>
    </div>

    <div class="calendar">
      <span class="date-text">
        今天是
      </span>
      <p class="date">
        2025年5月18日星期日
      </p>
    </div>


  </div>
  <div class="title">
    数据概览
  </div>

  <div class="dateCardList">
    <div class="dateCard">
      <span class="dateCard-title">文章总数</span>
      <span class="dateCard-num">1</span>
    </div>
    <div class="dateCard">
      <span class="dateCard-title">上次更新</span>
      <span class="dateCard-num">2025-02-17</span>
    </div>

    <div class="dateCard">
      <span class="dateCard-title">本月发布</span>
      <span class="dateCard-num">1</span>
    </div>

    <div class="dateCard">
      <span class="dateCard-title">今日浏览量</span>
      <span class="dateCard-num">1</span>
    </div>
    <div class="dateCard">
      <span class="dateCard-title">阅读总量</span>
      <span class="dateCard-num">1</span>
    </div>
    <div class="dateCard">
      <span class="dateCard-title">留言增量</span>
      <span class="dateCard-num">1</span>
    </div>
  </div>

  <div class="chart">
    <div class="card"><div class="action-top"> <span class="action-top-title">阅读数据分析</span></div><canvas id="line" ref="line" height="400px" width="880px"></canvas></div>
    <div class="card"><div class="action-top"> <span class="action-top-title">阅读数据分析</span></div><canvas id="doughnut" ref="doughnut" height="400px" width="440px"></canvas></div>
  </div>
  <div class="title">
    事件
  </div>
  <div class="action">
    <div class="action-top">
      <span class="action-top-title">最近事项</span>
      <a href="#">查看完整</a>

    </div>
    <el-table :data="tableData"  stripe style="width: 100%">
      <el-table-column prop="date" label="活动类型"  />
      <el-table-column prop="name" label="内容"  />
      <el-table-column prop="address" label="时间" />
      <el-table-column label="状态"/>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            type="primary"
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            size="small"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="action">
    <span class="action-top-title">TODO</span>
    <ul class="TODO-list-ul">
      <li class="TODO-list">
        <div class="TODO-title">
          <span class="TODO-title-text">首页页面</span>
          <span class="TODO-title-num">80%</span>
        </div>
        <div class="progress"></div>
      </li>
      <li class="TODO-list">
        <div class="TODO-title">
          <span class="TODO-title-text">侧边栏</span>
          <span class="TODO-title-num">80%</span>
        </div>
        <div class="progress"></div>
        <li class="TODO-list">
          <div class="TODO-title">
            <span class="TODO-title-text">文章管理页面</span>
            <span class="TODO-title-num">80%</span>
          </div>
          <div class="progress"></div>
        </li>

      </li>



    </ul>
  </div>
</main>
</template>
<style scoped>

li{
list-style: none;
}
.progress {
  position: relative;
  width: 99%;
  height: 4px;
  border-radius: 2px;
  background-color: #e0e0e0;
  overflow: hidden;
  margin-left: 5px;
}
.TODO-list-ul{
  display: flex;
  flex-direction: column;
  gap: 8px 0;


}
.progress::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 2px;
  background-color: #0080ff;
  width: 80%;
  transition: width 0.3s ease;
}
li,ul{
  margin: 0;
  padding: 0;
}
.TODO-list{
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.TODO-title-text{
  font-size: 0.8em;
  color: #2c3e50;
}
.TODO-title-num{
  font-size: 0.8em;
  color:rgba(0, 128, 255, 0.9) ;
}
.TODO-title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  width: 100%;
}

.calendar{
  padding: 11px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.225);
}
.chart{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
flex-wrap: wrap;
}
.topCard {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background: rgba(0, 128, 255, 0.9);  /* fallback for old browsers */
  user-select:none;

  padding: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  transition: all 0.188s ease;
  cursor: pointer;
}

.topCard:hover{
  transform: translate(0,-1px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.33);
}

main{
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  padding-top:35px;
  padding-bottom: 50px ;
}

p,span,h1{
  margin: 0;
  padding: 0;
  color: white;
}
.date{
  font-size: 0.88em;
  font-weight: bold;
}
.date-text{
  font-size: 0.8em;
  color: rgba(255, 255, 255, 0.86);
}
.text h1{
  font-size: 1.8em;
}
.text span{
  position: relative; /* 为伪元素提供定位上下文 */
  display: inline-block;
  font-size: 0.85em;
  color: rgba(255, 255, 255, 0.95);
}
.text span::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.topCard:hover span::before {
  width: 100%;
}
.text {
  position: relative;
  display: inline-block;
}
.title{
  font-size: 1.45em;
  font-weight: bold;
  color: #2c3e50;
  user-select:none;
  padding: 5px;
  border-left: 5px solid rgba(0, 128, 255, 0.8);
}
.dateCardList{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 15px 0;
}
.dateCard{
  width: 200px;
  height: 75px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  position: relative;
  background-color: white;
  border-left: 3px solid rgba(0, 128, 255, 0.8);

}

.dateCard-title{
  color: grey;
  font-size: 0.88em;
}
.dateCard-num{
  color: #2c3e50;
  font-size: 1.25em;
  font-weight: bold;
}
.dateCard:hover {
  transform: translate(0, -5px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.33);
}
.action{
  width: 100%;
  display: flex;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  padding: 20px;
  border-radius: 8px;
  flex-direction: column;
  gap: 5px 0;
}
.card{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  max-height:420px ;
}
.action-top-title{
  color: #2c3e50;
  font-size: 0.95em;
  font-weight: bold;
}
.action-top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
a {
  position: relative;
  text-decoration-line: none;
  color: rgba(0, 128, 255, 0.95);
  font-size: 0.85em;
}
a::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 0;
  height: 1px;
  background:rgba(0, 128, 255, 0.95) ;
  transform: translateX(-50%);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

a:hover::before {
  width: 100%;
}

</style>

