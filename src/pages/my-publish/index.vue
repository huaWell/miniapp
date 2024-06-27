<style lang="less" scoped>
  @import '~@/styles/color.less';
  .my-goods-container {
    padding: 16px 16px;
    box-sizing: border-box;

.my-goods-wrapper {

	display: flex;
	align-items: center;

}


	.img {
		display: block;
		height: 80px;
		width: 80px;
		min-width: 80px;

border: 1px solid #F3F3F3;
border-radius: 8px;

	}
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
	.right {
		margin-left: 12px;
		flex: 1;
		height: 80px;
		.title {
			line-height: 22px;
			font-size: 16px;
			font-weight: bold;
			height: 44px;
		}

		.desc {
			display: flex;
			align-items: flex-end;
			height: 36px;
			.price {

font-weight: 700;
font-size: 18px;
line-height: 20px;

			}
			.origin-price {

margin-left: 6px;
font-size: 12px;
line-height: 15px;
/* identical to box height */

text-decoration: line-through;

color: #ACADBB;


			}
		}
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
  <div class="my-publish-container">
    <van-tabs :active="activeTab" @change="onChange" :border="false">
      <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab.name">
        <div v-show="activeTab == ALL">
          <div class="my-goods-container" v-for="(good, index) in allGoods" :key="index" @click="toPublishDetailPage(good)">
         
              <div slot="title" class="my-goods-wrapper">
                <img :src="good.headImg" alt="" class="img">
                <div class="right">
                  
                  <p class="title text-overflow--2">
                    {{good.name}}
                  </p>
                  <div class="desc">
                    <span class="price">¥{{good.price}}</span>
                    <span class="origin-price">¥{{good.oriPrice}}</span>
                    <span class="flex"></span>
                    <span v-if="good.secCheckStatus==2" class="good-status" style="background-color: #e86262;">审核失败</span>
                    <span v-if="good.secCheckStatus==1" class="good-status" style="background-color: #dcdc1b;">审核中</span>
                    <span v-if="good.secCheckStatus==0 && good.status==1"  class="good-status" style="background-color: #00C35A;">上架中</span>
                    <span v-if="good.secCheckStatus==0 && good.status==2" class="good-status" style="background-color: #ccc;">已下架</span>
                    <span v-if="good.secCheckStatus==0 && good.status==3" class="good-status" style="background-color: #ccc;">已卖出</span>
                  </div>
                </div>
              </div>
            
              <div class="circle" v-if="good.groupId" @click.stop="toCircle(good)">
                  <img class="image" :src=good.groupImage alt="" />
                  <span class="title text-overflow--1">{{good.groupName}}</span>
                  <div class="icon--arrow-right" style="margin-left: auto;" ></div>
              </div>

              <div class="divider"></div>
         
          </div>

          <!-- <my-goods :good="good" v-for="(good, index) in allGoods" :key="index" /> -->
          <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!allHasMore && allGoods.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
          </div>
          <div v-if="allGoods.length == 0">
              <van-empty 
                description="您尚未发布任何商品"
                image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
              >
              <van-button type="primary" @click="goPublish">马上去发布闲置物品</van-button>
            </van-empty>
          </div>
        </div>
        <div v-show="activeTab == PENDING">
          <div class="my-goods-container" v-for="(good, index) in shelfGoods" :key="index" @click="toPublishDetailPage(good)">
             
                <div slot="title" class="my-goods-wrapper">
                  <img :src="good.headImg" alt="" class="img">
                  <div class="right">
                    
                    <p class="title text-overflow--2">
                      {{good.name}}
                    </p>
                    <div class="desc">
                      <span class="price">¥{{good.price}}</span>
                      <span class="origin-price">¥{{good.oriPrice}}</span>
                      <span class="flex"></span>
                      <span v-if="good.secCheckStatus==2" class="good-status" style="background-color: #e86262;">审核失败</span>
                      <span v-if="good.secCheckStatus==1" class="good-status" style="background-color: #dcdc1b;">审核中</span>
                    </div>
                  </div>
                </div>
                   <div class="circle" v-if="good.groupId" @click.stop="toCircle(good)">
                  <img class="image" :src=good.groupImage alt="" />
                  <span class="title text-overflow--1">{{good.groupName}}</span>
                  <div class="icon--arrow-right" style="margin-left: auto;" ></div>
              </div>

              <div class="divider"></div>
         
            </div>
          <!-- <my-goods :good="good" v-for="(good, index) in shelfGoods" :key="index" /> -->
          <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!shelfHasMore && shelfGoods.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
          </div>
          <div v-if="shelfGoods.length == 0">
              <van-empty 
                description="您尚未发布任何商品"
                image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
              >
              <van-button type="primary" @click="goPublish">马上去发布闲置物品</van-button>
            </van-empty>
          </div>
        </div>
        <div v-show="activeTab == RESOLVED">
           <div class="my-goods-container" v-for="(good, index) in takeDownGoods" :key="index" @click="toPublishDetailPage(good)">
             
                <div slot="title" class="my-goods-wrapper">
                  <img :src="good.headImg" alt="" class="img">
                  <div class="right">
                    
                    <p class="title text-overflow--2">
                      {{good.name}}
                    </p>
                    <div class="desc">
                      <span class="price">¥{{good.price}}</span>
                      <span class="origin-price">¥{{good.oriPrice}}</span>
                    </div>
                  </div>
                </div>
                <div class="circle" v-if="good.groupId" @click.stop="toCircle(good)">
                  <img class="image" :src=good.groupImage alt="" />
                  <span class="title text-overflow--1">{{good.groupName}}</span>
                  <div class="icon--arrow-right" style="margin-left: auto;" ></div>
              </div>

              <div class="divider"></div>
         
            </div>
          <!-- <my-goods :good="good" v-for="(good, index) in takeDownGoods" :key="index" /> -->
          <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!takeDownHasMore && takeDownGoods.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
          </div>
          <div v-if="takeDownGoods.length == 0">
              <van-empty 
                description="您尚未发布任何商品"
                image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
              >
              <van-button type="primary" @click="goPublish">马上去发布闲置物品</van-button>
            </van-empty>
          </div>
        </div>
        <div v-show="activeTab == REJECTED">
           <div class="my-goods-container" v-for="(good, index) in selledGoods" :key="index" @click="toPublishDetailPage(good)">
             
                <div slot="title" class="my-goods-wrapper">
                  <img :src="good.headImg" alt="" class="img">
                  <div class="right">
                    
                    <p class="title text-overflow--2">
                      {{good.name}}
                    </p>
                    <div class="desc">
                      <span class="price">¥{{good.price}}</span>
                      <span class="origin-price">¥{{good.oriPrice}}</span>
                    </div>
                  </div>
                </div>
                    <div class="circle" v-if="good.groupId" @click.stop="toCircle(good)">
                  <img class="image" :src=good.groupImage alt="" />
                  <span class="title text-overflow--1">{{good.groupName}}</span>
                  <div class="icon--arrow-right" style="margin-left: auto;" ></div>
              </div>

              <div class="divider"></div>
         
            </div>
          <!-- <my-goods :good="good" v-for="(good, index) in selledGoods" :key="index" /> -->
          <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!selledHasMore && selledGoods.length > 0">
            <van-divider contentPosition="center">已经到底了</van-divider>
          </div>
          <div v-if="selledGoods.length == 0">
              <van-empty 
                description="您尚未发布任何商品"
                image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
              >
              <van-button type="primary" @click="goPublish">马上去发布闲置物品</van-button>
            </van-empty>
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
const RESOLVED = 2;
const REJECTED = 3;

import MyGoods from '@/components/MyGoods'
export default {
  name: 'MyPublish',
  components: {
    MyGoods
  },
  data() {
    return {

      ALL,
      PENDING,
      REJECTED,
      RESOLVED,

      tabs: [{
        name: '全部'
      }, {
        name: '上架'
      }, {
        name: '下架'
      }, {
        name: '卖出'
      }],
      activeTab: 0,
      allGoods: [],
      shelfGoods: [],
      takeDownGoods:[],
      selledGoods:[],
      allPage: 1,
      shelfPage: 1,
      takeDownPage:1,
      selledPage: 1,
      allHasMore:false,
      shelfHasMore:false,
      takeDownHasMore:false,
      selledHasMore:false
    }
  },
  mounted() {
    this.allPage = 1;
    this.shelfPage = 1;
    this.takeDownPage = 1;
    this.selledPage = 1;
    this.allGoods = [];
    this.shelfGoods = [];
    this.takeDownGoods = [];
    this.selledGoods = [];
    //this.activeTab = 0;

    this.refresh();
  },
  async onPullDownRefresh(){
   // this.refresh();
    if (this.activeTab == 0) {
        this.allPage = 1;
        this.allGoods = [];
       // this.getGoods(this.allPage);
      } else if (this.activeTab == 1) {
        this.shelfPage = 1;
        this.shelfGoods = [];
       // this.getGoods(this.shelfPage);
      }  else if (this.activeTab == 2) {
        this.takeDownPage = 1;
        this.takeDownGoods = [];
       // this.getGoods(this.takeDownPage);
      } else if (this.activeTab == 3) {
        this.selledPage = 1;
        this.selledGoods = [];
       // this.getGoods(this.selledPage);
      }
      
      let status = 0;
      if (this.activeTab == 0)  status = 0;
      else if (this.activeTab == 1)   status = 1;
      else if (this.activeTab == 2)   status = 2;
      else if (this.activeTab == 3)   status = 3;
      let res = await this.R.fetchMyPublishList(1, status);
      if (status == 0)  {
        this.allGoods = this.allGoods.concat(res.data.data.dataList);
        this.allHasMore = res.data.data.hasMore;
      } else if (status == 1) {
        this.shelfGoods = this.shelfGoods.concat(res.data.data.dataList);
        this.shelfHasMore = res.data.data.hasMore;
      } else if (status == 2) {
        this.takeDownGoods = this.takeDownGoods.concat(res.data.data.dataList);
        this.takeDownHasMore = res.data.data.hasMore;
      } else if (status == 3) {
        this.selledGoods = this.selledGoods.concat(res.data.data.dataList);
        this.selledHasMore = res.data.data.hasMore;
      }
      wx.stopPullDownRefresh();
  },
  onReachBottom(){
      if (this.activeTab == 0) {
        if (this.allHasMore) {
          this.allPage++;
          this.getGoods(this.allPage);
        }
      }
      else if (this.activeTab == 1) {
        if (this.shelfHasMore) {
          this.shelfPage++;
          this.getGoods(this.shelfPage);
        }
      }
      else if (this.activeTab == 2) {
        if (this.takeDownHasMore) {
          this.takeDownPage++;
          this.getGoods(this.takeDownPage);
        }
      }
      else if (this.activeTab == 3) {
        if (this.selledHasMore) {
          this.selledPage++;
          this.getGoods(this.selledPage);
        }
      }
  },
  methods: {
    async getGoods(page){
      let status = 0;
      if (this.activeTab == 0)  status = 0;
      else if (this.activeTab == 1)   status = 1;
      else if (this.activeTab == 2)   status = 2;
      else if (this.activeTab == 3)   status = 3;
      let res = await this.R.fetchMyPublishList(page, status);
      if (status == 0)  {
        this.allGoods = this.allGoods.concat(res.data.data.dataList);
        
        this.allHasMore = res.data.data.hasMore;
      } else if (status == 1) {
        this.shelfGoods = this.shelfGoods.concat(res.data.data.dataList);
        this.shelfHasMore = res.data.data.hasMore;
      } else if (status == 2) {
        this.takeDownGoods = this.takeDownGoods.concat(res.data.data.dataList);
        this.takeDownHasMore = res.data.data.hasMore;
      } else if (status == 3) {
        this.selledGoods = this.selledGoods.concat(res.data.data.dataList);
        this.selledHasMore = res.data.data.hasMore;
      }
    },
    refresh(){
      
      
      if (this.activeTab == 0) {
        this.allPage = 1;
        this.allGoods = [];
        
        this.getGoods(this.allPage);
      } else if (this.activeTab == 1) {
        this.shelfPage = 1;
        this.shelfGoods = [];
        this.getGoods(this.shelfPage);
      }  else if (this.activeTab == 2) {
        this.takeDownPage = 1;
        this.takeDownGoods = [];
        this.getGoods(this.takeDownPage);
      } else if (this.activeTab == 3) {
        this.selledPage = 1;
        this.selledGoods = [];
        this.getGoods(this.selledPage);
      }  
    },
    onChange(e) {
      this.activeTab = e.mp.detail.index;
     if (this.activeTab == 0 && this.allGoods.length == 0) {
        this.allPage = 1;
        this.allGoods = [];
        
        this.getGoods(this.allPage);
      } else if (this.activeTab == 1 && this.shelfGoods.length == 0) {
        this.shelfPage = 1;
        this.shelfGoods = [];
        this.getGoods(this.shelfPage);
      }  else if (this.activeTab == 2 && this.takeDownGoods.length == 0) {
        this.takeDownPage = 1;
        this.takeDownGoods = [];
        this.getGoods(this.takeDownPage);
      } else if (this.activeTab == 3 && this.selledGoods.length == 0) {
        this.selledPage = 1;
        this.selledGoods = [];
        this.getGoods(this.selledPage);
      }  
     
    },
    toPublishDetailPage(good){
      let param_str = encodeURIComponent(JSON.stringify(good));
      this.$push(`/pages/product-detail/main?data=${param_str}`)
    },
    goPublish(){
      this.$push('/pages/publish/main');
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
