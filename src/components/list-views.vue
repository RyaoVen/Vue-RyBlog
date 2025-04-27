<script setup >
// ✅ 正确写法：使用 defineProps 声明 props
import {Right} from "@element-plus/icons-vue";

const props = defineProps({
  title: {
    type: String,
    default: '默认标题'
  },
  items: {
    type: Array,
    default: () => []
  }
})

// 如果没有提供items，则使用默认数据
const defaultItems = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  title: `测试标题${index + 1}`,
  date: '2023-10-01',
  summary: `测试内容${index + 1}`
}));

const displayItems = props.items && props.items.length > 0 ? props.items : defaultItems;

// 定义emit事件
const emit = defineEmits(['item-click']);

// 点击处理函数
const handleItemClick = (item) => {
  emit('item-click', item);
}
</script>



<template>
  <div class="container">
    <!-- h1 默认就是块级元素 -->
    <h1>{{ title }}</h1>

    <!-- ul 也是块级元素 -->
    <ul>
      <li
          v-for="item in displayItems.slice(0, 5)"
          :key="item.id"
          class="list-item"
          @click="handleItemClick(item)"
      >
       <span>{{ item.title }}</span><el-icon class="icon"><Right /></el-icon>
      </li>
    </ul>
    <el-button size="large" class="btn" plain>查看更多：<el-icon class="icon-btn"><Right /></el-icon></el-button>
  </div>
</template>

<style scoped>
/* 清除默认间距 */
.container {
  padding: 20px;
}

/* 确保块级元素特性 */
h1, ul {
  display: block;
  margin: 0;
}

/* 添加间距控制 */
h1 {
  margin-bottom: 1rem;
}

ul {
  padding-left: 0;
  list-style: none;
}
.container{

  width: 32vw;
  min-width: 400px;
  background-color: rgb(253, 253, 253);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
h1{
  font-size: 1.6rem;
}
li{
  padding: 18px;
  transition: all 0.35s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
li:hover {
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  transform: translate(1px, -1px);
  /* 修正类名拼写（建议使用 .icon） */
}
  .icon {
    transform: rotate(0); /* 初始状态 */
    transition: transform 0.35s ease; /* 精确指定过渡属性 */

  }

  li:hover .icon {
    transform: rotate(90deg); /* 悬停状态 */
  }
  .btn .icon-btn{
    transition: all 0.35s ease;
  }
  .btn:hover .icon-btn {
    transform: translateX(4px);
  }
  .btn{
    margin: 15px;
  }

</style>