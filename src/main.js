import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './asset/main.css'
import router from './route/index-page.js'
//引入Pinia
import { createPinia} from 'pinia'
// src/main.js
import '@wangeditor/editor/dist/css/style.css' // 导入核心样式（这就够了）
// 无需再导入 theme/default.css（v5 已合并）
//创建Pinia
const pinia = createPinia()
//安装Pinia

const app = createApp(App);
app.use(pinia)
app.use(ElementPlus);
app.use(router)

app.mount('#app');
