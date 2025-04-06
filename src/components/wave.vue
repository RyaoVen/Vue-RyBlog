<template>
  <!-- 路由过渡容器 -->
  <router-view v-slot="{ Component }">
    <transition
        name="multi-transition"
        mode="out-in"
        @before-enter="beforeEnter"
        @after-enter="afterEnter"
    >
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script setup>
// 动画生命周期控制
const beforeEnter = (el) => {
  el.style.opacity = 0
  el.style.transform = 'translateY(20px)'
}

const afterEnter = (el) => {
  el.style.transform = 'none'
}
</script>

<style>
/* 复合过渡效果 */
.multi-transition-enter-active {
  animation: slideIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.multi-transition-leave-active {
  animation: slideOut 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOut {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.95);
  }
}

/* 兼容现代浏览器 */
@supports (backdrop-filter: blur(10px)) {
  .multi-transition-enter-active::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(10px);
    z-index: -1;
  }
}
</style>