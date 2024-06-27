<style lang="less" scoped>
@import '~@/styles/color.less';
.home-container {
  padding-bottom: calc(100px + env(safe-area-inset-bottom));
  .searchbar-result {
    margin-top: 0;
    font-size: 14px;
  }
  .searchbar-result:before {
    display: none;
  }
  .weui-cell {
    padding: 12px 15px 12px 35px;
  }
  .tab-content {
    margin-top: 10px;
  }
  .location-wrapper {
    height: 60px;
    padding: 0 20px;
    .location-bg {
      border-radius: 16px;
      height: 100%;
      background: url(~@/assets/location-bg.png) center center no-repeat;
      display: flex;
      align-items: center;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .module {
    padding: 20px 15px;
    header {
      display: flex;
      align-items: center;
      font-weight: normal;
      font-size: 14px;
      color: #4F5077;
      .text {
        font-weight: bold;
        font-size: 18px;
        color: black;
      }
      .icon--arrow-right {
        position: relative;
        top: 1px;
        margin-left: 4px;
      }
      .near-distance{
        font-size: 14px;
        color: #4F5077;
        line-height: 16px;
        margin-left: 12px;
      }
      .near-distance-active{
          font-size: 16px;
          color: #000;
          line-height: 18px;
          font-weight: 700;
          margin-left: 12px;
      }
    }
    .body {
      margin-top: 10px;
      .inner {
        display: flex;
        overflow: hidden;
        overflow-x: scroll;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
.bigger-block {
  background: #F3F3F3;
  border-radius: 16px;
  padding: 20px 16px;
  display: flex;
  align-items: center;
  max-width: 240px;
  margin-right: 15px;
  height: 112px;
  box-sizing: border-box;
  min-width: 200px;
  .inner{
    display: flex;
    align-items: center;
  }
.inner_1{
  width: 100%;
  height: 100%;
}
  .left {
    display: flex;
    flex-direction: column;
    width: 152px;
 
  }
     .title{
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      color: #000;
      height: 32px;
    }
    .remark{
      margin-top: 8px;
      font-size: 12px;
      line-height: 16px;
      color: #3D3D3D;
      height: 32px;
    }

  .right {
    margin-left: 16px;
    .img{
      width: 80px;
      height: 80px;
      border-radius: 8px;
    }
  }
  // .title {
  //   font-weight: 700;
  //   font-size: 16px;
  //   line-height: 19px;
  //   color: #000000;
  //   margin-bottom: 10px;
  // }
  // .desc {
  //   display: flex;
  //   .img {
  //     display: block;
  //     height: 80px;
  //     width: 80px;
  //     min-width: 80px;
  //   }
  //   .right {
  //     margin-left: 12px;
  //     position: relative;
  //     .label {
  //       font-size: 14px;
  //       line-height: 16px;
  //       color: #4F5077;
  //     }
  //     .price {
  //       font-weight: 500;
  //       font-size: 20px;
  //       line-height: 20px;
  //       color: #000000;
  //       margin-top: 8px;
  //     }
  //        .tag{
  //         position: absolute;
  //         bottom: 0;
  //         padding: 4px;
  //         box-sizing: border-box;
  //         margin-top: 14px;
  //         background: rgba(255,162,162,0.16);
  //         border-radius: 4px;
  //         width: 64px;
  //         height: 22px;
  //         font-size: 14px;
  //         color: #FF3939;
  //         display: flex;
  //         align-items: center;
  //         justify-content: center;
  //     }
  //   }
  // }
}
.box {
  width: 100%;
  .inner-box {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    position: relative;
    background-position: center center;
    background-size: cover;
    border-radius: 8px;
    .layout-box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .footer{
      position: absolute;
            width: 100%;
            bottom: 0px;
            //left: 0px;
            color: white;
            height: 30px;
            background: linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%);
            border-radius: 0 0 8px 8px;
            box-sizing: border-box;
            padding: 0px 4px;
            line-height: 30px;
      .title{
        font-weight: bold;
        font-size: 12px;
      }
    }
  }
}
.goods-wrapper {
  .goods {
    float: left;
    width: 33.33%;
    border: 4px solid white;
    box-sizing: border-box;
  }
  .goods-image {
    height: 100%;
    width: 100%;
    display: block;
    border-radius: 6px;
  }
  .desc {
    display: flex;
    align-items: center;
    padding: 6px 0;
    position: re;
    .price {
      font-size: 16px;
      font-weight: bold;
    }
    .distance {
      font-size: 12px;
      line-height: 14px;
      /* identical to box height */
      color: #ACADBB;
    }
  }
}
.distance-wrapper{
  display: flex;
  align-items: center;
}
.free-distance{
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  background: #fff;
  border-radius: 4px;
}
.free-distance-active{
  background: #F3F3F3;
}
/* 
swiper 样式调整 
*/
.swiper {
  height: 280px;
  .swiper-item {
    .slide-image {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
/* search-wrapper */
.search-wrapper {
  position: fixed;
  top: 0;
  left: 10px; /* attation this*/
  width: 100%;
  z-index: 1000;
}
/* body 为了做出来圆角效果 */
.body {
  position: relative;
  z-index: 1;
  margin-top: -40px;
  background: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}

.qipao_wrap{
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
    position: fixed;
      bottom: 20px;
              z-index: 999;
              opacity: 0.9;
}
.qipao_none{
  display: none;
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
    .qipao::before{
      content: '';
      width: 0;
      height: 0;
      border: 10px solid;
      position: absolute;
      bottom: -20px;
      // left: 70px;
      border-color:  #00C35A transparent transparent;
	  }
    .qipao::after{
      content: '';
      width: 0;
      height: 0;
      border: 10px solid;
      position: absolute;
      bottom: -18px;
      // left: 70px;
      border-color:  #00C35A transparent transparent;
	  }


</style>
<template>
  <div class="home-container" @click="hideTip">
    <div class="search-wrapper" :style="{'top': searchBarTop + 'px', 'width': searchBarWidth + 'px'}">
      <search @search="search" placeholder="搜索商品"></search>
    </div>
    <swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
        <div v-for="(item, index) in banners" :index="index" :key="key" @click="onClickBanner(item)">
            <swiper-item class="swiper-item">
                <img :src="item.img" class="slide-image" mode="aspectFill"/>
            </swiper-item>
        </div>
    </swiper>
    <div class="body">
    <van-tabs :active="activeTab" @change="onChange" :border="false" custom-class="home-tab">
      <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab.name">

      </van-tab>
    </van-tabs>
        <div class="tab-content" v-show="activeTab == NEAR">
          <div class="location-wrapper" @click="onChooseLocation">
            <div class="location-bg">
               <div> {{address}}</div>
               <div class="icon icon--arrow-right"></div>
            </div>
          </div>
          <div class="module scroll-wrapper">
            <header>
              <span class="text">江湖救急</span>
              <span class="flex"></span>
              <span @click="goProductionHelp">More</span>
              <div class="icon--arrow-right" @click="goProductionHelp"></div>
            </header>
            <div class="body">
              <div class="inner">
                <div class="bigger-block" v-for="(good, index) in helpGoods" :key="index" @click="toProductionHelpDetail(good)">
                  <div class="inner" v-if="good.headImg">
                      <div class="left">
                        <div class="title text-overflow--2">{{good.title}}</div>
                        <div class="remark text-overflow--2">{{good.remark}}</div>
                      </div>
                      <div class="right">
                        <img class="img" :src="good.headImg" alt="">
                      </div>
                  </div>
                  <div class="inner_1" v-if="!good.headImg">
                       <div class="title text-overflow--2">{{good.title}}</div>
                        <div class="remark text-overflow--2">{{good.remark}}</div>
                  </div>
              
                  
                  <!-- <div class="title text-overflow--1">🔥{{good.title}}</div>
                  <div class="desc">
                    <img class="img" :src="good.headImg" alt="">
                    <div class="right">
                      <div class="label">心理价位</div>
                      <div class="price">¥{{good.lowPrice}}</div>
                      <div class="tag">加急请求</div>
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="module">
            <header>
              <span class="text">附近好物</span>
              <span class="flex"></span>
              <span v-for="(distance, index) in nearDistances" :class="[currentDistanceIndex==index?'near-distance-active':'near-distance']" :key="index" @click="onChooseNearDistance(index)">
                {{distance}}km
              </span>
              <!-- <span>More</span>
              <div class="icon--arrow-right"></div> -->
            </header>
            <div class="body">
              <div class="goods-wrapper clearfix">
                <div class="goods" v-for="(good, index) in nearGoods" :key="index" @click="toPublishDetail(good)">
                  <div class="box">
                    <div class="inner-box" :style="{'backgroundImage': 'url(' + good.headImg + ')'}">
                      <!-- <div class="layout-box">
                        <img class="goods-image" :src="good.headImg" alt="">
                      </div> -->
                      <div class="footer">
                          <div class="title text-overflow--1">
                            {{good.name}}
                          </div>
                      </div>
                    </div>
                  </div>
                  <p class="desc">
                    <span class="price">¥{{good.price}}</span>
                    <span class="flex"></span>
                    <span class="distance">{{good.distance}}</span>
                  </p>
                </div>
              </div>
                <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="nearGoodsSearchAfter.length==0">
                  <van-divider contentPosition="center">已经到底了</van-divider>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-content" v-show="activeTab == FREE">
            <div class="module scroll-wrapper" style="padding-top: 0;">
             <div class="body">
               <div class="distance-wrapper">
                  <div :class="[currentFreeDistanceIndex==index ? 'free-distance free-distance-active' : 'free-distance']" v-for="(distance, index) in nearDistances" :key="index" @click="onFreeDistance(index)">
                    {{distance}}km
                  </div>
               </div>
              <div class="goods-wrapper clearfix" style="margin-top: 16px;">
                <div class="goods" v-for="(good, index) in freeGoods" :key="index" @click="toPublishDetail(good)">
                  <div class="box">
                    <div class="inner-box">
                      <div class="layout-box">
                        <img class="goods-image" :src="good.headImg" alt="">
                      </div>
                    </div>
                  </div>
                  <p class="desc">
                    <span class="price">¥{{good.price}}</span>
                    <span class="flex"></span>
                    <span class="distance">{{good.distance}}</span>
                  </p>
                </div>
              </div>
               <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="freeGoodsSearchAfter.length==0">
                  <van-divider contentPosition="center">已经到底了</van-divider>
              </div>
            </div>
            </div>
        </div>


    
    </div>

    <div :class="[showTip?'qipao_wrap':'qipao_wrap qipao_none']" class="qipao_wrap" :show="false">
      <div class="qipao" :show="showTip">{{tip}}</div>
    </div>

  </div>
</template>
<script>
import Search from '@/components/Search.vue'
const NEAR = 0;
const FREE = 1
// import cGetAddress from '@/modules/cGetAddress'
import chooseLocation from '@/modules/chooseLocation'
import {getLocation,setLocation} from '@/modules/getLocation'
import checkAuthSetting from '@/modules/checkAuthSetting'
export default {
  name: 'Home',
  components: {
    Search,
  },
  data() {
    return {
      banners:[],
      address: '',
      gotoSetting: false,
      searchBarTop: 0,
      searchBarWidth: 0,
      tabs: [{
        name: '附近闲置',
      }, {
        name: '免费送'
      }],
      activeTab: 0,
      FREE,
      NEAR,
      currentTab:"0",
      inputVal:"",
      inputShowed:false,
      currentFreeDistanceIndex:0,
      currentDistanceIndex: 0,
      nearDistances: [],
      nearGoods: [],
      nearGoodsSearchAfter:[],
      freeGoods:[],
      freeGoodsSearchAfter: [],
      helpGoods:[],
      tipWithNoGood:"你的附近暂无商品,快去发布把",
      tip:'快去发布你的商品吧',
      showTip: false
    }
  },
  // onShow () {

  // },
  async onPullDownRefresh(){
    
      if (this.activeTab == 0) {
        this.nearGoodsSearchAfter = [];
        this.nearGoods = [];

        await this.refresh();
 
        let banner_res = await this.R.fetchBanner();
        this.banners = banner_res.data.data;

        //let res = await this.R.fetchNearGoods(this.nearDistances[this.currentDistanceIndex], []);
        //this.nearGoods = res.data.data.dataList;
        //this.nearGoodsSearchAfter = res.data.data.searchAfter == null ? [] : res.data.data.searchAfter;

        let {latitude, longitude} = await getLocation();
        this.address = await this.R.fetchLocationName({lat: latitude, lng: longitude})
        wx.setStorageSync('userLocation', JSON.stringify({
          latitude,
          longitude
        }))

        let param = {
          distance: this.nearDistances[this.nearDistances.length-1],
          keyword:'',
          lat: latitude,
          lng: longitude,
          searchAfter:[],
          size:20
        }
 
        let res_help = await this.R.fetchMissionSearch(param);
        this.helpGoods = res_help.data.data.dataList;
        wx.stopPullDownRefresh();

      } else if (this.activeTab == 1) {
        this.freeGoodsSearchAfter = [];
        this.freeGoods = [];
         let res = await this.R.fetchFreeGoods(this.nearDistances[this.currentFreeDistanceIndex], []);
        this.freeGoods = this.freeGoods.concat(res.data.data.dataList);
        this.freeGoodsSearchAfter = res.data.data.searchAfter == null ? [] : res.data.data.searchAfter;
        wx.stopPullDownRefresh();
      }
      this.$toast.success('刷新成功')
      
  },
  onReachBottom(){
      if (this.activeTab == 0) {
        // 附近好物
        if (this.nearGoodsSearchAfter.length > 0) {
            this.getNearGoods(this.nearDistances[this.currentDistanceIndex], this.nearGoodsSearchAfter);
        }
      } else {
         // 免费送
         if (this.freeGoodsSearchAfter.length > 0) {
            this.getFreeGoods(this.nearDistances[this.currentFreeDistanceIndex],this.freeGoodsSearchAfter);
         }

      }
  },
   onShareAppMessage: function(res) {
    var that = this;
  // if (res.from === 'button') {
  //   //
  // } else if (res.from === 'menu'){
  //   //
  // }
  // 返回数据
    return {
      title: "闲置能换钱！出圈儿，一个让你融入这座城的网站!",
      path: '/pages/home/main',
      success: function(res) {
        // 转发成功，可以把当前页面的链接发送给后端，用于记录当前页面被转发了多少次或其他业务
      },
      fail: function(res) {
        // 转发失败
        
      }
    }
  },
  async mounted() {








    if (this.gotoSetting) {
      this.gotoSetting = false;
      wx.reLaunch({
        url: '/pages/home/main'
      })
      return;
    }








    try {
        /* 调整 searchBar 位置 */
        let menuButtonInfo = wx.getMenuButtonBoundingClientRect();
        this.searchBarTop = menuButtonInfo.top;
        const searchPadding = 10;
        this.searchBarWidth = menuButtonInfo.left - searchPadding * 2;

        let {latitude, longitude} = await getLocation();

        console.log(' location', latitude, longitude)
        // 
        let _lat = latitude, _lng = longitude;
        if (!latitude) {
          // 如果用户拒绝了，获取默认地址并设置
              let resLocation = await this.R.fetchDefaultLocation();
              _lat = resLocation.data.data[0];
              _lng = resLocation.data.data[1];
              setLocation(_lat, _lng);
        }
        this.address = await this.R.fetchLocationName({lat: _lat, lng: _lng})

        wx.setStorageSync('userLocation', JSON.stringify({
          latitude: _lat,
          longitude: _lng
        }))


        let banner_res = await this.R.fetchBanner();
        this.banners = banner_res.data.data;

        let res = await this.R.fetchBaseConfig()
        this.nearDistances = res.data.data.searchRange;
        this.currentDistanceIndex = this.nearDistances.length - 1;
        this.currentFreeDistanceIndex = this.nearDistances.length - 1;

        this.nearGoods = [];
        await this.getNearGoods(this.nearDistances[this.currentDistanceIndex]);
        await this.getMissionGoods();

        // 引导框
        if (!wx.getStorageSync('first_login')) {
          this.showTip = true;
          this.tip = this.nearGoods.length == 0 ? this.tipWithNoGood : this.tip;
        } else {
          this.showTip = false;
        }
        wx.setStorageSync('first_login', 'nope');
    } catch (err) {
      
    }





    if (this.$mp.query.scene) {
      // 
      // return
      let scene = this.$mp.query.scene
      if (scene.indexOf('circleId') > -1) {
        let circleId = scene.split('circleId')[1]
        wx.setStorageSync('circleId', circleId)
        wx.switchTab({
          url: `/pages/circle-h5/main`
        })
      }

      if (scene.indexOf('productId') > -1) {
        let productId = scene.split('productId')[1]
        wx.setStorageSync('productId', productId)
        let param_str = encodeURIComponent(JSON.stringify({id: productId}))
        this.$push(`/pages/product-detail/main?data=${param_str}`);
      }

      return
    }














    
  },
  
  methods: {
    hideTip(){
      this.showTip = false;
    },
    async refresh(){
        this.nearGoodsSearchAfter = [];
        this.nearGoods = [];
        this.getNearGoods(this.nearDistances[this.currentDistanceIndex], this.nearGoodsSearchAfter);
        this.getMissionGoods();
    },
    async getMissionGoods(){
        let {latitude, longitude} = await getLocation();

        
        let param = {
          distance: this.nearDistances[this.nearDistances.length-1],
          keyword:'',
          lat: latitude,
          lng: longitude,
          searchAfter:[],
          size:20
        }
        let res = await this.R.fetchMissionSearch(param);
        
        
        this.helpGoods = res.data.data.dataList;
    },
    async onChange(e) {
      this.activeTab = e.mp.detail.index;
      if (this.activeTab == 1) {
          this.freeGoods = [];
          this.getFreeGoods(this.nearDistances[this.currentFreeDistanceIndex]);
      }
    },
    search(data){
        
    },
    // 点击banner
    onClickBanner(item){
      if (item.type == 2) {
          // 跳转详情页  metaData.id
          let param_str = encodeURIComponent(JSON.stringify({id:item.metaData.productId}))
          this.$push(`/pages/product-detail/main?data=${param_str}`);
      } else if (item.type ==3) {
        // 跳转链接
          this.$push('/pages/webview/main?url=' + item.metaData.link);
      }
    },
    goProductionHelp(){
        this.$push('/pages/production-help/main?isFromHome=1');
    },
    toPublishDetail(good){
      let param_str = encodeURIComponent(JSON.stringify(good))
      this.$push(`/pages/product-detail/main?data=${param_str}`);
    },
    async getFreeGoods(distance, searchAfter=[]){
        let res = await this.R.fetchFreeGoods(distance, searchAfter);
        this.freeGoods = this.freeGoods.concat(res.data.data.dataList);
        this.freeGoodsSearchAfter = res.data.data.searchAfter == null ? [] : res.data.data.searchAfter;
    },
    async getNearGoods(distance, searchAfter=[]){
        let res = await this.R.fetchNearGoods(distance, searchAfter);
        this.nearGoods = this.nearGoods.concat(res.data.data.dataList);
        this.nearGoodsSearchAfter = res.data.data.searchAfter == null ? [] : res.data.data.searchAfter;
    },
    // 选择附近好物 -- 距离选择
    async onChooseNearDistance(index) {
      if (this.currentDistanceIndex == index)   return;
      this.currentDistanceIndex = index;
      this.nearGoods = [];
      let res = await this.R.fetchNearGoods(this.nearDistances[index], []);
      this.nearGoods =res.data.data.dataList;
      this.nearGoodsSearchAfter = res.data.data.searchAfter == null ? [] : res.data.data.searchAfter;
      // this.getNearGoods(this.nearDistances[index]);
    },
    onFreeDistance(index){
      this.currentFreeDistanceIndex = index;
      this.freeGoods = [];
      this.getFreeGoods(this.nearDistances[index]);
    },
    toProductionHelpDetail(good){
      
      this.$push('/pages/production-help-detail/main?id=' + good.id)
    },
    async onChooseLocation () {
      let locationSetting = await checkAuthSetting('scope.userLocation')
      if (locationSetting == 'rejected') {
        
        await this.$confirm({
          title: '提示',
          content: '尚未开启定位, 是否开启'
        }).then(res => {
          this.gotoSetting = true;
          wx.openSetting()
        }).catch(err => {
          this.$toast.fail('你又一次拒绝了我们')
        })
      } else {
        let goc = await getLocation();
        let res = await chooseLocation({
          ...goc,
          name: this.address
        });

        this.address = res.name ? res.name : this.address;
        let {latitude, longitude} = res


        wx.setStorageSync('userLocation', JSON.stringify({
          latitude,
          longitude
        }))






        let lat = res.latitude ? res.latitude : latitude;
        let lng = res.longitude ? res.longitude : longitude;
        setLocation(lat, lng);
        this.R.fetchLocationName.address = this.address;
        this.refresh();
      }
    }
  }
}
</script>