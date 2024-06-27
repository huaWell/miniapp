<style lang="less" scoped>
  @import '~@/styles/color.less';
  .container{
    background: #E5E5E5;
    height: 100vh;
    width: 100vw;
  }
  .background{
      padding-top: 152px;
      box-sizing: border-box;
      width: 100%;
      height: 400px;
      display: flex;
      align-items: center;
  }
  .background-image-container{
      margin-left: 28px;
      margin-right: 28px;
      width: 100%;
      height: 200px;
      box-sizing: border-box;
  }
  .background-image{
     width: 100%;
     height: 100%;
  }
  .text-panel{
      width: 100%;
  }
  .text-1{
      width: 100%;
    color: #000;
    height: 32px;
    line-height: 32px;
    padding-left: 30px;
    padding-right: 30px;
    box-sizing: border-box;
    font-size: 28px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-2{
      width: 100%;
      margin-top: 12px;
      padding-left: 120px;
      padding-right: 120px;
      color: #4F5077;
      font-size: 14px;
      line-height: 16px;
      box-sizing: border-box;
         display: flex;
    align-items: center;
    justify-content: center;
  }
  .button-panel-1{
    position: relative;
      margin-top: 85px;
      box-sizing: border-box;
  }
    .button-panel-2{
        position: relative;
      margin-top: 16px;
  }
  .button{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 52px;
      border-radius: 12px;
      background: #fff;
      margin-left: 38px;
      margin-right: 38px;
      box-sizing: border-box;
  }
  .button-text{
      color: #000;
      font-size: 14px;
      line-height: 16px;
      margin-left: 10px;
  }
  .qipao_wrap{
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: absolute;
    top: 64px;
    z-index: 999;
    opacity: 0.9;
    padding-right: 16px;
    box-sizing: border-box;
}
   .qipao{
        width: 100px;
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
        margin-left: 16px;
    	}
        .qipao_none{
            display: none;
        }
    .qipao::after {
     content: "";
      position: absolute;
      bottom: 100%;
      left: 90px;
      margin-left: -5px;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent #00C35A transparent;
	  }

       .qipao_wrap1{
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            position: absolute;
            top: -65px;
            z-index: 999;
            height: 50px;
            opacity: 0.9;
            padding-right: 16px;
            box-sizing: border-box;
        }
  .qipao1{
        width: 100px;
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
    .qipao1::before{
      content: '';
      width: 0;
      height: 0;
      border: 10px solid;
      position: absolute;
      bottom: -20px;
      right: 90px;
      border-color:  #00C35A transparent transparent;
	  }
    .qipao1::after{
      content: '';
      width: 0;
      height: 0;
      border: 10px solid;
      position: absolute;
      bottom: -18px;
      right: 90px;
      border-color:  #00C35A transparent transparent;
	  }
        .qipao_none{
            display: none;
        }
</style>

<template>
    <div class="container" @click="hideTip">
        <div class="background">
            <div class="background-image-container">
                <img class="background-image" :src="publishBackground" alt="">

            </div>
        </div>
        <div class="text-panel">
            <div class="text-1">让闲置物品转起来</div>
            <div class="text-2">30s马上发布闲置宝贝</div>
        </div>

        <div class="button-panel-1">
            <div class="button" @click="goPublish">
                <div class="icon icon--camera"></div>
                <div class="button-text">上传宝贝</div>
            </div>

            <div :class="[showTip?'qipao_wrap1':'qipao_wrap1 qipao_none']">
                <div class="qipao1" :show="showTip">{{tip1}}</div>
            </div>
        </div>

        <div class="button-panel-2" style="margin-top: 16px;">
            <div class="button" @click="goPublishHelp">
                <div class="icon icon--publish-green"></div>
                <div class="button-text">发布江湖救急</div>
            </div>
            <div :class="[showTip?'qipao_wrap':'qipao_wrap qipao_none']" class="qipao_wrap">
                <div class="qipao" :show="showTip">{{tip}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import PublishBackground from '@/assets/publish-background.png'
export default {
    name: "Guide",
    components:{},
    data(){
        return {
            publishBackground: PublishBackground,
            pageBottom: 0,
            showTip:true,
            tip:'我要买',
            tip1: '我要卖'
        }
    },
    onLoad(){
        let menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        this.pageBottom = menuButtonInfo.bottom;
    },
    onShow(){
        
        this.showTip = this.$store.state.userIsFirstLoginGuide;
    },
    methods: {
        hideTip(){
            this.showTip = false;
            this.$store.commit('USER_IS_FIRST_LOGIN_GUIDE', false);
        },
        goPublish(){
          this.afterLogin(()=>{
            this.$push("/pages/publish/main");
          })
        },
        goPublishHelp(){
            this.afterLogin(()=>{
                this.$push("/pages/publish-help/main");
            })
        }
    }
}
</script>