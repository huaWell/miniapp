<style lang="less" scoped>
  @import '~@/styles/color.less';
.ask-buy-container {
  .custom-value {
    display: flex;
    justify-content: flex-end;
  }

  .avatar {
    display: block;
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }

      .production{
            padding-left: 16px;
            padding-right: 16px;
            box-sizing: border-box;
               
                 .circle {
                  display: flex;
                  align-items: center;
                  background-color: rgba(239,239,239,0.6);
                  border-radius: 8px;
                  height: 48px;
                  padding: 8px 12px;
                  box-sizing: border-box;
                  margin-top: 16px;
                  
                  .image{
                    width: 32px !important;
                    height: 32px !important;
                    display: block;
                  }
                  .title{
                    color: #000;
                    font-size: 14px;
                    line-height: 16px;
                    font-weight: 500;
                    margin-left: 8px;
                  }
              }
              .divider{
                height: 0;
                border: 1px solid #4F5077;
                opacity: 0.05;
                margin-top: 16px;
              }
        .production-inner{
          position: relative;
            display: flex;
            width: 100%;
            background: #fff;
            padding-bottom: 16px;
            padding-top: 16px;
            box-sizing: border-box;
        

            .left{
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .image-block{
                width: 80px;
                height: 80px;
            }
            .production-image {
                min-width: 80px;
                width: 80px;
                height: 80px;
                border-radius: 8px;
                border: 1px solid #f3f3f3;
                box-sizing: border-box;
            }
            .fail-block {
              position: absolute;
              top: 66rpx;
              left: 0px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              background: #8D8D8D;
              padding: 4px 8px;
              box-sizing: border-box;
              height: 24px;
              z-index: 99;
              width: 56px;
              font-size: 12px;
            }
            .custom-icon{
              flex-shrink: 0;
              margin-left: auto;
            }
            .right{
                margin-left: 15px;
                height: 80px;
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
                height: 44px;
                font-family: 'PingFang SC';
            }
            .info{
                display: flex;
                align-items: flex-end;
                font-family: 'Montserrat';
                height: 36px;
            }
            .production-status{
                background: rgba(255,162,162,0.16);
                padding: 4px;
                box-sizing: border-box;
                font-size: 12px;
                border-radius: 4px;
                color: #FF3939;
                font-weight: 500;
            }
            .price{
                font-size: 16px;
                font-weight: 700;
                color: #000;
                line-height: 17px;
                display: flex;
                align-items: flex-end;
                height: 36px;
            }
            .old-price{
              font-size: 12px;
              font-weight: 500;
              line-height: 14px;
              color: #ACADBB;
              margin-left: 4px;
            }
            .status {
                display: flex;
                align-items: flex-end;
                font-size: 12px;
                line-height: 15px;
                color: #ACADBB;
                font-weight: 500;
            }
          }
        }
        .production-gray{
          -webkit-filter: grayscale(100%);
          -moz-filter: grayscale(100%);
          -ms-filter: grayscale(100%);
          -o-filter: grayscale(100%);
          filter: grayscale(100%);
          filter: gray;
          filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
        }
}
  .good-status{
    background-color: cornflowerblue;
    padding: 2px 8px;
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
  }
</style>
<template>
  <div class="ask-buy-container">
    <van-tabs :active="activeTab" @change="onChange" :border="false">
      <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab.name">
        <div v-show="activeTab == ALL">
           <div class="production" v-for="(good, index) in goods" :key="index" @click="toProductionHelpDetail(good)">
              <div class="production-inner">
                <div class="left">
                    <div class="image-block">
                      <img class="production-image" :src="good.headImg" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="production-title-panel">
                        <div class="production-title text-overflow--2">
                            {{good.title}}
                        </div>
                      </div>
                      <div class="info">
                          <div v-if="good.lowPrice==good.highPrice" class="price">¥{{good.lowPrice}}</div>
                          <div v-if="good.lowPrice!=good.highPrice" class="price">¥{{good.lowPrice}}-{{good.highPrice}}</div>
                          <!-- <div class="old-price">心理价位</div> -->
                          <span class="flex"></span>
                          <span v-if="good.secCheckStatus==2" class="good-status" style="background-color: #e86262;">审核失败</span>
                          <span v-if="good.secCheckStatus==1" class="good-status" style="background-color: #dcdc1b;">审核中</span>
                          <span v-if="good.secCheckStatus==0 && good.isDelete==0"  class="good-status" style="background-color: #00C35A;">进行中</span>
                          <span v-if="good.secCheckStatus==0 && good.isDelete==1" class="good-status" style="background-color: #ccc;">已关闭</span>
                      </div>
                    </div>
                <div>
              </div>
            </div>
            
            <div class="circle" v-if="good.groupId" @click.stop="toCircle(good)">
              <img class="image" :src=good.groupImage alt="" />
              <span class="title text-overflow--1">{{good.groupName}}</span>
              <div class="icon--arrow-right" style="margin-left: auto;" ></div>
            </div>
            <div class="divider"></div>
          </div>

          <div v-if="goods.length==0">
            <van-empty 
                description="您尚未求购任何商品"
                image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
                >
                <van-button type="primary" @click="toPublishHelp()">马上去求购宝贝</van-button>
            </van-empty>
          </div>
          <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!hasMore && goods.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
          </div>
            
        </div>
        <div v-show="activeTab == PENDING">
         <div class="production" v-for="(good, index) in pendingGoods" :key="index" @click="toProductionHelpDetail(good)">
              <div class="production-inner">
                <div class="left">
                    <div class="image-block">
                      <img class="production-image" :src="good.headImg" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="production-title-panel">
                        <div class="production-title text-overflow--2">
                             {{good.title}}
                        </div>
                      </div>
                      <div class="info">
                          <div v-if="good.lowPrice==good.highPrice" class="price">¥{{good.lowPrice}}</div>
                          <div v-if="good.lowPrice!=good.highPrice" class="price">¥{{good.lowPrice}}-{{good.highPrice}}</div>
                          <!-- <div class="old-price">心理价位</div> -->
                          <span class="flex"></span>
                          <span v-if="good.secCheckStatus==2" class="good-status" style="background-color: #e86262;">审核失败</span>
                          <span v-if="good.secCheckStatus==1" class="good-status" style="background-color: #dcdc1b;">审核中</span>
                      </div>
                    </div>
                <div>
              </div>
          </div>
            <div class="circle" v-if="good.groupId"  @click.stop="toCircle(good)">
              <img class="image" :src=good.groupImage alt="" />
              <span class="title text-overflow--1">{{good.groupName}}</span>
              <div class="icon--arrow-right" style="margin-left: auto;"></div>
            </div>
            <div class="divider"></div>
          </div>
            <div v-if="pendingGoods.length==0">
            <van-empty 
                description="您尚未求购任何商品"
                image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
                >
                <van-button type="primary" @click="toPublishHelp()">马上去求购宝贝</van-button>
            </van-empty>
          </div>
          <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!pendingHasMore && pendingGoods.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
          </div>
        </div>
        <div v-show="activeTab == REJECTED">
         <div class="production" v-for="(good, index) in closedGoods" :key="index" @click="toProductionHelpDetail(good)">
              <div class="production-inner">
                <div class="left">
                    <div class="image-block">
                      <img class="production-image" :src="good.headImg" alt="">
                    </div>
                </div>
                <div class="right">
                    <div class="production-title-panel">
                        <div class="production-title text-overflow--2">
                            {{good.title}}
                        </div>
                      </div>
                      <div class="info">
                          <div class="status">已关闭</div>
                      </div>
                    </div>
                <div>
              </div>
          </div>
            <div class="circle" v-if="good.groupId" @click.stop="toCircle(good)">
              <img class="image" :src=good.groupImage alt="" />
              <span class="title text-overflow--1">{{good.groupName}}</span>
              <div class="icon--arrow-right" style="margin-left: auto;" ></div>
            </div>
            <div class="divider"></div>
          </div>
          <div v-if="closedGoods.length==0">
            <van-empty 
                description="您尚未求购任何商品"
                image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
                >
                <van-button type="primary" @click="toPublishHelp()">马上去求购宝贝</van-button>
            </van-empty>
          </div>
          <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!closedHasMore && closedGoods.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
  import qs from 'querystring'
  import { getLocation } from '@/modules/getLocation'
const ALL = 0;
const PENDING = 1;
const REJECTED = 2;

export default {
  name: 'MyAskBuy',
  components: {
    
  },
  data() {
    return {

      ALL,
      PENDING,
      REJECTED,

      tabs: [{
        name: '全部'
      }, {
        name: '进行中'
      }, {
        name: '已关闭'
      }],
      activeTab: 0,
      goods: [],
      pendingGoods:[],
      closedGoods:[],
      page: 1,
      pendingPage:1,
      closedPage:1,
      isDelete:0,
      allHasMore:false,
      pendingHasMore:false,
      closedHasMore:false
    }
  },
  async onPullDownRefresh(){
    this.goods = [];
    this.pendingGoods = [];
    this.closedGoods = [];
    this.page = 1;
    this.pendingPage = 1;
    this.closedPage = 1;
    this.hasMore = false;
    this.pendingHasMore = false;
    this.closedHasMore = false;

    if (this.activeTab == 0) {
      //this.getGoods(this.page);
      let res = await this.R.fetchMissionList(1);
      this.goods = res.data.data.dataList;
      this.hasMore = res.data.data.hasMore;
    } else if (this.activeTab == 1) {
      //this.getGoods(this.page, 0);
      let res = await this.R.fetchMissionList(1,0);
      this.pendingGoods = res.data.data.dataList;
      this.pendingHasMore = res.data.data.hasMore;
    } else if (this.activeTab == 2) {
      //this.getGoods(this.page, 1);
      let res = await this.R.fetchMissionList(1, 1);
      
      this.closedGoods = res.data.data.dataList;
      this.closedHasMore = res.data.data.hasMore;
    }
     wx.stopPullDownRefresh();
  },
  onReachBottom(){
    if (this.activeTab == 0 && this.allHasMore) {
      this.getGoods(++this.page)
    } else if (this.activeTab == 1 && this.pendingHasMore) {
      this.getGoods(++this.pendingPage, 0);
    } else if (this.activeTab == 2 && this.closedHasMore) {
      this.getGoods(++this.closedPage, 1);
    }
  },
  async mounted() {
    this.clear();
    this.refresh();
  },
  methods: {
    clear(){
      this.goods = [];
      this.pendingGoods = [];
      this.closedGoods = [];
      this.page = 1;
      this.pendingPage = 1;
      this.closedPage = 1;
      this.hasMore = false;
      this.pendingHasMore = false;
      this.closedHasMore = false;
    },
    async getGoods(page, isDelete){
      let res = await this.R.fetchMissionList(page, isDelete);
      
      if (this.activeTab == 0) {
        this.goods = this.goods.concat(res.data.data.dataList);
        this.hasMore = res.data.data.hasMore;
      } else if (this.activeTab == 1) {
        this.pendingGoods = this.pendingGoods.concat(res.data.data.dataList);
        this.pendingHasMore = res.data.data.hasMore;
      } else if (this.activeTab == 2) {
        this.closedGoods = this.closedGoods.concat(res.data.data.dataList);
        this.closedHasMore = res.data.data.hasMore;
      }
    },
    refresh(){
      if (this.activeTab == 0) {
         this.goods = [];
        this.page = 1;
        this.getGoods(this.page);
      } else if (this.activeTab == 1) {
         this.pendingGoods = [];
         this.pendingPage = 1;
        this.getGoods(this.pendingPage, 0);
      } else if (this.activeTab == 2) {
         this.closedGoods = [];
        this.closedPage = 1;
        this.getGoods(this.closedPage, 1);
      }
    },
    onChange(e) {
      this.activeTab = e.mp.detail.index;
      if (this.activeTab == 0 && this.goods.length == 0) {
         this.goods = [];
        this.page = 1;
        this.getGoods(this.page);
      } else if (this.activeTab == 1 && this.pendingGoods.length == 0) {
         this.pendingGoods = [];
         this.pendingPage = 1;
        this.getGoods(this.pendingPage, 0);
      } else if (this.activeTab == 2 && this.closedGoods.length == 0) {
         this.closedGoods = [];
        this.closedPage = 1;
        this.getGoods(this.closedPage, 1);
      }
    },
    toProductionHelpDetail(good){
      this.$push('/pages/production-help-detail/main?id=' + good.id);
    },
    toPublishHelp(){
      this.$push('/pages/publish-help/main');
    },
     // 跳转圈子详情
    async toCircle(good){
      
      let {latitude, longitude} = await getLocation();
      let session_key = wx.getStorageSync("session_key");
      this.$push(`/pages/h5-webview-circle/main?${qs.stringify({
        groupId: good.groupId,
        sessionKey: session_key,
        latitude: latitude,
        longitude: longitude,
      })}`)
    }
  }
}

</script>
