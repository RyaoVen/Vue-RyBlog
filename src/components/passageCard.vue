<script setup>
const listTitle = Array.from({ length: 10 }, (_, index) => ({
  index: index,
  title: `测试标题${index + 1}`,
  content: `测试内容${index + 1}`,
  img:'/img/',
  id: index
}));
</script>

<template>
<ul>
  <li v-for="item in listTitle" :key="item.id">
    
  </li>
</ul>
</template>

<style scoped>

</style>