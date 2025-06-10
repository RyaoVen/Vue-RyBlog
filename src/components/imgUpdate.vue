<template>
  <!-- 头像上传组件 -->
  <el-upload
      class="avatar-uploader"
      action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
      :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload"
  >
  <!-- 已上传显示图片 -->
  <img v-if="imageUrl" :src="imageUrl" class="avatar" />
  <!-- 未上传显示加号图标 -->
  <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
  </el-upload>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

// 存储图片URL
const imageUrl = ref('')

/**
 * 上传成功处理函数
 * @param response - 服务器响应
 * @param uploadFile - 上传的文件对象
 */
const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  // 使用上传的原始文件创建本地URL
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

/**
 * 上传前校验函数
 * @param rawFile - 原始文件对象
 * @returns {boolean} - 是否允许上传
 */
const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  // 校验文件类型
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  }
  // 校验文件大小
  else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
</script>

<style scoped>
/* 已上传图片样式 */
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
/* 上传区域样式 */
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

/* 上传区域悬停效果 */
.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

/* 上传图标样式 */
.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>