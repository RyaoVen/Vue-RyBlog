<template>
<main>
  <div class="title">文章发布</div>
  <div class="card">
    <div class="card-top">
      <div class="card-top-title">
        文章信息
      </div>
    </div>
    <el-form-item label="封面图片">

    </el-form-item>
    <el-form-item label="标题">
      <el-input  style="width: 800px" />
    </el-form-item>

    <el-form-item label="简介">
      <el-input  style="width: 800px" />
    </el-form-item>

    <el-form-item label="作者">
      <el-input  style="width: 800px" />
    </el-form-item>
    <el-form-item label="分类">
      <el-select v-model="value"
                 placeholder="Select"
                 size="large"
                 style="width: 240px">
        <el-option label="文章" value="passage"></el-option>
        <el-option label="手记" value="daily"></el-option>
        <el-option label="项目" value="project"></el-option>
      </el-select>
    </el-form-item>

  </div>
  <div class="card">
    <div class="card-top">
      <div class="card-top-title">
        文章内容
      </div>
    </div>
    <div ref="editorElement" class="w-e-text-container" style="height: 400px;width: auto"></div>
    <div ref="toolbarElement" class="w-e-toolbar"></div>
  </div>
  <div class="card">
    <el-button plain type="primary" @click="MessageSuccess">发布</el-button>
  </div>
</main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { createEditor, createToolbar } from '@wangeditor/editor'
import { useDebounceFn } from '@vueuse/core'
import {ElMessage} from "element-plus";

const value = ref('')

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: '请输入内容...'
  }
})

const emit = defineEmits(['update:modelValue'])

const editorElement = ref(null)
const toolbarElement = ref(null)
let editor = null
let toolbar = null

const handleChange = useDebounceFn(() => {
  const html = editor.getHtml()
  emit('update:modelValue', html)
}, 300)

onMounted(() => {
  // 创建编辑器
  editor = createEditor({
    selector: editorElement.value,
    html: props.modelValue || '<p><br></p>',
    config: {
      placeholder: props.placeholder,
      onChange: handleChange,
      // 其他配置
      MENU_CONF: {
        uploadImage: {
          server: '/api/upload-image'
          // 上传配置
        }
      }
    },
    mode: 'default' // 或 'simple'
  })

  // 创建工具栏
  toolbar = createToolbar({
    editor,
    selector: toolbarElement.value,
    config: {},
    mode: 'default'
  })
})

onBeforeUnmount(() => {
  if (editor) {
    editor.destroy()
    editor = null
  }
  if (toolbar) {
    toolbar.destroy()
    toolbar = null
  }
})

watch(() => props.modelValue, (newValue) => {
  if (editor && newValue !== editor.getHtml()) {
    editor.setHtml(newValue)
  }
})
const MessageSuccess = () => {
  ElMessage.success("发布成功！")
}
</script>

<style scoped>
@import "../CSS/BackStage/main.css";
</style>