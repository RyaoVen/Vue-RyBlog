<script setup lang="ts">
import {reactive} from "vue";
import ImgUpdate from "@/components/imgUpdate.vue";

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
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <main>
    <div class="title">
      个人资料设置
    </div>
    <div class="card">
      <div class="card-top">
        <div class="card-top-title">
          个人资料
        </div>
      </div>

      <div class="form">
        <el-form :model="form" label-width="auto">
          <el-form-item label="头像">
          <img-update/>
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="form.name" style="width: 800px" />
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
          <el-form-item label="邮箱地址">
            <el-input v-model="form.name" style="width: 800px" />
          </el-form-item>
          <el-form-item label="开启消息邮箱通知">
            <el-switch v-model="form.delivery"  />
          </el-form-item>
        </el-form>
        <el-button plain type="primary">更新</el-button>
      </div>

    </div>
    <div class="card">
      <div class="card-top">
        <div class="card-top-title">
          Tag设置
        </div>
      </div>
    </div>
    <div class="title">
      链接设置
    </div>

    <div class="card">
      <!-- 修复链接卡片的嵌套闭合 -->
      <div class="card-top">
        <div class="card-top-title">
          链接
        </div>
      </div>
      <div class="form">
        <el-form label-width="auto">
            <el-form-item label="Github链接">
              <el-input v-model="form.github" style="width: 280px" />
            </el-form-item>
            <el-form-item label="Gitee链接">
              <el-input v-model="form.gitee" style="width: 280px" />
            </el-form-item>
            <el-form-item label="Bilibili链接">
              <el-input v-model="form.bilibili" style="width: 280px" />
            </el-form-item>

            <el-form-item label="微博链接">
              <el-input v-model="form.weibo" style="width: 280px" />
            </el-form-item>
            <el-form-item label="力扣链接">
              <el-input v-model="form.leetcode" style="width: 280px" />
            </el-form-item>
            <el-form-item label="X链接">
              <el-input v-model="form.x" style="width: 280px" />
            </el-form-item>
          <el-form-item label="域名备案号">
            <el-input v-model="form.x" style="width: 280px" />
          </el-form-item>
            <el-button plain type="primary">更新</el-button>

        </el-form>
      </div>
    </div>

    <div class="title">
      TODO
    </div>
    <div class="card">
      <div class="card-top">
        <div class="card-top-title">
          Studying
        </div>
      </div>
      <div class="form">
        <el-form-item label="名称">
          <el-input v-model="form.x" style="width: 280px" />
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="form.x" style="width: 280px" />
        </el-form-item>
        <el-form-item label="进度">
          <el-input v-model="form.x" style="width: 280px" />
        </el-form-item>
        <el-button plain type="primary">更新</el-button>
      </div>
      <el-divider />
      <el-table :data="tableData"  stripe style="width: 100%">
        <el-table-column prop="date" label="文章类型"  />
        <el-table-column prop="name" label="标题"  />
        <el-table-column prop="address" label="时间" />
        <el-table-column label="封面"/>
        <el-table-column label="Tags"/>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button

                size="small"
                @click="handleEdit(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
                plain
                type="danger"
                size="small"
                @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="card">
      <div class="card-top">
        <div class="card-top-title">
          Planing
        </div>
      </div>
      <div class="form">
        <el-form-item label="名称">
          <el-input v-model="form.x" style="width: 280px" />
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="form.x" style="width: 280px" />
        </el-form-item>
        <el-form-item label="进度">
          <el-input v-model="form.x" style="width: 280px" />
        </el-form-item>
        <el-button plain type="primary">更新</el-button>
      </div>
      <el-divider />
      <el-table :data="tableData"  stripe style="width: 100%">
        <el-table-column prop="date" label="文章类型"  />
        <el-table-column prop="name" label="标题"  />
        <el-table-column prop="address" label="时间" />
        <el-table-column label="封面"/>
        <el-table-column label="Tags"/>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button

                size="small"
                @click="handleEdit(scope.$index, scope.row)"
            >
              编辑
            </el-button>
            <el-button
                plain
                type="danger"
                size="small"
                @click="handleDelete(scope.$index, scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>



  </main>
</template>

<style scoped>
@import "../CSS/BackStage/main.css";


.link-form {
  width: 100%;
}

.link-row {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  flex-wrap: wrap;
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