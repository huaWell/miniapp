let toast = (type) => {
  return (text) => {
    wx.showToast({
      title: text.toString(),
      icon: type,
      duration: 1500
    })
  }
}
export default {
  info: toast('none'),
  success: toast('success'),
  fail: toast('error')
}
