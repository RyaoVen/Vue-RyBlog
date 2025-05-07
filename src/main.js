import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './asset/main.css'
import router from './route/index-page.js'
//引入Pinia
import { createPinia} from 'pinia'
//创建Pinia
const pinia = createPinia()
//安装Pinia

const app = createApp(App);
app.use(pinia)
app.use(ElementPlus);
app.use(router)
app.mount('#app');
