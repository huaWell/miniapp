<style lang="less" scoped>
@import '~@/styles/color.less';

.product-detail-container {
  padding-bottom: calc(env(safe-area-inset-bottom) + 90px);
  .swiper {
    position: relative;
    height: 100vw;

    .swiper-item {
      .slide-image {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .swiper-tip {
    position: absolute;
    right: 24px;
    bottom: 60px;
    padding: 6px 12px;
    box-sizing: border-box;
    height: 25px;
    border-radius: 20px;
    color: #000;
    font-size: 12px;
    z-index: 999;
    width: fit-content;
    background: #EFEFEF;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* body 为了做出来圆角效果 */
  .body {
    position: relative;
    z-index: 1;
    margin-top: -40px;
    background: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: white;
    padding: 0 15px;
    padding-top: 20px;

    .custom-image-dots {
      display: flex;
      overflow: scroll;

      &::-webkit-scrollbar {
        display: none;
      }

      .dot {
        display: block;
        flex-shrink: 0;
        height: 60px;
        width: 60px;
        border-radius: 12px;
        margin-right: 10px;
        transition: all .3s;
        padding: 2px;
        border: 2px solid transparent;
      }

      .active {
        border-radius: 10px;
        // padding: 2px;
        border: 2px solid #00C35A;
      }
    }

    .product-intro-wrapper {
      margin-top: 15px;

      .top-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 50px;

        .left {
          .price {
            .sale-price {
              font-weight: bold;
              font-size: 22px;
              line-height: 29px;
            }

            .label {
              margin-left: 15px;
              font-size: 13px;
            }
          }

          .origin-price {
            font-size: 12px;
            color: #ACADBB;
            text-decoration: line-through;
            margin-top: 4px;
             line-height: 17px;
          }
        }

        .right {
          .condition-text {
            color: #4F5077;
            font-size: 14px;
            background: #eee;
            border-radius: 18px;
            padding: 6px 10px;
            line-height: 14px;
          }
        }
      }

      .title {
        margin-top: 16px;
        font-size: 18px;
        line-height: 25px;
      }

      .desc {
        margin-top: 10px;
        color: #4F5077;
        font-size: 14px;
        white-space: pre-line;
      }
    }

    .buy-date-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #4F5077;
      border: 1px solid #ACADBB;
      padding: 10px 15px;
      // margin-top: px;
      margin: 24px 0;
      border-radius: 8px;
      height: 56px;
    }

    .ask-others-wrapper {
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text {
          font-weight: bold;
          font-size: 18px;
        }
        .flex{
          flex: 1;
        }
        .more {
          color: #00C35A;
          font-size: 12px;
        }
      }

      .questions {
        margin-top: 5px;
        font-size: 14px;

        .q-block {
          display: flex;
          margin: 19px 0;
          height: 24px;
          align-items: center; 

          .question {
            margin-left: 8px;
          }
          .flex {
            flex: 1;
          }

          .answer {
            color: #ACADBB;
          }
        }
      }
      .question-block{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        height: 100px;
         .ask-question{
          background: #00C35A;
          color: #fff;
          font-size: 16px;
          border-radius: 16px;
          padding: 8px 20px;
          line-height: 18px;
        }
      }
    }

    .self-card {
      margin-top: 20px;
      background: rgba(238, 238, 238, .3);
      // opacity: 0.3;
      border-radius: 8px;
      padding: 16px;

      .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        .flex{
          flex: 1;
        }
        img {
          display: block;
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }

        .name {
          margin-left: 10px;
        }

        padding-bottom: 16px;
      }

      .info {
        padding: 0 20px;
        padding-top: 16px;
        display: flex;
        justify-content: space-between;

        .block {
          .text {
            color: #ACADBB;
          }

          .value {
            font-size: 18px;
            font-weight: bold;
            margin-top: 4px;
            text-align: center;
          }
        }
      }
    }

    .map-wrapper {
      margin-top: 20px;
      background: rgba(238, 238, 238, .3);
      border-radius: 8px;
      padding: 16px;
      // margin-bottom: 150px;

      header {
        padding-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        align-items: center;
        .flex{
          flex: 1;
        }
        .distance{
          font-size: 12px;
          color: #000;
          line-height: 17px;
          margin-left: 8px;
          margin-right: 4px;
          font-weight: 400;
        }
      }

      .my-map {
        width: 100%;
        border-radius: 16px;
      }
    }
  }
}

  /* 输入框 */
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 1000;
    padding-bottom: calc(env(safe-area-inset-bottom));

    .footer--inner {
      background: white;
      padding: 16px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      // max-height: 70px;
      // min-height: 70px;
      overflow: hidden;

      // // display: flex;
      // .chat-input {
      //   background: #F2F2F2;
      //   border-radius: 8px;
      //   padding: 10px 8px;
      //   flex: 1;
      // }
      // .icon--image {
      //   margin-left: 10px;
      // }
      .footer-love{
        width: 48px;
        display: flex;
        align-items: center;
        flex-flow: column;
      }
      .footer-share{
        margin-left: 16px;
        width: 48px;
        display: flex;
        align-items: center;
        flex-flow: column;
      }
      .button-panel{
        margin-top: 4px;
      }
      .btn {
        background: #00C35A;
        border-radius: 8px;
        color: white;
        flex: 1;
        font-size: 15px;
        line-height: 15px;
        text-align: center;
        padding: 15px 0;
        margin-left: 24px;
      }
      .btn-gray{
        background: #EEEEEE;
        pointer-events: none;
      }
      .check-btn{
        background: #00C35A;
        border-radius: 8px;
        color: #fff;
        padding: 15px 0;
        box-sizing: border-box;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        height: 45px;
      }
      .check-text{
        // margin-left: 8px;
      }

      .self-wrapper {
        display: flex;
        align-items: center;
      }
    }
    button::after{
      border: none;
    }

    // .open {
    //   max-height: 200px;
    //   min-height: 200px;
    // }
  }
  .circle{
    display: flex;
    border-radius: 12px;
    margin-top: 22px;
    padding: 12px;
    box-sizing: border-box;
    align-items: center;
    background-color: rgba(238, 238, 238, 0.3);
    .left{
      .image{
        width: 48px;
        height: 48px;
        border-radius: 8px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      width: 100%;
      margin-left: 8px;
      .title {
        font-size: 14px;
        line-height: 16px;
        color: #000;
      }
      .join{
        padding: 4px 16px;
        height: 32px;
        box-sizing: border-box;
        color: #fff;
        font-size: 16px;
        background-color: #00C35A;
        border-radius: 16px;
        display: flex;
        align-items: center;
      }
    }
  }

  .share-dialog {
  /deep/ .van-dialog__header {
    padding-top: 0;
  }
  overflow: inherit !important;
}

</style>
<template>
  <div class="product-detail-container">
    <div style="position: relative;">
      <swiper class="swiper" :indicator-dots="false" :current="currentSlide" @change="onSwiperChange">
        <div v-for="(item, index) in good.imageList" :index="index" :key="key">
          <swiper-item class="swiper-item">
            <image :src="item" class="slide-image" mode="aspectFill" @click="previewImage(item)" />
          </swiper-item>
        </div>
      </swiper>
      
      <div class="swiper-tip">
          图片({{currentSlide+1}}/{{imageLength}})
      </div>
    </div>
  
    <div class="body">
      <div class="custom-image-dots">
        <image mode="aspectFill" :src="item" alt="" class="dot" :class="{'active': key==currentSlide}" v-for="(item, key) in good.imageList" :key="key" @click="onSwitchSlide(key)" />
      </div>
      <div class="product-intro-wrapper">
        <div class="top-block">
          <div class="left">
            <div class="price">
              <span>¥</span>
              <span class="sale-price">{{good.price}}</span>
              <span class="label">到手价</span>
            </div>
            <div class="origin-price">
              原价 ¥{{good.oriPrice}}
            </div>
          </div>
          <div class="right" v-if="good.condition != ''">
            <div class="condition-text">{{good.condition}}</div>
          </div>
        </div>
        <div class="title">
          {{good.name}}
        </div>
        <pre class="desc">
          {{good.description}}
        </pre>
      </div>
      <div class="buy-date-wrapper" v-if="buyTime">
        <span class="label">购入时间</span>
        <span class="date">{{buyTime}}</span>
      </div>
      <div class="ask-others-wrapper">
        <header>
          <span class="text">问大家</span>
          <span class="flex"></span>
          <span class="more" @click="goAskPage">查看全部</span>
          <div class="icon icon--arrow-right-green-1"></div>
        </header>
        <div class="questions">
          <div class="q-block" v-for="(ask, index) in askBrief" :key="index" v-if="askBrief.length>0">
            <div class="icon icon--question"></div>
            <div class="question">{{ask.content}}</div>
            <span class="flex"></span>
            <div class="answer">{{ask.count}}个回答</div>
          </div>
        </div>
        <div class="question-block" v-if="askBrief.length==0">
            <div class="ask-question" @click="goAskPage">问问题</div>
        </div>
      </div>
      <div class="self-card">
        <div class="user" @click="goMyCenter">
          <img :src="shopBrief.headImg" alt="">
          <p class="name">{{shopBrief.name}}</p>
          <span class="flex"></span>
          <div class="icon icon--arrow-right"></div>
        </div>
        <div class="info">
          <div class="block">
            <div class="text">挂单</div>
            <div class="value">{{shopBrief.selling}}</div>
          </div>
          <div class="block">
            <div class="text">卖出</div>
            <div class="value">{{shopBrief.selled}}</div>
          </div>
          <div class="block">
            <div class="text">求购</div>
            <div class="value">{{shopBrief.wanted}}</div>
          </div>
        </div>
      </div>
      <div class="circle text-overflow--1" v-if="good.groupName">
        <div class="left">
          <img class="image" :src=good.groupImage alt="">
        </div>
        <div class="right">
          <div class="title">{{good.groupName}}</div>
          <div class="join" @click="toCircle">进圈子</div>
        </div>
      </div>
      <div class="map-wrapper">
        <header @click="onGotoMap(good)">
          <span class="address">{{good.address}}</span>
          <span class="flex"></span>
          <div class="icon icon--location-gray"></div>
          <div class="distance">{{good.distance}}</div>
          <div class="icon icon--arrow-right-green"></div>
        </header>
        <map class="my-map" :longitude="good.lng" :latitude="good.lat" :enable-zoom="false" :enable-scroll="false" :markers="[{latitude: good.lat, longitude: good.lng}]" @click="onGotoMap(good)"/>
      </div>
    </div>
    <div class="footer" v-if="!isSelf">
        <div class="footer--inner">
          <div class="footer-love">
            <!-- <div class="icon icon--love"></div> -->
            <button :class="[isLike?'icon icon--love-active':'icon icon--love']" @click="onCollection"></button>
            <div class="button-panel" @click="onCollection">
               <button class="button--reset">喜欢</button>
            </div>
          </div>
          <div class="footer-share">
             <!-- <div class="icon icon--share" @click="share"></div> -->
             <button class="icon icon--share" @click="share"></button>
              <div class="button-panel" @click="share">
                <button class="button--reset">分享</button>
              </div>
          </div>
          <div :class="[good.status==1 ? 'btn':'btn btn-gray']" @click="goChatPage">
            {{buyer_text}}
          </div>
        </div>
      </div>

    <div class="footer" v-if="isSelf">
      <div class="footer--inner">
          <div class="footer-share" v-if="good.secCheckStatus==0">
             <!-- <div class="icon icon--share" @click="share"></div> -->
             <button class="icon icon--share" @click="share"></button>
              <div class="button-panel" @click="share">
                <button class="button--reset">分享</button>
              </div>
          </div>
          <div class="check-btn" style="background-color: #dcdc1b;" v-if="good.secCheckStatus==1">
            <div class="check-text">审核中</div>
          </div>
            <div class="check-btn" style="background-color: #e86262;" v-if="good.secCheckStatus==2">
            <div class="check-text">审核失败</div>
          </div>

          <div v-if="good.secCheckStatus==0" :class="[good.status==3 ? 'btn btn-gray':'btn']" @click="onHandlerStatus">
            {{text}}
          </div>
           <div v-if="good.secCheckStatus==0 && good.status==1" class="btn" @click="onMakeSelled">
            卖出
          </div>
           <div :class="[good.status==3 ? 'btn btn-gray':'btn']" @click="onEditGood">
            编辑信息
          </div>
      </div>
    </div>



  </div>
</template>
<script>
  import qs from 'querystring'
  import { getLocation } from '@/modules/getLocation'
  import messageAuthSetting from '@/modules/messageAuthSetting'

export default {
  name: 'ProductDetail',
  components: {
    
  },
  data() {
    return {
      // 卖家、买家视角
      isSelf: false,
      imageLength: 1,
      buyTime:'',
      good: {},
      currentSlide: 0,
      shopBrief:{},
      askBrief:[],
      isLike:false,
      text: '下架',
      buyer_text:"我想要",
      description:"",
      showImage:false,
    }
  },
  async mounted() {
   
  },
  async onShow(){
    if (this.showImage) {
      this.showImage = false;
    } else {
      let goodId = 0;
      let _good = JSON.parse(decodeURIComponent(this.$mp.query.data));
      goodId = _good.id;
      
     
      this.currentSlide = 0;
      let res = await this.R.fetchProductDetail(goodId);
      
      this.good = res.data.data; 
      this.isSelf = this.good.isSelf;
      this.imageLength = this.good.imageList.length;
      if (this.good.buyTime)
        this.buyTime = this.formatDate(this.good.buyTime);
      else  this.buyTime = "未知"
      this.isLike = this.good.isLike;
      // status 1 上架  -- 下架
      // status 2 下架  -- 上架
      // status 3 卖出 -- 已卖出
      if (this.good.status == 1) this.text = "下架";
      else if (this.good.status == 2)  this.text = "上架";
      else if (this.good.status == 3)  this.text = "已卖出";

      if (!this.isSelf) {
        if (this.good.status == 2)   this.buyer_text = "上架";
        else if (this.good.status == 3)  this.buyer_text = "已卖出";
        else if (this.good.status == 1)  this.buyer_text = "我想要";
      }

      res = await this.R.fetchShopBrief(this.good.publisherId);
      this.shopBrief = res.data.data;
      

      res = await this.R.fetchproductaskBrief(this.good.id);
      this.askBrief = res.data.data;
       
    }
  },
  // 3 button 的开放功能<button open-type="share">分享</button>
  onShareAppMessage: function(res) {
    var that = this;
    
  // if (res.from === 'button') {
  //   //
  // } else if (res.from === 'menu'){
  //   //
  // }
  // 返回数据
  let param_str = encodeURIComponent(JSON.stringify({id: this.good.id}))
  return {
    title: this.good.description,
    path: `/pages/product-detail/main?data=${param_str}`,
    success: function(res) {
      // 转发成功，可以把当前页面的链接发送给后端，用于记录当前页面被转发了多少次或其他业务
    },
    fail: function(res) {
      // 转发失败
      
    }
  }
},
  methods: {
    // 进去圈子
    async toCircle(){
      let {latitude, longitude} = await getLocation();
      let session_key = wx.getStorageSync("session_key");
      this.$push(`/pages/h5-webview-circle/main?${qs.stringify({
        groupId: this.good.groupId,
        sessionKey: session_key,
        latitude: latitude,
        longitude: longitude,
      })}`)
    },
    onSwitchSlide(index) {
      this.currentSlide = index;
      
    },
    onSwiperChange(e){
      this.currentSlide = e.mp.detail.current;
    },
    async share(){
      let {latitude, longitude} = await getLocation();
      let session_key = wx.getStorageSync("session_key");
      /*
          avatar: this.shopBrief.headImg,
        name: this.shopBrief.name,
        price: this.good.price,
        title: this.good.name,
        desc: this.good.description,
        image: this.good.imageList[0],
        qrCode: this.good.imageList[0]
      */

      this.$push(`/pages/h5-webview-good-share/main?${qs.stringify({
        groupId: this.good.groupId,
        sessionKey: session_key,
        latitude: latitude,
        longitude: longitude,
        id: this.good.id
      })}`)
    },
    goAskPage(){
      this.afterLogin(()=>{
          let _good = {image: this.good.imageList[0], 
              id: this.good.id, 
              name: this.good.name,
              price: this.good.price,
              condition: this.good.condition,
              isSelf: this.good.isSelf
            }
          let param_str = encodeURIComponent(JSON.stringify(_good));
          this.$push(`/pages/ask/main?data=${param_str}`);
      })
    },
    async goChatPage(){
      
      this.afterLogin(()=>{
        if (this.$store.state.userIsAuthMessage) {
           this.$push(`/pages/chat/main?${qs.stringify({
            productId: this.good.id,
            contactId: this.good.publisherId,
            productType: 'product'
          })}`)
        } else {
          messageAuthSetting().then(()=>{
            this.$store.commit('USER_IS_AUTH_MESSAGE', 1);
             this.$push(`/pages/chat/main?${qs.stringify({
            productId: this.good.id,
            contactId: this.good.publisherId,
            productType: 'product'
          })}`)
          });
        }
      })
    },
    goMyCenter(){
      let param_str = encodeURIComponent(JSON.stringify(this.shopBrief))
      this.$push(`/pages/my-center/main?data=${param_str}`);
    },
    formatDate(date){
      let _date = date.split("-");
      let result = _date[0] + "年" + _date[1] + "月";
      return result;
    },
    // 喜欢
    async onCollection(){
        this.afterLogin(()=>{
          let status = this.isLike ? 0 : 1;
          this.R.fetchProductLike(this.good.id, status).then(res=>{
          if (res.data.success) {
            this.isLike = !this.isLike;
            let text = this.isLike ? "收藏成功" : '取消成功'
            this.$toast.success(text);
            } else {
              let text = this.isLike ? '取消失败' : '收藏失败'
              this.$toast.fail(text);
            }
          });
        })
    },
    // 下架or上架
    async onHandlerStatus(){
          
        if (this.good.status == 1) {
            let res = await this.R.fetchProductTakeDown(this.good.id);
             
            if (res.data.success)  {
              this.good.status = 2;
              this.text = "上架";
              this.$toast.success("下架成功")
            }
            else   this.$toast.fail(res.data.message);   
        } else if (this.good.status == 2) {
            let res = await this.R.fetchProductOnShelf(this.good.id);
            
            if (res.data.success)  {
              this.good.status = 1;
              this.text = "下架";
              this.$toast.success("上架成功")
            } 
            else   this.$toast.fail(res.data.message);
        }
    },
    // 标记已卖出
    async onMakeSelled(){
      let res = await this.R.fetchProductMarkSelled(this.good.id);
      
      if (res.data.success) {
        this.good.status = 3;
        this.text = "已卖出";
        this.$toast.success("已卖出成功")
      } else {
         this.$toast.fail(res.data.message);
      }
    },
    // 编辑信息
    onEditGood(){
      this.$push('/pages/publish/main?id=' + this.good.id);
    },
    onGotoMap (item) {
      
      this.$push(`/pages/map/main?map=${encodeURIComponent(JSON.stringify({
        latitude: item.lat,
        longitude: item.lng,
        markers:[{latitude: item.lat, longitude: item.lng}]
      }))}`)
    },
    // 预览图片
    previewImage(url) {
        this.showImage = true;
        wx.previewImage({
          current: url,
          urls: this.good.imageList
        })
    }
  }
}

</script>
