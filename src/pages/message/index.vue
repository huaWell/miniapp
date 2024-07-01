<style lang="less" scoped>
@import '~@/styles/color.less';

.message-container {
  .user-message-wrapper {
    header {
      font-size: 18px;
      font-weight: bold;
      margin: 10px 0;
      margin-top: 20px;
      padding: 0 15px;
    }

    .user-message-item {
      display: flex;
      align-items: center;

      .avatar {
        height: 48px;
        width: 48px;
        display: block;
        border-radius: 8px;
      }

      .right {
        flex: 1;
        margin-left: 12px;
        border-bottom: 1rpx solid #ddd;
        box-sizing: border-box;

        .title {
          font-size: 16px;
          font-weight: bold;
          display: flex;
        }

        .flex{
          flex: 1;
        }
        .time{
          font-size: 12px;
          font-weight: 400;
          color: #bbb;
        }

        .sub-title {
          color: @subTitle;
          font-size: 14px;
        }
      }

      .badge {
        background: @danger;
        color: white;
        font-size: 14px;
        line-height: 14px;
        padding: 4px 8px;
        border-radius: 6px;
      }
    }
  }
}

.sy-footer {
  font-size: 13px;
  color: gray;
}

</style>
<template>
  <div class="message-container">
    <van-tabs :active="activeTab" @change="onChangeTab" :border="false">
      <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab.name">
      </van-tab>
    </van-tabs>
    <div class="user-message-wrapper" v-show="activeTab==0">
      <van-cell-group :border="false" v-if="chatList.length">
        <van-cell :border="false" v-for="(chat, index) in chatList" :key="index" @click="onGotoChat(chat)">
          <div slot="title" class="user-message-item">
            <image :src="chat.contactHeadImg" alt="" class="avatar" mode="aspectFill" @click.stop="toMyCenter(chat)" />
            <div class="right">
              <div class="title">
                {{chat.contactName}}
                <span class="flex"></span>
                <span class="time">{{chat.formatMsgTime}}</span>
              </div>
              <div class="sub-title text-overflow--2">
                {{chat.lastedMsg}}
              </div>
            </div>
            <div class="badge" v-if="chat.unReadCount">{{chat.unReadCount}}</div>
          </div>
        </van-cell>
      </van-cell-group>
      <van-empty v-if="chatList.length == 0" description="暂无聊天"></van-empty>
    </div>
    <div class="user-message-wrapper" v-show="activeTab==1">
      <van-cell-group :border="false" v-if="systemMessages.length">
        <van-cell icon="info-o" :is-link="chat.jumpType!=1" v-for="(chat, index) in systemMessages" :key="index" @click="onGotoSystemMessage(chat)">
          <div slot="title">
            <p>{{chat.content}}</p>
            <div class="sy-footer">
              {{chat.date}}
            </div>
          </div>
        </van-cell>
      </van-cell-group>
      <van-empty v-if="systemMessages.length == 0" description="暂无系统消息"></van-empty>
    </div>
  </div>
</template>
<script>
import qs from 'querystring'
import checkAuthSetting from '@/modules/checkAuthSetting'
import getTimeObj from '@/utils/getTimeObj'
import { mapState } from 'vuex'
export default {
  name: 'Message',
  components: {},
  computed: {
  },
  data() {
    return {
      tabs: [{
        name: '聊天',
        id: 1
      }, {
        name: '系统消息',
        id: 2
      }],
      activeTab: 0,
      systemMessages: [],
      cursor: 0,
      limit: 10,
      hasMore: false
    }
  },
  onShow() {
      //wx.removeTabBarBadge({ index: 3 })

  },
  onReachBottom() {

  },
  async onPullDownRefresh() {
  
    wx.stopPullDownRefresh();

  },
  async mounted() {},
  methods: {
    onChangeTab(e) {
      this.activeTab = e.mp.detail.index;

    },
    onGotoSystemMessage(item) {

    },
    async fetchSystemMessages() {
  
    },
    onGotoChat(chat) {
    
    },
    toMyCenter(chat) {
    
    }
  }
}

</script>
