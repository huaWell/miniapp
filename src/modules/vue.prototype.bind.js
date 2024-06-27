import Vue from 'vue'
import isPlainObj from '@/utils/isPlainObj'

import confirm from './confirm'
import toast from './toast'




/* helpers */
let setTitle = title => {
  wx.setNavigationBarTitle({
    title
  })
}

let push = url => {
  wx.navigateTo({
    url
  })
}

let back = url => {
  wx.navigateBack({
    delta: 1
  })
}


let switchTab = url => {
  wx.switchTab({
    url: url
  })
}

let afterLogin = (cb) => {
	
  if (wx.getStorageSync('session_key')) {
    cb();
  } else {
    wx.navigateTo({
      url: '/pages/login/main'
    })
  }

}


/* decorators */


/* utils*/
Vue.prototype.isPlainObj = isPlainObj

Vue.prototype.$setTitle = setTitle
Vue.prototype.$push = push
Vue.prototype.$back = back
Vue.prototype.$switchTab = switchTab

Vue.prototype.$confirm = confirm
Vue.prototype.$toast = toast

Vue.prototype.afterLogin = afterLogin
