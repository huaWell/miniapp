export default ({ latitude, longitude, name = '' }) => {
  return new Promise((resolve, reject) => {
    wx.chooseLocation({
      latitude,
      longitude,
      name: name,
      scale: 18,
      success(res) {
        resolve(res)
      },
      fail(err) {
        
        // resolve('')
        reject(err)
      }
    })
  })
}
