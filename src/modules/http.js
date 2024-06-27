import Service from '@/config/service'
import qs from 'querystring'
let defaultTimeout = 1000 * 25;
let timeout = (ms = defaultTimeout) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('timeout')
    }, ms)
  })
}
/* get 请求简单封装 */
let get = (api, query, type=0) => {
  let session_key = wx.getStorageSync("session_key");
  let url = type == 1 ? Service[process.env.NODE_ENV].baseUrlXD + api : Service[process.env.NODE_ENV].baseUrl + api;
  let p = new Promise((resolve, reject) => {
    wx.request({
      url: url + `?${qs.stringify(query)}`,
      header: {
        session_key: session_key,
      },
      success(data) {
        resolve(data);
      },
      fail(err) {
        reject(err);
      }
    })
  })
  return Promise.race([p, timeout()]).then(res => {
    if (res === 'timeout') {
      return Promise.reject('timeout')
    }
    return Promise.resolve(res);
  })
}
let post = (api, query, type=0) => { 
  let session_key = wx.getStorageSync("session_key");
  // session_key =  123;
  let p = new Promise((resolve, reject) => {
    //let url = type == 1 ? Service.development.baseUrlXD + api : Service.development.baseUrl + api;
    let url = type == 1 ? Service[process.env.NODE_ENV].baseUrlXD + api : Service[process.env.NODE_ENV].baseUrl + api;
    wx.request({
  //    url: Service[process.env.NODE_ENV].baseUrl + api,
      url: url,
      method: 'POST',
      data: query,
      header: {
        session_key: session_key
      },
      success(data) {
        /* 用户没登录先清空失效的 token */
        if (data.data.code == 100000) {
          wx.clearStorageSync();
          // wx.reLaunch({
          //   url: '/pages/login/main'
          // })
          wx.navigateTo({
            url: '/pages/login/main'
          })
        }
        resolve(data);
      },
      fail(err) {
        reject(err);
      }
    })
  })
  return Promise.race([p, timeout()]).then(res => {
    if (res === 'timeout') {
      return Promise.reject('timeout')
    }
    return Promise.resolve(res);
  })
}
export default {
  get,
  post
}