import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/filter/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  //挂载函数
}).$mount('#app')

