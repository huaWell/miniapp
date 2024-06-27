<style lang="less" scoped>
  @import '~@/styles/color.less';
.publish-container {
  position: relative;
  padding-bottom: 80px;
  .textarea {
    padding: 10px 15px;
    font-size: 15px;
    background: white;
    width: 100%;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 16px;
    color: @subTitle;
  }
  .upload-wrapper {
    padding: 0 15px;
  }
  .icon {
    position: relative;
    top: 4px;
    margin-right: 8px;
  }
  .tag-container{
      display: flex;
      width: 88%;
      height: 36px;
      overflow-x: scroll;
      box-sizing: border-box;
      margin-bottom: -8px;
      margin-top: 16px;
      margin-right: 16px;
  }
  .tag{
    height: 24px;
    width: fit-content;
    padding: 4px 12px;
    background-color: #EEE;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #4F5077;
    border-radius: 18px;
    flex-shrink: 0;
    margin-right: 8px;
    border: 1px solid #fff;
  }
  .tag-active{
      color: #00C35A;
      background: #fff;
      border: 1px solid #00C35A;
  }
  /*隐藏滚动条*/
  ::-webkit-scrollbar{
    width: 0;
    height: 0;
    color: transparent;
  }
  .pop-price-container{
    width: 100%;
    height: 100%;
    // padding: 24px 16px;
    box-sizing: border-box;
    .title-panel{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .title-text{
        color: #000;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
    }
    .price-type{
      margin-top: 16px;
      padding-top: 16px;
      padding-bottom: 16px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(79,80,119,0.05);
    }
    .price-type-text{
      font-size: 16px;
      line-height: 18px;
      color: #4F5077;
      margin-right: 40px;
    }
    .price-type-text-active{
      font-size: 16px;
      line-height: 18px;
      color: #00C35A;
      font-weight: 700;
      margin-right: 40px;
    }
    .price-panel{
      width: 100%;
      padding: 16px 0px;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px solid #F3F3F3;
      align-items: center;
    }
    .price-text{
      color: #ACADBB;
      font-size: 16px;
      line-height: 18px;
      width: 32px;
    }
    .price-text-1{
      width: 64px;
    }

.price-input{
      flex: 1;

    }
    .price-input input{
      border: none;
      padding-left: 16px;
      font-size: 24px;
      color: #000;
      font-weight: 700;
    }
     .price-input input::-webkit-input-placeholder{
       color: #ACADBB;
       font-weight: 400;
    }
    .old{
      font-size: 16px;
    }
    .old input{
      font-size: 16px;

    }
    .old input::-webkit-input-placeholder{
      font-size: 16px;
      color: #000;
    }
    .price-free-song{
        font-size: 14px;
        line-height: 32px;
        border: 1px solid #000;
        border-radius: 20px;
        text-align: center;
        width: 88px;
        height: 32px;
    }
    .my-van-cell--large>.van-cell>.van-cell__value span{
      color: #000 !important;
    }
  }

    .baby-cell-value{
      color: #000;
    }
}


.circle-list {
  padding: 10px 15px;
  max-height: 220px;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.circle-item {
  background: #FFFFFF;
  border: 1px solid #F1F1F1;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
  .cover {
    display: block;
    height: 44px;
    width: 44px;
    border-radius: 4px;
    background-position: center;
    background-size: cover;
  }
  .right {
    flex: 1;
    margin-left: 8px;
    position: relative;
    .title {
      font-weight: bold;
    }
    .distance {
      font-size: 14px;
      color: gray;
      margin-top: 3px;
    }
    .tag {
      position: absolute;
      bottom: 0;
      right: 0;
      // padding: 2px1
    }
  }
}
.active {
  border-color:black;
}
.map-block {
  padding: 0 15px;
  padding-top: 10px;
  // padding-top: 0;
  // padding-bottom: 30px;
  .my-map {
    width: 100%;
    height: 180px;
  }
}




</style>
<template>
  <div class="publish-container">
    <van-cell-group :border="false">
      <van-field input-class="publish-title-input" type="textarea" autosize v-model="form.name" placeholder="宝贝名称" @change="onNameChange" />
      <textarea class="textarea" maxlength="-1" placeholder="添加描述，如产品原价，品牌型号，转手原因等" :value="form.desc" @input="onInputDesc"></textarea>
      <div class="upload-wrapper">
        <upload @onOpenImage="onOpenImage" :previewList="previewList" ref="upload" v-model="uploadImages" />
      </div>

      <van-cell custom-class="my-van-cell--large" value-class="my-van-cell-value--large" :value="priceValue" title="心理价位" is-link  @click="onShowPrice">
        <div slot="icon" class="icon icon--price"></div>
      </van-cell>

      <van-cell custom-class="my-van-cell--large" value="请选择" :title="form.address || '添加地点标签'" is-link @click="onChooseLocation">
        <div slot="icon" class="icon icon--location"></div>
      </van-cell>

      <van-cell custom-class="my-van-cell--large" value-class="my-van-cell-value--large" :value="selectedCircle.name ||'请选择'" title="圈子" is-link @click="onShowCircle">
        <div slot="icon" class="icon icon--circle"></div>
      </van-cell>


    </van-cell-group>

    <van-button custom-class="my-van-button" type="primary" @click="publish"> 立即发布 </van-button>


    <!-- 选择圈子 -->
    <van-action-sheet title="选择圈子" :show="showCircle&&!hasCircle" @close="onCloseCircle">
      <div class="circle-list">
        <div class="circle-item" :class="{'active': c.selected}" v-for="(c, k) in circleList" :key="key" @click="onSelectCircle(c)">
          <div class="cover" :style="{'backgroundImage': 'url(' + c.img + ')'}"></div>
          <div class="right">
            <div class="title">{{c.name}}</div>
            <div class="distance">{{c.distance}}</div>
            <div class="tag" v-if="c.isMy">管理员</div>
          </div>
        </div>
      </div>
      <div class="map-block">
        <map class="my-map" :longitude="form.lng" :latitude="form.lat" :enable-zoom="true" :enable-scroll="true" :markers="markers" :polygons="polygons" :include-points="points"/>
        <van-button class="my-van-button" type="primary" size="large" round @click="onCloseCircle"> 确定 </van-button>
      </div>
    </van-action-sheet>




    <!-- price 选择 -->
    <van-action-sheet :show="showPrice" z-index="100000" close-on-click-overlay>
      <div class="ac-wrapper">
        <header>
          心理价位
          <span class="flex"></span>
          <div class="icon--close" @click="showPrice=false"></div>
        </header>
        <div class="body">
          <div class="pop-price-container">

            <div class="price-type">
              <div :class= "[priceType==0?'price-type-text-active':'price-type-text']" @click="priceType=0">固定价格</div>
              <div :class= "[priceType==1?'price-type-text-active':'price-type-text']"  @click="priceType=1">价格区间</div>
            </div>

           <div class="price-panel" v-if="priceType==0">
              <div class="price-text price-text-1">心理价格</div>
              <div class="price-input old">
                <input type="digit"  placeholder="¥0.00" :value="price" @input="priceChange">
              </div>
            </div>
            
            <div class="price-panel" v-if="priceType==0" style="height:56px;border: none;">
             
            </div>

            <div class="price-panel" v-if="priceType==1">
              <div class="price-text">最低</div>
              <div class="price-input old">
                <input always-embed type="digit"  placeholder="¥0.00" :value="lowerPrice" @input="lowerPriceChange">
              </div>
            </div>

            <div class="price-panel" v-if="priceType==1">
              <div class="price-text">最高</div>
              <div class="price-input old">
                <input always-embed type="digit"  placeholder="¥0.00" :value="highPrice" @input="highPriceChange">
              </div>
            </div>

            <van-button custom-class="my-van-button-pop" type="primary" @click="confirmPrice"> 确定 </van-button>
          </div>
        </div>
    </div>
    </van-action-sheet>

  </div>
</template>
<script>
import Upload from './components/Upload'

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

import chooseLocation from '@/modules/chooseLocation'
import {getLocation} from '@/modules/getLocation'
import checkAuthSetting from '@/modules/checkAuthSetting'
import messageAuthSetting from '@/modules/messageAuthSetting'

import {forEach} from 'lodash'

export default {
  name: 'PublishHelp',
  components: {
    Upload,
  },
  data() {
    return {
      form: {
        name: '',
        desc: '',
        address: '',
        lat:0,
        lng:0
      },
      previewList: [],
      uploadImages: [],
      showPrice: false,
      priceValue: "请选择",
      price:"",
      lowerPrice:"",
      highPrice:"",
      priceType:0,
      goodId:0,
      openImage:false,
      openMap:false,
      good:{},
      showCircle: false,
      selectedCircle: {},
      circleList: [],
      markers: [],
      polygons: [],
      points: [],
      hasCircle: false
    }
  },
  async onShow(){
    let id = decodeURIComponent(this.$mp.query.id)
    this.goodId = id == 'undefined' ? 0 : id;
    

 

    if (this.openImage) {
      this.openImage = false;
    } else if (this.openMap) {
      this.openMap = false;
    } else if (this.goodId != 0) {
      let res = await this.R.fetchMissionDetail(this.goodId);
      
      let good = res.data.data;
      this.good = good;
      this.form.name = good.title;
      this.form.desc = good.remark;
      this.form.address = good.address;
      this.form.lat = good.lat;
      this.form.lng = good.lng;

    

   
      //this.fetchCircleList(this.form.lat, this.form.lng)
      this.markers = [{
        latitude: this.form.lat,
        longitude: this.form.lng
      }]
      this.previewList = good.imageList;
      
      if (good.highPrice == good.lowPrice) {
        this.price = good.lowPrice;
        this.priceValue = this.price;
        this.highPrice = good.lowPrice;
        this.lowerPrice = good.lowPrice;
      } else {
        this.priceValue = good.lowPrice + "-" + good.highPrice;
        this.highPrice = good.highPrice;
        this.lowerPrice = good.lowPrice;
        this.price = "";
      }

      await this.fetchCircleList(this.form.lat, this.form.lng)
    // 编辑商品状态下，获取当前位置附近的圈子，如果创建时选择了圈子时， 判断是否高亮
      this.selectedCircle = {
        name: good.groupName,
        groupId: good.groupId
      }
      for(let i = 0; i < this.circleList.length; ++i) {
        if (this.selectedCircle.name == this.circleList[i].name) {
          this.circleList[i].selected = true;
        }
      }
    } else if (this.goodId == 0) {
      this.clear();
      let groupId = this.$mp.query.groupId;
      let groupName = this.$mp.query.groupName;
      if (groupId)  this.hasCircle = true;

      let {latitude, longitude} = await getLocation();
      let address = await this.R.fetchLocationName({lat: latitude, lng: longitude})

      this.form.address = address;
      this.form.lat = latitude;
      this.form.lng = longitude;
      this.fetchCircleList(this.form.lat, this.form.lng)
            this.markers = [{
        latitude: this.form.lat,
        longitude: this.form.lng
      }]

      if (this.hasCircle) {
        this.selectedCircle = {
          name: decodeURIComponent(groupName),
          groupId: groupId 
        }
        
      }
    }
  },
  async mounted() {

    if (this.goodId == 0) {
      this.clearImage();
      // let {latitude, longitude} = await getLocation();
      // let address = await this.R.fetchLocationName({lat: latitude, lng: longitude})

      // this.form.address = address;
      // this.form.lat = latitude;
      // this.form.lng = longitude;
    }
  },
  methods: {
    async publish(){
      let images = this.$refs.upload.getImages();
      let data = {
        "highPrice": this.highPrice,
        "imageList": images,
        "lat": this.form.lat,
        "lng": this.form.lng,
        "lowPrice": this.lowerPrice,
        "remark": this.form.desc,
        "title": this.form.name,
        "address": this.form.address,
         "groupId": this.selectedCircle.groupId
      }
      
      
      wx.showLoading();
      let res;
      if (this.goodId != 0) {
        data.id = this.goodId;
        res = await this.R.fetchMissionUpdate(data);
      } else {
        res = await this.R.fetchMissionPublish(data);
      }

      wx.hideLoading();
        if (res.data.success)   {
          this.clear();
          this.$toast.success('发布成功');
          let _id = 0;
          if (this.goodId != 0)   _id = this.goodId;
          else  _id = res.data.data;

          if (this.$store.state.userIsAuthMessage) {
            this.$push('/pages/production-help-detail/main?id=' + _id);
          }else {
            messageAuthSetting().then(()=>{
               this.$store.commit('USER_IS_AUTH_MESSAGE', 1);
               this.$push('/pages/production-help-detail/main?id=' + _id);
            })
          }
      }
      else this.$toast.fail(res.data.message)
    },
    clear(){
      this.showCircle = false;
      this.hasCircle = false;
      this.highPrice = "";
      this.price = "";
      this.lowerPrice = "";
      this.form.lat = 0;
      this.form.lng = 0;
      this.form.name = "";
      this.form.desc = "";
      this.form.address = "";
      this.priceValue = "请选择";
      this.openImage = false;
      this.openMap = false;
      try {
        this.$refs.upload.clearImages();
      }catch(e){}
    },
    clearImage(){
      try {
        this.$refs.upload.clearImages();
      }catch(e){}
    },
    onNameChange(e){
      this.form.name = e.mp.detail;
    },
    onInputDesc(e) {
      this.form.desc = e.mp.detail.value
    },
    onShowPrice () {
      this.showPrice = true;
      // this.price = "";
      // this.lowerPrice = "";
      // this.highPrice = "";
    },
    confirmPrice(){
        if (this.priceType == 0) {
          this.priceValue = this.price;
          this.lowerPrice = this.price;
          this.highPrice = this.price;
        } else if (this.priceType == 1) {
           if (this.lowerPrice == this.highPrice) {
              this.priceValue = this.lowerPrice;
            } else {
              this.priceValue = this.lowerPrice + "-" + this.highPrice;
            }
        }

        this.showPrice = false;
    },
    priceChange(e) {
      this.price = e.mp.detail.value;
      this.lowerPrice = "";
      this.highPrice = "";
    },
    lowerPriceChange(e) {
      this.lowerPrice = e.mp.detail.value;
      this.price = "";
    },
    highPriceChange(e) {
      this.highPrice = e.mp.detail.value;
      this.price = "";
    },
    onOpenImage(openImage){
      this.openImage = openImage;
    },
    async onChooseLocation () {
      this.openMap = true;
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
        this.form.address = res.name ? res.name : this.form.address;
        this.form.lat = res.latitude ? res.latitude : this.form.latitude;
        this.form.lng = res.longitude ? res.longitude : this.form.lng;
        if (!this.hasCircle)
          this.fetchCircleList(this.form.lat, this.form.lng)
        this.markers = [{
          latitude: this.form.lat,
          longitude: this.form.lng
        }]
      }
    },
    async fetchCircleList(lat, lng) {
      this.selectedCircle = {}
      let res = await this.R.fetchGroupList({
        // keyword: '',
        lat,
        lng,
        // searchAfter: this.searchAfter,
        size: 100,
        tab: 'joined'
      })
      this.circleList = forEach(res.data.data.dataList, item => {
        item.selected = false
      })
    },
    onShowCircle() {
      
      this.showCircle = true;
    },
    onCloseCircle() {
      this.showCircle = false;
    },
    onSelectCircle(circle) {
      // this.circleList.
      let selected = !circle.selected
      forEach(this.circleList, item => {
        item.selected = false
      })
      circle.selected = selected
      // this.showCircle = false;
      // this.selectedCircle = 
      if (selected) {
        this.selectedCircle = circle
        this.polygons = [{
          points: this.selectedCircle.polygon.map(item => {
            return {
              latitude: item[1],
              longitude: item[0]
            }
          }),
          strokeWidth: 2
        }]

this.points = []
this.selectedCircle.polygon.forEach(item => {
  this.points.push({
              latitude: item[1],
              longitude: item[0]
            })
})


        // olygon: [[121.36041, 31.329858], [121.594556, 31.352143], [121.644681, 31.306981], [121.648114, 31.156087],…]
        // 0: [121.36041, 31.329858]
        // 1: [121.594556, 31.352143]
        // 2: [121.644681, 31.306981]
        // 3: [121.648114, 31.156087]
        // 4: [121.386502, 31.120824]
        // 5: [121.356976, 31.1837]
        // 6: [121.352857, 31.257688]
        //   }, 1000)
        // [{latitude: form.lat, longitude: form.lng}]
        // const INIT_POLYGON = {
        //   points: [
        //     {latitude: 40.041054, longitude: 116.272303},
        //     {latitude: 40.039419, longitude: 116.272721},
        //     {latitude: 40.039764, longitude: 116.274824},
        //     {latitude: 40.041374, longitude: 116.274491}
        //   ],
        //   strokeWidth: 2,
        // };
      } else {
        this.selectedCircle = {}
      }
    }


  }
}

</script>
