<script setup>

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
    <div class="lineChart">这里是一个折线图</div>
    <div class="donutChart">这里是一个圆环图</div>
  </div>
  <div class="title">
    事件
  </div>
  <div class="action">
    这里写个列表，最近事务与操作
  </div>
  <div class="todo">
    这里写自己的饼和规划
  </div>
</main>
</template>
<style scoped>
.calendar{
  padding: 11px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.225);
}
.chart{
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
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
  justify-content: center;
  gap: 35px;
  width: 100%;
}
.dateCard{
  display: flex;
  flex-direction: column;
  padding: 15px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
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
.dateCard:hover{
  transform: translate(0,-5px);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.33);

}


</style>