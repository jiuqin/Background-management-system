// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入vuex
import store from './store'

//引入路由封装中导出的路由对象
 import router from './router/index'

 //引入http的请求封装
 import $axios from './http'
 Vue.prototype.$axios=$axios

// 引入接口地址
import $api from './http/api'
Vue.prototype.$api=$api;

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


//首页--使用动态图表
import myCharts from './assets/myCharts.js'
Vue.use(myCharts)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store,
  components: { App },
  template: '<App/>'
})
