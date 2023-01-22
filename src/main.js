import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/filter/index.js'
import showToast from '@/components/toast/index'

Vue.config.productionTip = false
Vue.use(showToast);
new Vue({
  router,
  render: h => h(App),
  //挂载函数
}).$mount('#app')

