<script setup lang="ts">

</script>

<template>
<main>
  <div class="card">
    <div class="title">
      管理面板一言
    </div>
    <div class="form">

    </div>
    <div class="title">
      主页一言
    </div>
    <div class="form">

    </div>
  </div>
</main>
</template>

<style scoped>
.title{
  font-size: 1.45em;
  font-weight: bold;
  color: #2c3e50;
  user-select:none;
  padding: 5px;
  border-left: 5px solid rgba(0, 128, 255, 0.8);
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 35px;
  padding-bottom: 35px;
  gap: 15px;
}
.card{
  width: 100%;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);
  padding: 45px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
}
.form{
  width: 100%;
  margin-top: 25px;
  margin-left: 25px;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 5px 5px;
  flex-wrap: wrap;
}
</style>