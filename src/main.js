import Vue from 'vue'
import App from './App'

import '@/styles/common.less'
import '@/styles/icon.less'
import '@/styles/vant.less'
import VueECharts from 'vue-echarts'
import * as echarts from 'echarts'

Vue.config.productionTip = false
App.mpType = 'app'

import store from '@/vuex/store'
Vue.prototype.$store = store

import http from '@/modules/http'
Vue.prototype.$http = http;


import '@/modules/vue.prototype.bind.js'

import R from '@/modules/request'
Vue.prototype.R = R

Vue.component('v-chart', VueECharts)
Vue.prototype.$echarts = echarts



const app = new Vue({
  ...App,
  // store
})

app.$mount()
