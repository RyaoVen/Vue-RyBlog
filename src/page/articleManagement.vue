<script setup>
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
  <div class="title">文章管理</div>
  <div>这里写个搜索栏</div>
  <div class="list">
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
main{
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  padding-top:35px;
  padding-bottom: 50px ;
}
.title{
  font-size: 1.45em;
  font-weight: bold;
  color: #2c3e50;
  user-select:none;
  padding: 5px;
  border-left: 5px solid rgba(0, 128, 255, 0.8);
}
.list{
  display: flex;
  width: 100%;
  padding: 20px;

  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.13);

  border-radius: 8px;

  flex-direction: column;
  align-items: start;
  justify-content: start;
  max-height:420px ;

}
</style>