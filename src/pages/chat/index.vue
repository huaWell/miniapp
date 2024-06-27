<style lang="less" scoped>
  @import '~@/styles/color.less';
.chat-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  /* 聊天记录 */
  .chat-list {
    flex: 1;
    overflow: hidden;
    background: #f2f2f2;
    padding-top: 20px;
    margin-top: 32px;
    .chat-item {
      padding: 0 15px;
      box-sizing: border-box;
      padding-bottom: 20px;
      width: 100%;
      .chat-block {
      }
      .my-chat-block {
        .message {
          justify-content: flex-end;
        }
        .message-content {
          margin-right: 10px;
          background: rgba(0, 195, 90, 0.1);
          overflow: hidden;
        }
      }
      .you-chat-block {
        .message-content {
          margin-left: 10px;
          background: white;
        }
      }
      .message {
        display: flex;
        align-items: center;
        .avatar {
          border-radius: 50%;
          display: block;
          height: 45px;
          width: 45px;
          min-width: 45px;
          background-position: center;
          background-size: cover; 
        }
        .message-content {
          color: #222;
          border-radius: 8px 0px 8px 8px;
          padding: 12px;
          word-break: break-all;
          width: 210px;
          max-width: 210px;
          min-width: 210px;
        }
        .text {
          min-width: 0;
          width: auto;
        }
        .map {
          .address {
            margin-bottom: 5px;
            font-size: 14px;
          }
          .my-map {
            width: 100%;
          }
        }
        .image {
          height: 200px;
          img {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
        }
        .goods {
        }
      }
    }
  }
  /* 输入框 */
  .footer {
    width: 100%;
    background: white;
    z-index: 99;
    padding-bottom: calc(env(safe-area-inset-bottom));
    .footer--inner {
      background: white;
      padding: 10px 15px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      overflow: hidden;
      .chat-input {
        border-radius: 8px;
        flex: 1;
        /deep/ .van-cell {
          padding: 8px 12px;
          background: #f2f2f2;
          border-radius: 8px;
        }
      }
      .icon--image {
        margin-left: 10px;
      }
    }
  }
  .pb0 {
    padding-bottom: 0;
  }
  .tip{
    position: relative;
    color: red;
    font-size: 12px;
    position: fixed;
    top: 5px;
    padding: 0px 16px;
    box-sizing: border-box;
    width: 100vw;
    opacity: 0.8;
  }
  .tip-inner{
    background: #fff;
    border-radius: 4px;
    padding: 2px 4px;
    background: rgba(246,242,241);
    color: rgba(132,94,76);
  }
  .tip-bottom{
    text-align: top;
    top: 30px;
    height: 1px;
    color: #dad6d6;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99;
    margin-top: 0px;
  }
  .tip-bottom:before{
    content: '';
    position: absolute;
    top: 38px;
    left: 44px;
    background: #dad6d6;
    width: 36%;
    height: 2px;
}
.tip-bottom:after {
    content: '';
    position: absolute;
    top: 38px;
    right: 44px;
    background: #dad6d6;
    width: 36%;
    height: 2px;
}
  .popup{
    position: fixed;
    top: 32px;
    width: 100vw;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
  }
  .popup-inner{
    display: flex;
    width: 100%;
    border-radius: 16px;
    background: #fff;
    padding: 16px;
  }
  .goods {
    .right {
    }
  }
  .left{
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-block{
    width: 56px;
    height:56px;
  }
  .production-image{
    width: 56px;
    height: 56px;
    border-radius: 4px;
  }
  .right{
    margin-left: 15px;
    height: 60px;
    flex: 1;
  }
  .production-title-panel{
    display: flex;
    justify-content: space-between;
  }
  .production-title{
    color: #000;
    font-size: 16px;
    line-height: 22px;
    height: 22px;
    font-family: 'PingFang SC';
  }
  .info{
    display: flex;
    align-items: flex-end;
    font-family: 'Montserrat';
    height: 38px;
  }
  .price{
    font-size: 14px;
    font-weight: 700;
    color: #000;
    line-height: 17px;
    display: flex;
    align-items: center;
    height: 25px;
  }
  .production-type{
    margin-left: 6px;
    padding:4px 8px;
    box-sizing: border-box;
    background: #eee;
    border-radius: 18px;
    height: 25px;
    color: #4F5077;
    font-size: 12px;
  }
  .send-block {
    margin-left: 6px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 70px;
    height: 100%;
    flex-shrink: 0;
  }
  .send-btn {
    background: #00C35A;
     width: 70px;
    height: 25px;
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 8px;
    box-sizing: border-box;
    border-radius: 8px;
    margin-left: auto;
  }
  .custom-icon{
    flex-shrink: 0;
  }
}
.pt120 {
  padding-top: 120px!important;
}
.custom-icon-class{
  width: 24px;
  height: 24px;
  margin-left: 4px;
}
.icon--phone {
  display: block;
  height: 20px;
  width: 20px;
}
.icon--more {
  display: block;
  height: 20px;
  width: 25px;  
  margin-left: 8px;
}
.van-dialog__header {
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 6px;
}
.van-dialog__content {
  margin-bottom: 10px;
}
.more-chat-wrapper {
  display: flex;
  padding: 20px 15px;
  .block {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      height: 24px;
      width: 24px;
      margin-bottom: 4px;
    }
    .text {
      color: @fontGray;
      font-size: 14px;
    }
  }
}
.agree-btn {
  color: white;
  background:#07c160;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<template>
  <div class="chat-container">
    <!-- 聊天列表 -->
    <scroll-view class="chat-list" :scroll-y="true" :scroll-into-view="scrollIntoView" @scrolltoupper="onScroll2Top">
      <div class="popup-show" style="height: 100px;" v-if="productDetail.title || productDetail.price"></div>
      <div class="chat-item" v-for="(item, key) in messages" :key="key" :id="'chat' + key">
        <!-- 对方的聊天框 -->
        <div v-if="item.isSelf==0" class="chat-block you-chat-block">
          <!-- 地图样式 -->
          <div class="message" v-if="item.type == MAP" @click="onGotoMap(item)">
            <img class="avatar" mode="aspectFill" :src="you.fromHeadImage" alt="" @error="onError(item)" @click.stop="toYourCenter(item)">
            <div class="message-content map">
              <div class="address">{{item.address}}</div>
              <map class="my-map" :enable-zoom="false" :enable-scroll="false" :latitude="item.latitude" :longitude="item.longitude" :markers="item.markers" @click="onGotoMap(item)">
              </map>
            </div>
          </div>
          <!-- 图片 -->
          <div class="message" v-if="item.type == IMAGE" @click="onPreviewImage(item)">
            <img class="avatar" mode="aspectFill" :src="you.fromHeadImage" alt="" @error="onError(item)" @click.stop="toYourCenter(item)">
            <div class="message-content image">
              <img :src="imgUrl" alt="" v-for="(imgUrl, index) in item.content" :key="index" mode="aspectFill" />
            </div>
          </div>
          <!-- 纯文本 -->
          <div class="message" v-if="item.type == TEXT">
            <img class="avatar" mode="aspectFill" :src="you.fromHeadImage" alt="" @error="onError(item)" @click.stop="toYourCenter(item)">
            <div class="message-content text">
              {{item.content}}
            </div>
          </div>
          <!-- 商品 -->
          <div class="message" v-if="item.type == GOODS" @click="onGotoGoods(item)">
            <img class="avatar" mode="aspectFill" :src="you.fromHeadImage" alt="" @error="onError(item)" @click.stop="toYourCenter(item)">
            <div class="message-content popup-inner goods">
              <div class="left">
                <div class="image-block">
                  <img class="production-image" :src="item.img" alt="">
                </div>
              </div>
              <div class="right">
                <div class="production-title text-overflow--1">
                  {{item.title}}
                </div>
                <div class="info">
                  <div class="price">¥{{item.price}}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 获取手机号申请 -->
          <div class="message" v-if="item.type == PHONE">
            <img class="avatar" mode="aspectFill" :src="you.fromHeadImage" alt="" @error="onError(item)" @click.stop="toYourCenter(item)">
            <div class="message-content text">
              <div role="dialog" tabindex="0" class="van-dialog" aria-labelledby="标题" style="z-index: 2004;">
                <div class="van-dialog__header">提示</div>
                <div class="van-dialog__content">
                  <div class="van-dialog__message van-dialog__message--has-title">对方申请获取你的手机号, 是否同意?</div>
                </div>
                <div class="van-hairline--top van-dialog__footer">
                  <!-- <van-button type="primary" size="large" style="margin-bottom: 5px;" @click="onApply"> -->
                  <button class=" button--reset agree-btn van-button" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">
                    同意
                  </button>
                  <!-- </van-button> -->
                  <van-button type="default" size="large" @click="onRefuse">拒绝</van-button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 我自己的聊天框 -->
        <div v-if="item.isSelf==1" class="chat-block my-chat-block">
          <!-- 地图样式 -->
          <div class="message" v-if="item.type == MAP" @click="onGotoMap(item)">
            <div class="message-content map">
              <div class="address">{{item.address}}</div>
              <map class="my-map" :enable-zoom="false" :enable-scroll="false" :latitude="item.latitude" :longitude="item.longitude" :markers="item.markers" @click="onGotoMap(item)">
              </map>
            </div>
            <img class="avatar" mode="aspectFill" :src="me.fromHeadImage" alt="" @error="onError(item)" @click.stop="toMyCenter(item)">
          </div>
          <!-- 图片 -->
          <div class="message" v-if="item.type == IMAGE" @click="onPreviewImage(item)">
            <div class="message-content image">
              <img :src="imgUrl" alt="" v-for="(imgUrl, index) in item.content" :key="index" mode="aspectFill" />
            </div>
            <img class="avatar" mode="aspectFill" :src="me.fromHeadImage" alt="" @error="onError(item)" @click.stop="toMyCenter(item)">
          </div>
          <!-- 纯文本 -->
          <div class="message" v-if="item.type == TEXT">
            <div class="message-content text">
              {{item.content}}
            </div>
            <img class="avatar" mode="aspectFill" :src="me.fromHeadImage" alt="" @error="onError(item)" @click.stop="toMyCenter(item)">
          </div>
          <div class="message" v-if="item.type == GOODS" @click="onGotoGoods(item)">
            <!-- 商品 -->
            <div class="message-content popup-inner goods">
              <div class="left">
                <div class="image-block">
                  <img class="production-image" :src="item.img" alt="">
                </div>
              </div>
              <div class="right">
                <div class="production-title text-overflow--1">
                  {{item.title}}
                </div>
                <div class="info">
                  <div class="price">¥{{item.price}}</div>
                </div>
              </div>
            </div>
            <img class="avatar" mode="aspectFill" :src="me.fromHeadImage" alt="" @error="onError(item)" @click.stop="toMyCenter(item)">
          </div>
          <div class="message" v-if="item.type == PHONE">
            <div class="message-content text">
              {{item.content}}
            </div>
            <img class="avatar" mode="aspectFill" :src="me.fromHeadImage" alt="" @error="onError(item)" @click.stop="toMyCenter(item)">
          </div>
        </div>
      </div>
    </scroll-view>
    <!-- <button @click="onSendMessage">发送</button> -->
    <!-- fixed 输入框 -->
    <div class="footer" :class="{'pb0': isFocus}">
      <div class="footer--inner">
        <van-field class="chat-input" :value="message" type="textarea" placeholder="我想说" autosize maxlength="500" confirm-type="send" @confirm="onSendMessage" @input="onInput" @focus="onFocus" @blur="onBlur" />
        <!-- <div class="icon--camera-gray custom-icon-class" @click="onChooseImage"></div> -->
        <!-- <div class="icon--choose-location custom-icon-class" @click="onChooseLocation"></div> -->
        <!-- <img :src="phone" alt="" class="icon--phone" @click="onGetPhoneNumber"> -->
        <img :src="more" alt="" class="icon--more" @click="onMore">
      </div>
    </div>
    <div class="tip">
      <div class="tip-inner">
        {{motion}}
      </div>
      <div class="tip-bottom">-</div>
    </div>
    <!-- 悬浮窗 -->
    <div class="popup" v-if="productDetail.title || productDetail.price" @click="onClickPopup">
      <div class="popup-inner">
        <div class="left">
          <div class="image-block">
            <img class="production-image" :src="productDetail.img" alt="">
          </div>
        </div>
        <div class="right">
          <div class="production-title-panel">
            <div class="production-title text-overflow--1">
              {{productDetail.title}}
            </div>
            <div class="icon icon--close custom-icon" @click="onClosePopup"></div>
          </div>
          <div class="info">
            <div class="price">¥{{productDetail.price}}</div>
            <!-- <div class="production-type">轻微使用痕迹</div> -->
            <div class="send-btn" @click.stop="onSendGoods">发送商品</div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
    <!-- 聊天框的三个按钮 -->
    <van-action-sheet :show="showMoreChat" :close-on-click-overlay="true" title="更多" @close="onHideMoreChat">
      <div class="more-chat-wrapper">
        <div class="block" @click="onChooseImage">
          <img :src="camera" alt="" />
          <span class="text">拍照</span>
        </div>
        <div class="block" @click="onChooseLocation">
          <img :src="location" alt="" />
          <span class="text">位置</span>
        </div>
        <div class="block" @click="onGetPhoneNumber2">
          <img :src="phone" alt="" />
          <span class="text">手机号</span>
        </div>
      </div>
    </van-action-sheet>
  </div>
</template>
<script>
const IMAGE = 1;
const TEXT = 2;
const GOODS = 3;
const MAP = 4;
const PHONE = 5;
import http from '@/modules/http'
import qs from 'querystring'
import phone from '@/assets/phone.svg'
import camera from '@/assets/camera.svg'
import location from '@/assets/location.svg'
import more from '@/assets/more.svg'
/* 获取聊天记录  */
let fetchChatHistories = async (contactId) => {
  return http.post('/chat/contactBox', {
    value: contactId
  });
}
/* 获取商品详情 */
let fetchProductDetail = async (productId, type = 'product') => {
  return http.post('/product/query', {
    id: parseInt(productId),
    type
  }, 1);
}
/* 获取和我聊天的那个人的头像 */
let fetchContactUserInfo = async (userId) => {
  return http.post('/user/info', {
    userId: parseInt(userId)
  }, 1);
}
let random = () => {
  return parseInt(Math.random() * 1000000)
}
let isTmpPath = path => {
  return path.indexOf('//tmp') > -1;
}
import chooseLocation from '@/modules/chooseLocation'
import { getLocation } from '@/modules/getLocation'
import chooseImage from '@/modules/chooseImage'
export default {
  name: 'Chat',
  components: {},
  watch: {
    currentMessage: {
      deep: true,
      handler(n, o) {
        this.receiveMessage(n);
      }
    }
  },
  computed: {
    currentMessage() {
      return this.$store.state.currentMessage;
    }
  },
  data() {
    return {
      IMAGE,
      TEXT,
      GOODS,
      MAP,
      PHONE,
      me: {},
      you: {},
      /* 我自己*/
      messages: [],
      /* 聊天记录 */
      message: '',
      isFocus: false,
      scrollTop: 0,
      scrollIntoView: '',
      contactId: -1,
      productDetail: {},
      type: '',
      motion: '',
      phone,
      camera,
      location,
      more,
      showMoreChat: false
    }
  },
  onUnload() {
    this.$store.commit('SET_CURRENT_CHAT', -1)
  },
  async mounted() {
    try {
      /* 解析参数 */
      this.contactId = this.$mp.query.contactId
      /* 获取当前用户的信息 */
      this.me = await this.fetchUserInfo();
      this.you = await this.fetchContactUserInfo(this.contactId);
      /* 获取聊天记录 */
      this.fetchChatHistories(this.contactId)
      /* 激活当前聊天窗口 */
      this.$store.commit('SET_CURRENT_CHAT', this.contactId)
      this.$store.dispatch('readChat', this.contactId)
      /* 查看是否从商品详情过来的 */
      if (this.$mp.query.productId) {
        this.fetchProductDetail(this.$mp.query.productId, this.$mp.query.productType);
      } else {
        this.productDetail.title = null;
        this.productDetail.price = null;
      }
      let motion = await this.R.fetchMotionChat();
      this.motion = motion.data.data.text;
    } catch (err) {}
  },
  methods: {
    toYourCenter(item) {
      let param_str = encodeURIComponent(JSON.stringify({
        id: item.fromId
      }))
      this.$push(`/pages/my-center/main?data=${param_str}`);
    },
    toMyCenter() {
      let param_str = encodeURIComponent(JSON.stringify({
        id: this.me.userId
      }))
      this.$push(`/pages/my-center/main?data=${param_str}`);
    },
    async fetchUserInfo() {
      try {
        let res = await this.R.fetchGetUserInfo();
        return {
          fromHeadImage: res.data.data.headImg,
          userId: res.data.data.id
        }
      } catch (err) {}
    },
    async fetchContactUserInfo(userId) {
      try {
        let res = await fetchContactUserInfo(userId);
        return {
          fromHeadImage: res.data.data.headImg,
          userId: res.data.data.id
        }
      } catch (err) {}
    },
    async fetchChatHistories(contactId) {
      try {
        let res = await fetchChatHistories(contactId)
        this.$setTitle(res.data.data.contactName)
        this.messages = res.data.data.msgList.reverse();
        this.messages = this.messages.map(m => {
          return this.transformGoodsMessage(this.transformImageMessage(this.transformMapMessage(m)))
        })
        this.scroll2Bottom();
      } catch (err) {}
    },
    async fetchProductDetail(productId, type = 'product') {
      try {
        let res = await fetchProductDetail(productId, type);
        this.productDetail = res.data.data;
      } catch (err) {}
    },
    transformImageMessage(m) {
      if (m.type == IMAGE) {
        return {
          ...m,
          content: (() => {
            let t = []
            try {
              t = JSON.parse(m.content) || []
            } catch (err) {
              t = []
            }
            return t;
          })()
        }
      }
      return m;
    },
    transformGoodsMessage(m) {
      if (m.type == GOODS) {
        return {
          ...JSON.parse(m.content),
          ...m,
        }
      }
      return m;
    },
    transformMapMessage(m) {
      let getMapDetail = value => {
        let _arr = value.split(',,')
        return {
          latitude: _arr[0],
          longitude: _arr[1],
          address: _arr[2],
          markers: [{
            id: 1,
            latitude: _arr[0],
            longitude: _arr[1]
          }]
        }
      }
      if (m.type == MAP) {
        return {
          ...m,
          ...getMapDetail(m.content)
        }
      }
      return m;
    },
    scroll2Bottom() {
      this.$nextTick(() => {
        this.scrollIntoView = `chat${this.messages.length-1}`
      })
    },
    onSendMessage() {
      if (this.message) {
        this.push2Messages(TEXT, this.message)
        this.sendText(this.message)
        this.message = ''
        this.scroll2Bottom();
      }
    },
    push2Messages(type, content) {
      let t = {
        type: type,
        content: content,
        isSelf: 1
      }
      this.messages.push(this.transformGoodsMessage(this.transformMapMessage(t)))
      console.log(JSON.stringify(this.messages, null, 4))
    },
    sendText(value) {
      this.$store.state.socketTask.send({
        data: JSON.stringify({
          "requestId": random(),
          "action": "sendChat",
          "data": {
            "type": TEXT,
            "content": value,
            "toId": this.contactId
          }
        }),
      })
    },
    sendMap(value) {
      this.$store.state.socketTask.send({
        data: JSON.stringify({
          "requestId": random(),
          "action": "sendChat",
          "data": {
            "type": MAP,
            "content": value,
            "toId": this.contactId
          }
        }),
      })
    },
    sendPhone(value = '') {
      this.$store.state.socketTask.send({
        data: JSON.stringify({
          "requestId": random(),
          "action": "sendChat",
          "data": {
            "type": PHONE,
            "content": value,
            "toId": this.contactId
          }
        }),
      })
    },
    async sendImages(value) {
      try {
        wx.showLoading({
          title: '发送中...',
        })
        let images = await this.upload(value)
        this.$store.state.socketTask.send({
          data: JSON.stringify({
            "requestId": random(),
            "action": "sendChat",
            "data": {
              "type": IMAGE,
              "content": JSON.stringify(images),
              "toId": this.contactId
            }
          }),
        })
        wx.hideLoading()
      } catch (err) {}
    },
    sendGoods(value) {
      this.$store.state.socketTask.send({
        data: JSON.stringify({
          "requestId": random(),
          "action": "sendChat",
          "data": {
            "type": GOODS,
            "content": value,
            "toId": this.contactId
          }
        }),
      })
    },
    /* 接收到新的消息 */
    receiveMessage(message) {
      if (this.$store.state.currentChat == this.$mp.query.contactId) {
        this.messages.push({
          ...this.transformGoodsMessage(this.transformMapMessage(this.transformImageMessage(message))),
          isSelf: 0
        })
        this.$store.dispatch('readChat', this.$store.state.currentChat)
        this.scroll2Bottom();
      }
    },
    onInput(e) {
      this.message = e.mp.detail;
    },
    onFocus() {
      this.isFocus = true;
    },
    onBlur() {
      this.isFocus = false;
    },
    async onChooseImage() {
      this.onHideMoreChat()
      try {
        let res = await chooseImage();
        this.push2Messages(IMAGE, res);
        this.sendImages(res)
        this.scroll2Bottom();
      } catch (err) {}
    },
    async onChooseLocation() {
      this.onHideMoreChat()
      try {
        let _location = await getLocation();
        /* 返回选中地址的 经纬度/地址名 */
        let res = await chooseLocation(_location);
        let value = `${res.latitude},,${res.longitude},,${res.address}`
        this.push2Messages(MAP, value)
        this.sendMap(value)
        this.scroll2Bottom();
      } catch (err) {}
    },
    async onGetPhoneNumber2() {
      this.onHideMoreChat()
      try {
        // let _location = await getLocation();
        /* 返回选中地址的 经纬度/地址名 */
        // let res = await chooseLocation(_location);
        let value = '已向对方发送获取手机号申请, 请等待对方同意'
        this.push2Messages(PHONE, value)
        this.sendPhone(value)
        this.scroll2Bottom();
      } catch (err) {}
    },
    onRefuse() {
      let value = '已拒绝手机号申请'
      this.push2Messages(TEXT, value)
      this.sendText(value)
      // this.message = ''
      this.scroll2Bottom();
    },
    async onApply() {
      await this.$store.state.socketTask.send({
        data: JSON.stringify({
          "requestId": random(),
          "action": "sendMobile",
          "data": {
            type: PHONE,
            "toId": this.contactId
          }
        }),
      })
      this.$toast.info('对方已可查看你的手机号')
    },
    onClosePopup() {
      this.productDetail = {};
    },
    onClickPopup() {
      if (this.productDetail.productType == 'product') {
        let param_str = encodeURIComponent(JSON.stringify(this.productDetail));
        this.$push(`/pages/product-detail/main?data=${param_str}`);
      } else if (this.productDetail.productType == 'mission') {
        this.$push(`/pages/production-help-detail/main?id=` + this.productDetail.id);
      }
    },
    onGotoGoods(goods) {
      if (goods.productType == 'product') {
        let param_str = encodeURIComponent(JSON.stringify(goods));
        this.$push(`/pages/product-detail/main?data=${param_str}`);
      } else if (goods.productType == 'mission') {
        this.$push(`/pages/production-help-detail/main?id=` + goods.id);
      }
    },
    onGotoMap(item) {
      this.$push(`/pages/map/main?map=${encodeURIComponent(JSON.stringify(item))}`)
    },
    onPreviewImage(item) {
      wx.previewImage({
        current: item.content,
        urls: item.content
      })
    },
    onSendGoods() {
      let goods = JSON.stringify(this.productDetail);
      this.push2Messages(GOODS, goods)
      this.sendGoods(goods);
      this.productDetail = {}
      this.scroll2Bottom();
    },
    upload(value, index = 0) {
      /* 先构建一个 map, 形如
        {
          0: 'xxx',
          1: 'xxx'
        }
        然后将所有非 tmp 路径都干掉
        形成了
        {
          0: 'xxx',
          3: 'xxx'
        }
        然后循环上传
        然后再把结果替换到 tmpPath 里面去
      */
      let tmpMap = {}
      value.forEach((path, index) => {
        if (isTmpPath(path)) {
          tmpMap[index] = path;
        }
      })
      let uploadFile = (path, id) => {
        return new Promise((resolve, reject) => {
          wx.uploadFile({
            header: {
              'content-type': 'multipart/form-data',
              'token': wx.getStorageSync('session_key')
            },
            filePath: path,
            name: 'file',
            url: 'https://www.xzcricle.com/recyclebackend/image/upload',
            success(res) {
              let url = ''
              try {
                url = JSON.parse(res.data).data.image;
              } catch (err) {
                url = ''
              }
              resolve({
                url,
                id
              })
            }
          })
        })
      }
      let promiseList = []
      for (let key in tmpMap) {
        promiseList.push(uploadFile(tmpMap[key], key))
      }
      /* 将上传之后的列表, 以及之前的列表, 全部返回给调用者 */
      return Promise.all(promiseList).then(res => {
        let tmpPathList = JSON.parse(JSON.stringify(value))
        res.forEach(item => {
          tmpPathList.splice(item.id, 1, item.url)
        })
        return tmpPathList;
      })
    },
    onScroll2Top() {},
    onMore() {
      this.showMoreChat = true;
    },
    onHideMoreChat() {
      this.showMoreChat = false;
    },
    async onGetPhoneNumber(e) {
      let code = e.mp.detail.code;
      if (code) {
        let res = await this.R.fetchGetPhone(code);
        let phone = res.data.data;
        this.onApply()
      } else {
        this.onRefuse()
      }
    }
  }
}
</script>