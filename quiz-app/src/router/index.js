import {
    createRouter, createWebHashHistory,
} from 'vue-router'

const routes = [
    {
        name: 'QuizApp',
        path: '/quiz-app',
        component: () => import('@/components/Quiz-App')
    }, 
    {
        // 对 404 配置
        // path:'/:pathMatch(.*)',
        path:'/',
        redirect: '/quiz-app',
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes,
})

export default router