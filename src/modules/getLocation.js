let latitude = ''
let longitude = ''
let callQueue = []
let getLocation = (reset = false) => {
  return new Promise((resolve, reject) => {
    if (reset) {
      latitude = ''
      longitude = ''
    }
    if (latitude && longitude) {
      resolve({
        latitude,
        longitude
      })
      return
    }
    /* 说明已经有人调用过了, 那我们就只要把 resolve 放到队列里去就可以  */
    if (callQueue.length) {
      callQueue.push(resolve)
    } else {
      callQueue.push(resolve)
      wx.getLocation({
        type: 'gcj02',
        /* 用于配套和后面的 chooseLocation 使用, 莫修改*/
        success(res) {
          console.log(res)
          latitude = res.latitude
          longitude = res.longitude
          callQueue.forEach(_resolve => {
            _resolve({
              latitude,
              longitude
            })
          })
          callQueue = [];
        },
        fail(err) {
          
          /* 如果用户拒绝授权, 我们也走 resolve 流程, 只是返回个空值而已 */
          callQueue.forEach(_resolve => {
            _resolve({})
          })
          callQueue = [];
        },
        complete() {
          
        }
      })
    }
  })
}
let setLocation = (lat, long) => {
  latitude = lat;
  longitude = long;
}

export {
  getLocation,
  setLocation
}