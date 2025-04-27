//Vue组件的引用
import {createRouter, createWebHistory} from "vue-router"

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
            component: () => import('../page/mainViews.vue')
        },
        {
            name:'passage',
            path:'/passage',
            component: () => import('@/page/Passage.vue')
        },
        {
            path:'/',
            redirect:'/home'
        },
        {
            name:'selfLog',
            path:'/selfLog',
            component: () => import('@/page/selfLog.vue')
        },
        {
            name:'archive',
            path:'/archive',
            component: () => import('@/page/archive.vue')
        },
        {
            name:'myWork',
            path:'/myWork',
            component: () => import('@/page/myWork.vue')
        },
        {
            name:'myTools',
            path:'/myTools',
            component: () => import('@/page/myTools.vue')
        },
        {
            name:'myself',
            path:'/myself',
            component: () => import('@/page/myself.vue')
        },
        // 添加文章详情页路由
        {
            name: 'ArticleDetail',
            path: '/article/:id',
            component: () => import('@/components/ArticleDetail.vue')
        },
        // 添加笔记详情页路由
        {
            name: 'NoteDetail',
            path: '/note/:id',
            component: () => import('@/components/ArticleDetail.vue') // 复用同一个组件
        }
    ]
})

//暴露
export default router