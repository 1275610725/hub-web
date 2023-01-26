import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Hub from '@/views/hub'

Vue.use(Router);

export default new Router({
    mode: 'history',
    baseURL: "/api",
    routes: [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/hub',
        name: 'hub',
        component: Hub,
        // meta:{
        // 	requireAuth:true //此时表示进入这个路由是需要登录的
        // }
    }, // 默认重定向
    {
        path: '/',
        redirect: '/hub',
    },
    // 默认404、一定要放在最下面 因为先走上面的代码 如上代码没有匹配到 则渲染 * 号 进入404
    {
        path: '*',
        name: 'error',
        component: () => import('@/views/404'),
    }]
})