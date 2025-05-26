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
      个人资料设置
    </div>
    <div class="form">
      <el-form :model="form" label-width="auto">
        <el-form-item label="头像">

        </el-form-item>
        <el-form-item label="昵称" >
          <el-input v-model="form.name"style="width: 800px" />
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.resource">
            <el-radio value="Sponsor">Boy</el-radio>
            <el-radio value="Venue">Girl</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="自我介绍">
          <el-input type="textarea" />
        </el-form-item>
        <el-form-item label="关于我">
          <el-input type="textarea" />
        </el-form-item>

      </el-form>
    </div>
    <div class="title">
      博客链接设置
    </div>
    <div class="form">
      <el-form>
        <div class="link-row">
          <el-form-item label="Github链接">
            <el-input v-model="form.github" style="width: 280px" />
          </el-form-item>
          <el-form-item label="Gitee链接">
            <el-input v-model="form.gitee" style="width: 280px" />
          </el-form-item>
          <el-form-item label="Bilibili链接">
            <el-input v-model="form.bilibili" style="width: 280px" />
          </el-form-item>
        </div>
        <div class="link-row">
          <el-form-item label="微博链接">
            <el-input v-model="form.weibo" style="width: 280px" />
          </el-form-item>
          <el-form-item label="力扣链接">
            <el-input v-model="form.leetcode" style="width: 280px" />
          </el-form-item>
          <el-form-item label="X链接">
            <el-input v-model="form.x" style="width: 280px" />
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="title">
      个人页Tag设置
    </div>
    <div class="form">

    </div>
<el-button plain type="primary">更新</el-button>
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
.link-form {
  width: 100%;
}

.link-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
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