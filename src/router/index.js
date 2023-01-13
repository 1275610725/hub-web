import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Admin from '@/views/admin'
import Index from '@/views/admin/index'
import Fund from '@/views/admin/fund'
import Stock from '@/views/admin/stock'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
        path: '*',
        redirect: '/login',
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/',
        name: 'admin',
        component: Admin,
        children: [{
            path: 'index',
            name: 'index',
            component: Index
        },
            {
                path: 'finance/fund',
                name: 'finance/fund',
                component: Fund
            },
            {
                path: 'finance/stock',
                name: 'finance/stock',
                component: Stock
            },
            {
                path: 'sys/user',
                name: 'sys/user',
                component: Fund,
            },
            {
                path: 'sys/setting',
                name: 'sys/setting',
                component: Stock,
            }
        ]
    }]
})