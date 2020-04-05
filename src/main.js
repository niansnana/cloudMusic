import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/stylus/resetvant.styl' // 重置Vant样式
import * as filters from './filters/index'
import '@/plugin/vant.js'
import api from '@/api'
Vue.prototype.$api = api

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
