<script setup lang="ts">
import {reactive} from "vue";

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',

})
</script>

<template>
<main>
  <div class="card">
    <div class="title">
      友链添加
    </div>
    <div class="form">
      <el-form :model="form" label-width="auto">
        <el-form-item label="昵称" >
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item label="简介">
          <el-input type="textarea" />
        </el-form-item>
        <el-form-item label="链接">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="图片">
        </el-form-item>

      </el-form>
      <el-button plain type="primary">添加</el-button>
    </div>

  </div>
  <div class="card">
    <div class="title">
      友链管理
    </div>
    <div>
      这里是一张表，还没写
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