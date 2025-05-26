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
  <div class="title">
    友链
  </div>
  <div class="card">
    <div class="card-top">
      <div class="card-top-title">
        添加
      </div>
    </div>
    <div class="form">
      <el-form :model="form" label-width="auto">
        <el-form-item label="昵称"  >
          <el-input v-model="form.name" style="width: 300px" />
        </el-form-item>

        <el-form-item label="简介" >
          <el-input type="textarea" style="width: 500px;" />
        </el-form-item>
        <el-form-item label="链接" >
          <el-input v-model="form.name" style="width: 300px" />
        </el-form-item>
        <el-form-item label="图片">
        </el-form-item>

      </el-form>
      <el-button plain type="primary">添加</el-button>
    </div>

  </div>
  <div class="card">
    <div class="card-top">
      <div class="card-top-title">
        管理
      </div>
    </div>
    <div>
      这里是一张表，还没写
    </div>
  </div>
</main>
</template>

<style scoped>

@import "@/CSS/BackStage/main.css";

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