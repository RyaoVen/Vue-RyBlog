<template>
  <div class="article-comments" ref="commentsRef">
    <h3 class="comments-title">评论 ({{ comments.length }})</h3>
    
    <!-- 评论输入框 -->
    <div class="comment-form">
      <el-input
        v-model="commentContent"
        type="textarea"
        rows="3"
        placeholder="写下你的评论..."
      />
      <el-button type="primary" @click="submitComment" :disabled="!commentContent.trim()">
        发表评论
      </el-button>
    </div>

    <!-- 评论列表 -->
    <div class="comments-list" v-if="comments.length > 0">
      <div v-for="(comment, index) in comments" :key="index" class="comment-item">
        <div class="comment-header">
          <el-avatar :src="comment.avatar" />
          <div class="comment-info">
            <span class="author">{{ comment.author }}</span>
            <span class="date">{{ formatDate(comment.date) }}</span>
          </div>
        </div>
        
        <div class="comment-content">{{ comment.content }}</div>
        
        <div class="comment-actions">
          <el-button text @click="likeComment(index)">
            <el-icon><ThumbUp /></el-icon>
            {{ comment.likes }}
          </el-button>
          <el-button text @click="replyToComment(index)">
            <el-icon><ChatDotRound /></el-icon>
            回复
          </el-button>
        </div>

        <!-- 回复列表 -->
        <div class="replies" v-if="comment.replies && comment.replies.length">
          <div v-for="(reply, replyIndex) in comment.replies" :key="replyIndex" class="reply-item">
            <div class="reply-header">
              <el-avatar :src="reply.avatar" size="small" />
              <div class="reply-info">
                <span class="author">{{ reply.author }}</span>
                <span class="reply-to">回复 @{{ reply.replyTo }}</span>
                <span class="date">{{ formatDate(reply.date) }}</span>
              </div>
            </div>
            <div class="reply-content">{{ reply.content }}</div>
          </div>
        </div>

        <!-- 回复表单 -->
        <div class="reply-form" v-if="replyingTo === index">
          <el-input
            v-model="replyContent"
            type="textarea"
            rows="2"
            placeholder="回复评论..."
          />
          <div class="reply-actions">
            <el-button @click="cancelReply">取消</el-button>
            <el-button type="primary" @click="submitReply(index)" :disabled="!replyContent.trim()">
              回复
            </el-button>
          </div>
        </div>
      </div>
    </div>
    
    <div class="no-comments" v-else>
      暂无评论，快来发表第一条评论吧！
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChatDotRound, ThumbUp } from '@element-plus/icons-vue'

const props = defineProps({
  articleId: {
    type: [String, Number],
    required: true
  }
})

const comments = ref([])
const commentContent = ref('')
const replyContent = ref('')
const replyingTo = ref(null)

const formatDate = (date) => {
  return new Date(date).toLocaleString('zh-CN')
}

const submitComment = () => {
  if (!commentContent.value.trim()) return
  
  comments.value.unshift({
    author: '当前用户',
    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    content: commentContent.value,
    date: new Date(),
    likes: 0,
    isLiked: false,
    replies: []
  })
  
  commentContent.value = ''
}

const likeComment = (index) => {
  const comment = comments.value[index]
  if (!comment.isLiked) {
    comment.likes++
    comment.isLiked = true
  } else {
    comment.likes--
    comment.isLiked = false
  }
}

const replyToComment = (index) => {
  replyingTo.value = index
  replyContent.value = ''
}

const cancelReply = () => {
  replyingTo.value = null
  replyContent.value = ''
}

const submitReply = (index) => {
  if (!replyContent.value.trim()) return
  
  const comment = comments.value[index]
  comment.replies.push({
    author: '当前用户',
    avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    content: replyContent.value,
    date: new Date(),
    replyTo: comment.author
  })
  
  replyContent.value = ''
  replyingTo.value = null
}
</script>

<style scoped>
.article-comments {
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.comments-title {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
}

.comment-form {
  margin-bottom: 30px;
}

.comment-form .el-button {
  margin-top: 10px;
}

.comment-item {
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.comment-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.comment-info {
  margin-left: 10px;
}

.author {
  font-weight: 500;
  margin-right: 10px;
}

.date {
  color: #999;
  font-size: 14px;
}

.comment-content {
  margin: 10px 0;
  line-height: 1.6;
}

.comment-actions {
  display: flex;
  gap: 15px;
}

.replies {
  margin-left: 40px;
  margin-top: 15px;
}

.reply-item {
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
}

.reply-header {
  display: flex;
  align-items: center;
}

.reply-info {
  margin-left: 10px;
  font-size: 14px;
}

.reply-to {
  color: #409EFF;
  margin: 0 5px;
}

.reply-content {
  margin-top: 5px;
  font-size: 14px;
}

.reply-form {
  margin-top: 15px;
  margin-left: 40px;
}

.reply-actions {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.no-comments {
  text-align: center;
  color: #999;
  padding: 30px 0;
}
</style>