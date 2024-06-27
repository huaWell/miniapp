<style lang="less" scoped>
@import '~@/styles/color.less';

.wode-container {
  .header-wrapper {

    display: flex;
    align-items: center;
    padding: 0 16px;
    padding-top: 20px;

    .left {
      .name {
        font-size: 30px;
        font-weight: bold;
      }

      .desc {
        font-size: 14px;
        color: #4F5077;
        margin-top: 8px;
      }
    }

    .avatar-block {
      height: 80px;
      width: 80px;

      position: relative;
      .avatar {
        display: block;
        height: 100%;
        width: 100%;
        border-radius: 50%;
      }

      .icon--edit {
        position: absolute;
        bottom: 0;
        right: 0;
      }
      .icon--check{
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }

  }

  .cell-group-wrapper {
    margin-top: 40px;

    .icon {
      position: relative;
      top: 3px;
      margin-right: 18px;
    }

    .message-num {
      color: #ED3A3A;
    }
  }

}

 .qipao_wrap{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 120px;
    z-index: 999;
    opacity: 0.9;
    padding-right: 16px;
    box-sizing: border-box;
}
   .qipao{
        width: 200px;
        height: 50px;
        // border: 2px solid #ff0;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 20px;
        border-radius: 16px;
        background-color: #00C35A;
        color: #fff;
        padding-left: 10px;
        padding-right: 10px;
    	}
        .qipao_none{
            display: none;
        }
    .qipao::after {
     content: "";
      position: absolute;
      bottom: 100%;
      right: 56px;
      margin-left: -5px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #00C35A transparent;
	  }

    .kefu{
      position: fixed;
      bottom: 30px;
      right: 30px;
      z-index: 2;
      border-radius: 50%;
      background: #07c160;
      box-shadow: 1px 4px 5px #dbd7d5;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 80px;
      height: 80px;
      .kefu-text{
        font-size: 12px;
        color: #fff;
      }
    }
</style>
<template>
  <div class="wode-container" @click="hideTip">
    <!-- <button @click="onWX">微信相关</button> -->
    <div class="header-wrapper">
      <div class="left">
        <div class="name">{{name}}</div>
        <div class="desc">加入圈子已经 {{days}} 天</div>
      </div>
      <span class="flex"></span>
      <div class="avatar-block" @click="onEditInfo">
        <img :src="userInfo.secCheckStatus==1?userInfo.newHeadImg:userInfo.headImg" alt="" class="avatar">
        <div class="icon icon--edit"></div>
        <div class="icon icon--check" v-if="userInfo.secCheckStatus==1"></div>
      </div>
    </div>
    <div class="cell-group-wrapper">
      <van-cell-group :border="false">
        <van-cell @click="onGotoMyCollection" custom-class="my-van-cell--large" size="large" title="我的收藏" is-link>
          <div slot="icon" class="icon icon--collection"></div>
        </van-cell>

        <!-- <van-cell @click="onGotoMessage" custom-class="my-van-cell--large" size="large" title="消息中心" :border="false" is-link>
          <div slot="icon" class="icon icon--message"></div>
          <div class="message-num">100</div>
        </van-cell> -->

        <van-cell @click="onGotoMyPublish" custom-class="my-van-cell--large" size="large" title="我的发布" is-link>
          <div slot="icon" class="icon icon--publish"></div>
        </van-cell>

        <van-cell @click="onGotoMyAskBuy" custom-class="my-van-cell--large" size="large" title="我的求购" is-link>
          <div slot="icon" class="icon icon--ask-buy"></div>
        </van-cell>

        <van-cell @click="onGotoMyFresh" custom-class="my-van-cell--large" size="large" title="我的新鲜事" is-link>
          <div slot="icon" class="icon icon--fresh"></div>
        </van-cell>

        <van-cell @click="onGotoObject" custom-class="my-van-cell--large" size="large" title="物品管理" is-link>
          <div slot="icon" class="icon icon--fresh"></div>
        </van-cell>

        <!-- <van-cell custom-class="my-van-cell--large" size="large" title="设置" is-link :border="false">
          <div slot="icon" class="icon icon--setting"></div>
        </van-cell> -->
      </van-cell-group>
    </div>

    <div :class="[showTip?'qipao_wrap':'qipao_wrap qipao_none']" class="qipao_wrap" :show="false">
            <div class="qipao" :show="showTip">{{tip}}</div>
    </div>

    <div>
      <button class="kefu" open-type="contact">
          <div class="icon icon--kefu"></div>
          <div class="kefu-text">联系客服</div>
      </button>
    </div>

  </div>
</template>
<script>
import qs from 'querystring'

export default {
  name: 'Wode',
  components: {},
  data() {
    return {
      name: '',
      avatar:'',
      days: 0,
      showTip:false,
      tip: '此处可修改你的头像和名字',
      userInfo:{}
    }
  },
  mounted() {
    //let user_info = wx.getStorageSync('user_info');
    // if (user_info == "") {
    //   this.name = "微信用户";
    //   this.avatar = "https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF";
    // } else {
    //   user_info = JSON.parse(user_info);
    //   this.name = user_info.name;
    //   this.avatar = user_info.avatar;
    // }
    
  },
  async onShow () {
    
    let session_key = wx.getStorageSync("session_key");
    if (session_key == "") {
      this.$push('/pages/login/main');
    } else {
      let res = await this.R.fetchGetUserInfo();
      this.userInfo = res.data.data;
      
      this.name = res.data.data.name;
      this.avatar = res.data.data.headImg;
      this.days = res.data.data.days;
    }

    this.showTip = this.$store.state.userIsFirstLogin;
  },
  methods: {
    hideTip(){
      this.showTip = false;
      this.$store.commit('USER_IS_FIRST_LOGIN', false);
    },
    onEditInfo () {
      let param = {name: this.name, avatar: this.avatar};
      
      let param_str = encodeURIComponent(JSON.stringify(param));
      this.$push(`/pages/user-info/main?data=${param_str}`)
    },
    onGotoMessage () {
      this.$push('/pages/message/main')
    },
    onGotoMyPublish () {
      this.$push('/pages/my-publish/main')
    },
    onGotoMyCollection () {
      this.$push('/pages/my-collection/main')
    },
    onWX () {
      this.$push('/pages/wx/main')
    },
    onGotoMyAskBuy(){
      this.$push('/pages/my-ask-buy/main')
    },
     onGotoMyFresh(){
      this.$push('/pages/my-fresh/main')
    },
    async onGotoObject(){
      //let {latitude, longitude} = await getLocation()
      let session_key = wx.getStorageSync("session_key");
      console.log(session_key)
      this.$push(`/pages/object/main?${qs.stringify({
        sessionKey: session_key,
        latitude: "",
        longitude: "",
      })}`)
    }
  }
}

</script>
