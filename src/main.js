import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局的样式文件
import './style/index.less'
import Vant from 'vant'
import 'vant/lib/index.css'
// 使用 lib-flexible 动态设置 REM 基准值（html 标签的字体大小）
import 'amfe-flexible'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
