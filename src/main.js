import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";


Vue.config.productionTip = false
Vue.prototype.$ajax = axios

new Vue({
  router,
  render: h => h(App),
  //挂载函数
}).$mount('#app')

Vue.http.interceptors.push((request,next)=>{
  //request.credentials = true; // 接口每次请求会跨域携带cookie
  //request.method= 'POST'; // 请求方式（get,post）
  request.headers.set('Access-Control-Allow-Origin','*') // 请求headers携带参数
  
  next(function(response){
   return response;
  
  });
 })

