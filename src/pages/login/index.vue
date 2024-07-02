<style lang="less" scoped>
@import '~@/styles/color.less';
.login-container {
  padding: 20px 15px;
  .welcome {
    // padding-top: 20px;
  p {
    line-height: 36px;
    &:first-child {
      // color: blue
      font-size: 24px;
    };
    &:nth-child(2) {
      // color: red;
      font-size: 24px;
      font-weight: bold;
    }
    &:nth-child(3) {
      color: #000;
      opacity: .6;
    };
  }

  }

  .login-btn {

        background: #00C35A;
        border-radius: 8px;
        color: white;
        // flex: 1;
        font-size: 15px;
        line-height: 15px;
        text-align: center;
        padding: 15px 0;
        width: 100%;

  }
  .cancel-btn {
    text-align: center;
    margin-top: 10px;
    color: #ACADBB;
    font-size: 15px;
  }

  .background-container{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 48px 64px;
      box-sizing: border-box;
    .background-image{
      width: 240px;
      height: 240px;
      display: block;
    }
  }


}
</style>
<template>
  <div class="login-container" @click="hideTip">

    <div class="welcome">
      <p>
        欢迎使用 
      </p>
      <p>
        出圈儿闲置交易平台
      </p>
      <p>
        闲置资源更流通
      </p>
    </div>

    <div class="background-container">
      <img class="background-image"  alt="">
    </div>

<!-- 

    <get-user-info @success="onGetUserInfo">
      <div class="login-btn">
        微信授权登录
      </div>
    </get-user-info>
 -->

    <div>
      <get-phone-number @success="onGetPhoneCode">
          <div class="login-btn">
            <!-- 获取手机号 -->
            微信授权登录
          </div>
      </get-phone-number>
    </div>
 

    <div class="cancel-btn" @click="onBack">暂不登录</div>

  </div>
</template>
<script>


  let getWXLoginCode = () => {
    return new Promise((resolve, reject) => {
      wx.login({
        withCredentials: true,
        success (res) {
          resolve(res.code)
        },
        fail (err) {
          reject(err)
        }
      })
    })
  }




  import GetPhoneNumber from '@/components/getPhoneNumber'
  import GetUserInfo from '@/components/GetUserInfo'

  export default {
    name: 'Login',
    components: {
      GetUserInfo,
      GetPhoneNumber
    },
    data () {
      return {
         code: "",
         nickName:'',
         avatar: '',
         gender: 0,
         phoneCode: '',
         phone: '',
         session_key:''
      }
    },
    mounted () {},
    methods: {
      // onGetUserInfo (data) {
      //   this.code = data.code;
      //   this.nickName = data.nickName;
      //   this.avatar = data.avatar;
      //   this.gender = data.gender;
      // },
      async onGetPhoneCode(data) {


        // 
        let code = await getWXLoginCode();
        

        // let res = await this.R.fetchGetPhone(data.code);

        let param = {
          code,
          // phone: res.data.data,
          headImg: '',
          name: '',
          sex: ''
        }

        

        let login_res = await this.R.fetchLogin(param);
        
        // 控制我的tip
        this.$store.commit('USER_IS_FIRST_LOGIN', login_res.data.data.firstLogin);
         // 控制发布tip
        this.$store.commit('USER_IS_FIRST_LOGIN_GUIDE', login_res.data.data.firstLogin);

        this.session_key = login_res.data.data.value;
        
        wx.setStorageSync('user_info', JSON.stringify({name: this.nickName, avatar: this.avatar}));
        wx.setStorageSync('session_key', this.session_key);

        this.$store.commit('USER_IS_LOGIN', parseInt(Math.random() * 1000))



        let scene = ''
        if (wx.getStorageSync('circleId')) {
          scene = `circleId${wx.getStorageSync('circleId')}`
        }
        if (wx.getStorageSync('productId')) {
          scene = `productId${wx.getStorageSync('productId')}`
          wx.removeStorageSync('productId')
        }


        wx.reLaunch({
          url: `/pages/home/main?scene=${scene}`
        })
      },
      onBack () {
        this.$back()
      },
      hideTip(){
        this.showTip = false;
      }
    }
  }
</script>