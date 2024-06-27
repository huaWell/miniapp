<style>
/*page {
  height: 100%;
  padding-bottom: calc(env(safe-area-inset-bottom) + 50px);
}*/
</style>
<script>
import { getLocation, setLocation } from '@/modules/getLocation'
import checkAuthSetting from '@/modules/checkAuthSetting'
import Service from '@/config/service'
let connectTimer = null;
let pingpongTimer = null;
export default {
  name: 'App',
  watch: {
    userIsLogin(n) {
      // 
      if (wx.getStorageSync('session_key')) {
        if (!this.isOpen) {
          this.$store.dispatch('fetchChatList')
          this.createWebSocket();
        }
      }
    }
  },
  data() {
    return {
      isOpen: false,
      reconnectTimes: 0
    }
  },
  computed: {
    userIsLogin() {
      return this.$store.state.userIsLogin
    }
  },
  onShow() {
    if (wx.getStorageSync('session_key')) {
      if (!this.isOpen) {
        this.createWebSocket();
      }
    }
    let pingpong = () => {
      clearTimeout(pingpongTimer)
      pingpongTimer = setTimeout(() => {
        clearTimeout(pingpongTimer)
        // 
        if (!this.isOpen) {
          if (this.reconnectTimes > 10) {
            this.reconnectTimes = 0;
            return
          }
          this.reconnectTimes++
          this.createWebSocket();
        }
        pingpong()
      }, 2000)
    }
    pingpong()
  },
  mounted() {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function(res) {})
    updateManager.onUpdateReady(function() {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function(res) {
      wx.showModal({
        title: '更新失败',
        content: '新版本下载失败，请删除当前小程序，重新搜索下载～'
      })
    })
    this.getUserLocation();
    if (wx.getStorageSync('session_key')) {
      this.$store.dispatch('fetchChatList')
    }
  },
  methods: {
    async getUserLocation() {
      let that = this;
      try {
        let locationSetting = await checkAuthSetting('scope.userLocation')
        if (locationSetting == 'rejected') {
          await this.$confirm({
            title: '提示',
            content: '尚未开启定位, 是否开启'
          }).then(res => {
            wx.openSetting({
              success: function(res1) {
                // 当重新授权地理位置时，重置内存经纬度,重新获取
                getLocation(true).then(res2 => {
                  // 重新获取位置address
                  that.R.fetchLocationName({ lat: res2.latitude, lng: res2.longitude }, true).then(res3 => {
                    wx.reLaunch({
                      url: '/pages/home/main'
                    })
                  })
                });
              }
            })
          }).catch(err => {
            this.$toast.fail('你又一次拒绝了我们')
          })
        } else {
          let res = await getLocation();
        }
      } catch (err) {}
    },
    async createWebSocket() {
      try {
        let socketTask = null;
        let _createWebSocket = () => {
          
          return new Promise((resolve, reject) => {
            socketTask = wx.connectSocket({
              url: Service[process.env.NODE_ENV].wss + '/websocket/chat',
              header: {
                session_key: wx.getStorageSync('session_key')
              },
              success(res) {
                resolve(socketTask)
              },
              fail(err) {
                reject(err)
              }
            });
          })
        }
        await _createWebSocket();
        this.$store.commit('SET_SOCKET_TASK', socketTask)
        socketTask.onOpen(res => {
          
          this.isOpen = true;
        })
        socketTask.onClose(res => {
          
          this.isOpen = false;
          clearTimeout(connectTimer)
          connectTimer = setTimeout(() => {
            clearTimeout(connectTimer)
            /* 断开了, 尝试重新连接 */
            this.createWebSocket();
          }, 2000)
        })
        socketTask.onError(res => {})
        /* 收到信息 */
        socketTask.onMessage(res => {
          // 
          
          try {
            let result = res.data;
            result = JSON.parse(result)
            
            if (result.action == 'receiveChat') {
              this.$store.dispatch('updateChatList', result.data)
              try {
                /* 收到信息之后, 先看看当前页面是不是在聊天列表页面, 不在的话, 就要展示一个红点 */
                let currentPage = this.$mp.appOptions.path;
                let doNotShowRedDots = ['/pages/message/main', '/pages/chat/main']
                if (doNotShowRedDots.indexOf(currentPage) == -1) {
                  wx.showTabBarRedDot({
                    index: 3
                  })
                }
              } catch (err) {
              }
            }
            if (result.action == 'sendChatResult') {
              this.$store.dispatch('fetchChatList')
            }
          } catch (err) {
            
          }
        })
      } catch (err) {}
    },
  }
}

</script>
