import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import './asset/main.css'
import router from '../src/route/index-page.js'

const app = createApp(App);
app.use(ElementPlus);
app.use(router)
app.mount('#app');
