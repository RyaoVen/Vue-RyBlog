//Vue组件的引用
import {createRouter, createWebHistory} from "vue-router"
import mianViews from '../page/mainViews.vue'
import Passage from "@/page/Passage.vue";

//创建路由器
const router = createRouter({
    //路由模式的设定
    history:createWebHistory(),
    //管理路由
    routes:[  //一个一个的路由规则
        { //路由的命名
            name:'home',
            //路径
            path:'/home',
            //组件绑定
            component:mianViews
        },
        {
            name:'passage',
            path:'/passage',
            component:Passage
        },
        {
            path:'/',
            redirect:'/home'
        }

    ]
})

//暴露
export default router