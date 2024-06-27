<style lang="less" scoped>
@import '~@/styles/color.less';

.user-info-wrapper {
  background: red;
  padding: 20px;
}


</style>
<template>
  <div class="container">

    <h2>获取手机号</h2>

    <get-phone-number>
      调用者传递进来的一堆文本信息
    </get-phone-number>







    <h2>微信授权</h2>


    <get-user-info @success="onGetUserInfo">
      <div class="user-info-wrapper">
        调用者传递进来的一堆文本信息: 昵称头像
      </div>
    </get-user-info>





    <div class="user-info">
      <p>{{nickName}}</p>
      <img :src="avatar" alt="">
    </div>

    <get-phone-number @success="onGetUserInfo">

      <div class="login-btn">
        获取手机号
      </div>
    </get-phone-number>


    <p @click="onGetLocation">点我 -----地图选择</p>
    <p>{{address}}</p>

  </div>
</template>
<script>
  import GetPhoneNumber from '@/components/getPhoneNumber'
  import GetUserInfo from '@/components/GetUserInfo'
  export default {
    name: '',
    components: {
      GetPhoneNumber,
      GetUserInfo
    },
    data () {
      return {
        nickName: '',
        avatar: '',
        address: ''
      }
    },
    mounted () {},
    methods: {
      onGetUserInfo (data) {
        
        // let rawData = e.mp.detail.rawData || ''
        // if (rawData) {
        //   rawData = JSON.parse(rawData)
        //   
        //   this.nickName = rawData.nickName
        //   this.avatar = rawData.avatarUrl
        // }

      },


      onGetLocation () {
        let that = this;

        

        wx.getLocation({
          type: 'gcj02',
          success (res) {
            // 

   const latitude = res.latitude
   const longitude = res.longitude
   wx.chooseLocation({
     latitude,
     longitude,
     scale: 18,
     name: '可自定义的位置名称',
     success (res) {
      // 
      that.address = res.name
     },
     fail (err) {
      
     }
   })



          },
          fail (err) {
            
          }
        })


      }


























    }
  }
</script>