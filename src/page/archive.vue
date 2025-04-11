<script setup>
const listTitle = Array.from({ length: 12 }, (_, index) => ({
  index: index,
  title: `测试标题${index + 1}`,
  content: `测试内容${index + 1}`,
  year: (index + 2020),
  month: index,
  id: index
}));

</script>

<template>

</template>

<style scoped>

</style>