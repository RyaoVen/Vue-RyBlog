<template>
  <div class="login-page">
    <!-- 背景球体 -->
    <div class="background">
      <div
          v-for="(sphere, index) in spheres"
          :key="index"
          class="sphere"
          :style="{
          width: `${sphere.size}px`,
          height: `${sphere.size}px`,
          left: `${sphere.x}vw`,
          top: `${sphere.y}vh`,
          background: sphere.color,
          animationDelay: `${sphere.delay}s`
        }"
      ></div>
    </div>

    <div class="container">
      <!-- 左侧内容 -->
      <div class="left-content" v-show="!isMobile">
        <div class="slogan-container">
          <div
              v-for="(slogan, sloganIndex) in slogans"
              :key="sloganIndex"
              class="slogan quote"
          >
            <span
                v-for="(char, charIndex) in slogan.text"
                :key="charIndex"
                class="char"
                :style="{ animationDelay: `${slogan.delay + charIndex * 100}ms` }"
            >
              {{ char }}
            </span>
          </div>
          <div
              class="slogan welcome"
              v-show="showWelcome"
          >
            <span
                v-for="(char, charIndex) in welcomeText"
                :key="charIndex"
                class="char"
                :style="{ animationDelay: `${welcomeDelay + charIndex * 100}ms` }"
            >
              {{ char }}
            </span>
          </div>
        </div>
      </div>

      <!-- 登录表单 -->
      <div class="login-container">
        <h2>登录</h2>
        <form @submit.prevent="handleSubmit">
          <div class="input-box" v-for="(field, index) in formFields" :key="index">
            <input
                :type="field.type"
                :required="field.required"
                v-model="formData[field.name]"
                @focus="handleInputFocus(index)"
                @blur="handleInputBlur(index)"
            >
            <label :for="field.name">{{ field.label }}</label>
            <span class="line" :style="{ transform: `scaleX(${lineStates[index] ? 1 : 0})` }"></span>
          </div>

          <div class="remember-forgot">
            <label>
              <input type="checkbox" v-model="formData.remember"> 记住密码
            </label>
            <a href="#" @click.prevent>忘记密码？</a>
          </div>

          <button @click="handleLogin">登录</button>

          <div class="register-link">
            <p>还没有账号？<a href="#" @click.prevent>立即注册</a></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/route/index-page.js";

export default {
  data() {
    return {
      formData: {
        username: '',
        password: '',
        remember: false
      },
      formFields: [
        { name: 'username', type: 'text', label: '用户名', required: true },
        { name: 'password', type: 'password', label: '密码', required: true }
      ],
      lineStates: [false, false],
      spheres: [],
      slogans: [
        { text: '关关难过关关过', delay: 1000 },
        { text: '人生何处不青山', delay: 2000 }
      ],
      welcomeText: '欢迎回来',
      welcomeDelay: 3000,
      showWelcome: false,
      isMobile: false
    }
  },
  mounted() {
    this.createSpheres();
    this.animateChars();
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkMobile);
  },
  methods: {
    createSpheres() {
      const sphereCount = 5;
      const colors = ['#45f3ff', '#ff4560', '#ffd700', '#9c27b0', '#00ff9d'];

      for (let i = 0; i < sphereCount; i++) {
        this.spheres.push({
          size: Math.random() * 200 + 150,
          x: Math.random() * 100,
          y: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 5
        });
      }
    },
    animateChars() {
      setTimeout(() => {
        this.showWelcome = true;
      }, 3500);
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    handleInputFocus(index) {
      this.lineStates[index] = true;
    },
    handleInputBlur(index) {
      if (!this.formData[this.formFields[index].name]) {
        this.lineStates[index] = false;
      }
    },
    handleLogin() {
      // 这里可以添加实际的登录逻辑
      console.log('登录数据:', this.formData);
      router.push('/admin/main');
    },
    handleSubmit() {
      this.handleLogin();
    }
  }
}
</script>

<style scoped>
/* 基础样式（与原 CSS 一致，添加 scoped 后的调整） */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa, #e4e9f2);
  overflow: hidden;
  position: relative;
  align-items: center;
  justify-content: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(80px);
  z-index: 0;
}

.sphere {
  position: absolute;
  border-radius: 50%;
  opacity: 0.6;
  animation: float 12s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(30%, 15%) scale(1.05);
  }
  50% {
    transform: translate(15%, 30%) scale(1.1);
  }
  75% {
    transform: translate(-15%, 15%) scale(1.05);
  }
}

.container {
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  z-index: 1;
  align-items: center;
  justify-content: center;
}

.left-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  position: relative;
}

.slogan-container {
  margin-bottom: 40px;
}

.quote {
  line-height: 1.8;
  margin-bottom: 20px;
  position: relative;
  font-size: 2em;
  font-weight: 500;
  color: #555;
  font-style: italic;
}

.quote::before, .quote::after {
  content: '"';
  font-size: 1.5em;
  color: #458eff;
  position: absolute;
}

.quote::before {
  left: -20px;
  top: -10px;
}

.quote::after {
  right: -10px;
  bottom: -10px;
}

.welcome {
  font-size: 3.5em;
  font-weight: 700;
  color: #458eff;
  margin-top: 20px;
}

.char {
  display: inline-block;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.5s forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-container {
  width: 380px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  z-index: 1;
  margin: auto;
  margin-right: 5%;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .left-content {
    display: none;
  }

  .login-container {
    width: 90%;
    margin: auto;
    margin-top: 40px;
  }
}

h2 {
  font-size: 2em;
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}

.input-box {
  position: relative;
  width: 100%;
  height: 50px;
  border-bottom: 2px solid #ccc;
  margin: 30px 0;
}

.input-box label {
  position: absolute;
  top: 50%;
  left: 5px;
  transform: translateY(-50%);
  color: #666;
  pointer-events: none;
  transition: .5s;
}

.input-box input:focus ~ label,
.input-box input:valid ~ label {
  top: -5px;
  color: #458eff;
}

.input-box .line {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #458eff;
  transform: scaleX(0);
  transition: transform .5s;
}

.input-box input {
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 1em;
  color: #333;
  padding: 0 35px 0 5px;
}

.remember-forgot {
  font-size: 0.9em;
  color: #666;
  font-weight: 500;
  margin: -15px 0 15px;
  display: flex;
  justify-content: space-between;
}

.remember-forgot label input {
  accent-color: #458eff;
  margin-right: 3px;
}

.remember-forgot a {
  color: #666;
  text-decoration: none;
}

.remember-forgot a:hover {
  text-decoration: underline;
}

button {
  width: 100%;
  height: 40px;
  background: linear-gradient(90deg, #458eff, #6aa3ff);
  border: none;
  outline: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 1.1em;
  color: #fff;
  font-weight: 600;
  transition: .5s;
  box-shadow: 0 0 15px rgba(69, 142, 255, 0.4);
}

button:hover {
  box-shadow: 0 0 25px rgba(69, 142, 255, 0.6);
}

.register-link {
  font-size: 0.9em;
  color: #666;
  text-align: center;
  margin: 25px 0 10px;
}

.register-link p a {
  color: #458eff;
  text-decoration: none;
  font-weight: 600;
}

.register-link p a:hover {
  text-decoration: underline;
}
.login-page{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
  gap: 100px;
}
</style>