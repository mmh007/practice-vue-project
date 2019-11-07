// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 自定义数据库
// import apiConfig from './api'

// 引入ui库
import echarts from 'echarts'
import ElementUI from 'element-ui'

// 引入基础样式
import './assets/style/app.less'
import 'element-ui/lib/theme-chalk/index.css'


Vue.use(echarts)
Vue.use(ElementUI)
// Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false

// apiConfig()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})