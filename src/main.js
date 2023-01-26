import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/filter/index.js'
import ElementUI from 'element-ui'; // 导入 elementUI
import 'element-ui/lib/theme-chalk/index.css'; // 导入 css
import showToast from '@/components/toast/index'

Vue.use(ElementUI);
Vue.use(showToast);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  //挂载函数
}).$mount('#app')

