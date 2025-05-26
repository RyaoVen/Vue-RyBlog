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
    <el-form :model="form" label-width="auto">
      <el-form-item label="昵称">
        <el-input v-model="form.name" />
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
      <el-form-item >
        <el-form-item label="Github链接">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Gitee链接">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Bilibili链接">
          <el-input v-model="form.name" />
        </el-form-item>

      </el-form-item>
      <el-form-item>
        <el-form-item label="微博链接">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="力扣链接">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="X链接">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form-item>
    </el-form>
  </div>
</main>
</template>

<style scoped>
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
    padding: 20px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height:420px ;
  }



</style>