<style lang="less">
.get-phone-number {}

</style>
<template>
  <div class="get-user-info">
    <button class="button--reset" open-type="getUserInfo" @tap="onGetUserInfo">
      <slot></slot>
    </button>
  </div>
</template>
<script>
export default {
  name: 'getUserInfo',
  components: {},
  data() {
    return {}
  },
  mounted() {},
  methods: {
    // onGetUserInfo(e) {
    //   let rawData = e.mp.detail.rawData || ''
    //   if (rawData) {
    //     rawData = JSON.parse(rawData)
    //     
    //     this.$emit('success', {
    //       nickName: rawData.nickName,
    //       avatar: rawData.avatarUrl
    //     })
    //   }
    // },
    async onGetUserInfo(){
      let _this = this;
       wx.getUserProfile({
        desc: '用于完善会员资料',
        success: async (res) => {
          let rawData = res.rawData || '';
          
          rawData = JSON.parse(rawData);        
          if (rawData) {
            wx.login({
              withCredentials:true,
              success(res) {
                let code = res.code;
                
                _this.$emit('success', {
                  nickName: rawData.nickName,
                  avatar: rawData.avatarUrl,
                  code: code,
                  gender: rawData.gender
                })
              }
            })
          }
        },
        fail(err){
          
        }
      })
    }
  }
}

</script>
