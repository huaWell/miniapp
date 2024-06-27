export default (count = 9) => {
  return new Promise((resolve, reject) => {
    wx.chooseImage({
      sizeType: ['compressed'],
      count,
      success(res) {
        resolve(res.tempFilePaths)
      },
      fail(err) {
        
        reject(err)
      }
    })
  })
}