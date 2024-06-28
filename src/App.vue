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
          //this.$store.dispatch('fetchChatList')
          //this.createWebSocket();
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
    // userIsLogin() {
    //   return this.$store.state.userIsLogin
    // }
  },
  onShow() {
  },
  mounted() {
    // const updateManager = wx.getUpdateManager()
    // updateManager.onCheckForUpdate(function(res) {})
    // updateManager.onUpdateReady(function() {
    //   wx.showModal({
    //     title: '更新提示',
    //     content: '新版本已经准备好，是否重启应用？',
    //     success(res) {
    //       if (res.confirm) {
    //         updateManager.applyUpdate()
    //       }
    //     }
    //   })
    // })
    // updateManager.onUpdateFailed(function(res) {
    //   wx.showModal({
    //     title: '更新失败',
    //     content: '新版本下载失败，请删除当前小程序，重新搜索下载～'
    //   })
    // })
    // this.getUserLocation();
    // if (wx.getStorageSync('session_key')) {
    //   this.$store.dispatch('fetchChatList')
    // }
  },
  methods: {
  }
}

</script>
