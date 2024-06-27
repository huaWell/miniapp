/* 
判断我们是否调用过授权, 授权是否通过
返回值:
pending 未调用过
rejected 调用过, 但是未通过
resolved 调用过, 且授权了
*/

export default scope => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        
        if (res.authSetting[scope]) {
          resolve('resolved')
        } else {
          if (typeof res.authSetting[scope] == 'undefined') {
            resolve('pending')
          } else {
            resolve('rejected')
          }
        }
      },
      fail (err) {
        resolve('rejected')
      }
    })
  })
}
