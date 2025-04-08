<script setup>

import PassageCard from "@/components/passageCard.vue";
</script>

<template>
<div class="passage">
<passage-card />
  <el-text class="mx-1"> 没有更多了qwq</el-text>
</div>
</template>

<style scoped>
.passage{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.mx-1{
  margin: 0.8rem;
}
</style>