// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Api from '@/api'
import App from './App'
import router from './router'
// 引入element-ui ，并使用默认风格
import ElementUI from 'element-ui'
import '../static/js/jquery-1.7.2.min.js'
import 'element-ui/lib/theme-chalk/index.css'
import utils from '@/utils/util'
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http = Api
Vue.prototype.$utils = utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
