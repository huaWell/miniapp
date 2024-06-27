<style lang="less" scoped>
@import '~@/styles/color.less';
</style>
<template>
  <web-view :src="h5Url"></web-view>
</template>
<script>
let random = () => {
  return parseInt(Math.random() * 10000)
}
import qs from 'querystring'
export default {
  name: 'webview',
  components: {},
  data() {
    return {
      h5Url: '',
    }
  },
  onShow() {
    /* 如果没有登录, 则直接跳转登录 */
    if (!wx.getStorageSync('session_key')) {
      this.$push('/pages/login/main');
      return;
    }

    if (wx.getStorageSync('userLocation')) {
      this.setURL()
    }
  },
  methods: {
    setURL() {
      let getLocation = () => {
        if (wx.getStorageSync('userLocation')) {
          /* 获取用户定位 */
          let t = {}
          try {
            t = JSON.parse(wx.getStorageSync('userLocation'))
          } catch (err) {
            t = {}
          }
          wx.removeStorageSync('userLocation')
          return t;
          /* 重新设置 url */
        }
        return {}
      }
      let location = getLocation()
      let getCircleId = () => {
        let circleId = wx.getStorageSync('circleId')
        wx.removeStorageSync('circleId')
        return circleId
      }
      this.h5Url = `https://www.xzcricle.com/h5/?v=${random()}/#?${qs.stringify({
        latitude: location.latitude,
        longitude: location.longitude,
        sessionKey: wx.getStorageSync('session_key'),
        circleId: getCircleId()
      })}`

      console.log(this.h5Url)
      
    }
  }
}
</script>