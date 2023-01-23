import router from '../router/index.js'

const whiteList = ["/login"];

// 全局路由守卫，如果不是登录状态，则到登录页面
router.beforeEach((to, from, next) => {
    console.info('拦截器')
    const token = localStorage.getItem("token")
    // 验证token存在，则进入该页面
    console.log('token:' + token)
    if (token != 'undefined') {
        next();
    } else { //否则进入不需要验证token界面,（这里进入的是登录页面）
        // console.log(to.path)
        // console.log(whiteList.indexOf(to.path))
        // console.log('token不为空2')
        if (to.path === "/login" || whiteList.indexOf(to.path) !== -1) {
            next();
        }else{
            next('/login')
        } 
    }
});
