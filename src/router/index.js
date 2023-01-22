import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Hub from '@/views/hub'

Vue.use(Router);

export default new Router({
    mode: 'history',
    baseURL: "/api",
    routes: [{
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
    }]
})