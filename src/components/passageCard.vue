<script setup>
// 引入图片
import passageImg from './img/Passage_img.jpg';

const listTitle = Array.from({ length: 10 }, (_, index) => ({
  index: index,
  title: `测试标题${index + 1}`,
  content: `测试内容${index + 1}，《脱离电网生活：城市居民家庭如何发现简单生活》讲述了一个鼓舞人心的故事，关于一个家庭从拉斯维加斯繁忙的城市生活过渡到脱离电网的乡村生活。面对停电和供水等问题，他们没有放弃，而是努力解决问题，适应新的生活方式。
这个故事让我们意识到自给自足和资源节约的重要性。在一个资源触手可及的世界里，他们的经历表明，简单生活并充分利用大自然的馈赠是有意义的。同时，这也给年轻一代传授了尊重和保护环境的宝贵经验。他们的旅程不仅是地理位置上的迁移，更是向更可持续、更有意义生活的精神转变。`,
  img: passageImg,
  id: index,
  date:'2025/4/9/1:45'
}));
</script>

<template>
  <ul>
    <li v-for="item in listTitle" :key="item.id">
      <img :src="item.img" alt="img">
      <div class="content">
        <h1>{{ item.title }}</h1>
        <p>{{ item.content }}</p>
        <span>落笔于：{{item.date}}</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
img {
  height: 100%;
  border-radius: 10px 0 0 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
}
li{
  margin: 12px;
  transition: all 0.35s ease;
  display: flex;
  /* 删除 align-items: center; */
  justify-content: space-between;
  flex-direction: row;
  height: 180px;
  border-radius: 10px;
  background-color: rgb(253, 253, 253);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.12);
}
li:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transform: translate(1px, -1px);
  /* 修正类名拼写（建议使用 .icon） */
}
.content {
  margin: 0;
  padding: 8px;
  width: 580px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  /* 设置 align-items 为 flex-start */
  align-items: flex-start;
}
h1 {
  margin: 10px 0;
}
p,span{
  margin: 0;
  color: #575757;

}
p{
  font-size: 15px;
  overflow: hidden;
  height: 78px;
  letter-spacing: 2px;
}
span{
  margin-top: 4px;
  font-size: 14px;
}

h1::before {
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
  li:hover  h1::before {
  width: 100%;        /* 完全展开 */
}
h1 {
  position: relative;
  display: inline-block;
  padding-bottom: 3px; /* 为下划线留出空间 */
  cursor: pointer;
}
</style>