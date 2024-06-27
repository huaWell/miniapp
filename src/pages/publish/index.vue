<style lang="less" scoped>
  @import '~@/styles/color.less';
.publish-container {
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
      width: 100%;
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
    //padding: 24px 16px;
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
    .price-panel {
      width: 100%;
      padding: 8px 0px;
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
.price-input{
      flex: 1;
    }
    .price-input input{
      border: none;
      padding-left: 16px;
      font-size: 24px;
      color: #000;
      font-weight: 700;
      height: 32px;
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
    .my-tags-wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    .my-tag{
        width: fit-content;
        height: 24px;
        padding: 4px 12px;
        color: #4F5077;
        font-size: 14px;
        line-height: 20px;
        background: #EEE;
        border-radius: 18px;
        margin-right: 10px;
        margin-top: 10px;
        border: 1px solid #fff;
    }
    .my-tag-active{
        color: #00C35A;
        background: #fff;
        border: 1px solid #00C35A;
    }
    .baby-cell-value{
      color: #000;
    }
}
.custom-header{
  display: flex;
  padding: 26px 16px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
}
 .chat-input {
        border-radius: 8px;
        flex: 1;
        /deep/ .van-cell {
          padding: 8px 12px;
          background: #fff;
          border-radius: 8px;
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
.text{
  color: #969799;
  margin-right: 20px;
}
</style>
<template>
  <div class="publish-container">
    <van-cell-group :border="false">
      <van-field type="textarea" input-class="publish-title-input" autosize :value="form.name" placeholder="宝贝名称" @input="onInputName" />
      <textarea class="textarea" maxlength="-1" placeholder="添加描述，如产品原价，品牌型号，转手原因等" :value="form.desc" @input="onInputDesc"></textarea>
      <div class="upload-wrapper">
        <upload @onOpenImage="onOpenImage" :previewList="previewList" ref="upload" />
      </div>
      <van-cell custom-class="my-van-cell--large" value-class="my-van-cell-value--large" :value="priceValue" title="出价" is-link @click="onShowPrice">
        <div slot="icon" class="icon icon--price"></div>
      </van-cell>
      <van-cell custom-class="my-van-cell--large" title="购入时间" is-link @click="showTime=true" :value="date">
        <div slot="icon" class="icon icon--time"></div>
      </van-cell>
      <van-cell custom-class="my-van-cell--large" value-class="baby-cell-value" :value="babyValue" title="宝贝类型" is-link @click="onShowBaby">
        <div slot="icon" class="icon icon--baby"></div>
      </van-cell>
      <van-cell custom-class="my-van-cell--large">
        <view slot="title" style="width: 100%;">
          <view style="display: flex;">
            <view class="icon icon--baby"></view>
            <view class="van-cell-text">宝贝成色</view>
            <view class="flex" style="flex: 1;"></view>
            <view class="text">选填</view>
          </view>
          <div class="tag-container">
            <div :class="[index==currentColorIndex?'tag tag-active':'tag']" v-for="(color, index) in babyColors" index="index" :key="key" @click="chooseBabyColor(color, index)">
              {{ color.value }}
            </div>
          </div>
        </view>
      </van-cell>
      <van-cell custom-class="my-van-cell--large" value="请选择" :title="form.address || '添加地点标签'" is-link @click="onChooseLocation">
        <div slot="icon" class="icon icon--location"></div>
      </van-cell>
      <van-cell custom-class="my-van-cell--large" value-class="my-van-cell-value--large" :value="selectedCircle.name||'请选择'" title="圈子" is-link @click="onShowCircle">
        <div slot="icon" class="icon icon--circle"></div>
      </van-cell>
    </van-cell-group>
    <van-button custom-class="my-van-button" type="primary" @click="publish"> 立即发布 </van-button>
    <!-- 选择圈子 -->
    <van-action-sheet title="选择圈子" :show="showCircle && !hasCircle" @close="onCloseCircle">
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
        <map class="my-map" :longitude="form.lng" :latitude="form.lat" :enable-zoom="true" :enable-scroll="true" :markers="markers" :polygons="polygons"  :include-points="points"/>
        <van-button class="my-van-button" type="primary" size="large" round @click="onCloseCircle"> 确定 </van-button>
      </div>
    </van-action-sheet>
    <!-- price 选择 -->
    <van-action-sheet :show="showPrice" z-index="100000" close-on-click-overlay>
      <div class="ac-wrapper" style="overflow: hidden;">
        <header>
          设置价格
          <span class="flex"></span>
          <div class="icon--close" @click="showPrice=false"></div>
        </header>
        <div class="body">
          <div class="pop-price-container">
            <div class="price-panel" :style="{'bottom': inputHeight}">
              <div class="price-text">售价</div>
              <div class="price-input">
                <!-- <van-field class="chat-input" :border='false' @input="priceChange" :value="price" type="digit" placeholder="0.00¥" autosize confirm-type="send" /> -->
                <input type="digit"
                  cursor-spacing="30" placeholder="¥0.00" :value="price" @blur="onBlur" @focus="onFocus" @input="priceChange">
              </div>
              <div class="price-free-song" @click="freeSong">免费送</div>
            </div>
            <div class="price-panel">
              <div class="price-text">原价</div>
              <div class="price-input old">
                <!-- <van-field class="chat-input" :border='false' @input="oldPriceChange" :value="oldPrice" type="digit" placeholder="0.00¥" autosize confirm-type="send" /> -->
                <input  
                  type="digit"
                  cursor-spacing="60" placeholder="¥0.00" :value="oldPrice" @input="oldPriceChange">
              </div>
            </div>
            <van-button custom-class="my-van-button-pop" type="primary" @click="confirmPrice"> 确定 </van-button>
          </div>
        </div>
      </div>
    </van-action-sheet>
    <van-popup :show="showTime" custom-style="height: 60%;border-top-left-radius:24px;border-top-right-radius:24px;overflow:hidden" position="bottom">
      <header class="custom-header">
        购入时间
        <span class="flex"></span>
        <div class="icon icon--close" @click="showTime=false"></div>
      </header>
      <div class="body" style="overflow: ;hidden">
        <div class="pop-price-container" style="padding-left: 16px;padding-right: 16px;box-sizing: border-box;overflow: ;hidden">
          <van-datetime-picker title="选择购入时间" type="year-month" @input="onInput" :value="currentDate" :min-date="minDate" :max-date="maxDate" :show-toolbar="false" :visible-item-count="5" />
          <van-button custom-class="my-van-button-pop" type="primary" @click="onConfirmTime"> 确定 </van-button>
        </div>
      </div>
    </van-popup>
    <!-- 选择宝贝 -->
    <van-action-sheet :show="showBaby" z-index="100000" close-on-click-overlay>
      <div class="ac-wrapper">
        <header>
          选择宝贝类型({{ chooseTagStep }}/2)
          <span class="flex"></span>
          <div class="icon--close" @click="showBaby=false"></div>
        </header>
        <div class="body">
          <div class="pop-price-container">
            <div class="my-tags-wrapper">
              <div :class="[index==currentTagIndex?'my-tag my-tag-active':'my-tag']" v-for="(tag,index) in tags" :index="index" :key="key" @click="chooseTag(tag, index)">
                {{ tag.name }}
              </div>
            </div>
          </div>
          <div v-if="chooseTagStep==2">
            <van-button :show="chooseTagStep==2" :color="[chooseTagStep==1?'#eee':'#00C35A']" :custom-style="[chooseTagStep==1?'color:#ACADBB;margin-top:32px!important':'color:#fff;margin-top:32px!important']" custom-class="my-van-button-pop" type="primary" @click="nexStep2ChooseTag"> {{ babyBtnText }} </van-button>
          </div>
          <div v-else style="margin-bottom:24px">
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
import { getLocation } from '@/modules/getLocation'
import checkAuthSetting from '@/modules/checkAuthSetting'
// import getAddress from '@/modules/getAddress'
import formatDate from '@/modules/formatDate'
import messageAuthSetting from '@/modules/messageAuthSetting'
import { forEach } from 'lodash'

const OPTIONAL = "选填"

export default {
  name: 'Publish',
  components: {
    Upload,
  },
  data() {
    return {
      // INIT_POLYGON,
      inputHeight: 0,
      form: {
        name: '',
        desc: '',
        address: '',
        lat: 0,
        lng: 0
      },
      previewList: [],
      // uploadImages: [],
      showPrice: false,
      showCircle: false,
      priceValue: "请选择",
      circle: '',
      freeTitle: "免费送",
      isFree: 0,
      price: "",
      oldPrice: "",
      showTime: false,
      date: '',
      date_record: "",
      buyTime: '',
      buyTime_record: '',
      maxYear: 0,
      maxMonth: 12,
      currentDate: new Date().getTime(),
      minDate: new Date(1970, 0).getTime(),
      maxDate: new Date(2032, 11).getTime(),
      pickerFormatter(type, value) {
        if (type === 'year') return `${value}年`
        if (type === 'month') return `${value}月`
      },
      showBaby: false,
      currentTagIndex: -1,
      originTags: [],
      tags: [],
      babystep: 1,
      babyValue: OPTIONAL,
      text: '请选择',
      babyBtnText: "下一步",
      tagCategory: {},
      tagCategoryIndex: -1,
      tagDetail: {},
      tagDetailIndex: -1,
      chooseTagStep: 0,
      isChooseTag: false,
      babyColors: [],
      currentColor: {},
      currentColorIndex: -1,
      good: {},
      goodId: 0,
      openMap: false,
      openImage: false,
      isHide: false,
      circleList: [],
      selectedCircle: {},
      markers: [],
      polygons: [],
      points: [],
      // 用于圈子详情发布商品时,不允许选择圈子
      hasCircle: false,
      // 用于是否点击发布时发生的跳转
      isPublishClick: false
    }
  },
  onLoad() {},
  onHide() {
    if (!this.isPublishClick)  
      this.isHide = true;
  },
  onUnload(){
    this.isHide = false;
  },
  async onShow() {
    let id = decodeURIComponent(this.$mp.query.id)
    this.goodId = id == 'undefined' ? 0 : id;
    // 打开选择照片
    if (this.openImage) {
      this.openImage = false;
      return;
    } else if (this.openMap) {
      // 打开选择地图
      this.openMap = false;
      return;
    } else if (this.isHide) {
      this.isHide = false;
      return;
    } else if (this.goodId != 0) {
      // 
      let res_baby = await this.R.fetchBaby();
      this.babyColors = res_baby.data.data.condition;
      let res_type = await this.R.fetchBabyType();
      this.tags = res_type.data.data;
      this.originTags = this.tags;
      let res = await this.R.fetchGetProductInfo(id);
      let good = res.data.data;

      this.good = good;
      this.form.name = good.name;
      this.form.desc = good.description;
      this.previewList = good.images;
      this.price = good.price;
      this.oldPrice = good.oriPrice;
      this.isFree = good.isFree;
      this.form.lat = good.lat;
      this.form.lng = good.lng;
      this.form.address = good.address;

      if (this.isFree) this.priceValue = this.freeTitle;
      else this.priceValue = this.price;
      if (good.condition == -1)   this.currentColorIndex = -1;
      else   this.currentColorIndex = this.getConditionIndex(good.condition);
      if (good.secondCategoryId != -1 && good.categoryId != -1)  
        this.setChoosedCategory(good.categoryId, good.secondCategoryId);

     

      console.log(this.date)

      this.markers = [{
        latitude: this.form.lat,
        longitude: this.form.lng
      }]
      
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

      if (good.buyTime) {
        this.buyTime = good.buyTime;
        this.date = good.buyTime;
        let dates = good.buyTime.split("-")
        let month = parseInt(dates[1]) - 1;
        this.currentDate = new Date(dates[0], month).getTime();
      } else {
        this.date = OPTIONAL;
        //this.currentDate = new Date().getTime();
      }
    } else if (this.goodId == 0) {
      this.clear();

      let groupId = this.$mp.query.groupId;
      let groupName = this.$mp.query.groupName;
      if (groupId) {
        this.hasCircle = true;
      }

      let res = await this.R.fetchBaby();
      this.babyColors = res.data.data.condition;
      let res_type = await this.R.fetchBabyType();
      this.tags = res_type.data.data;
      this.originTags = this.tags;
      let { latitude, longitude } = await getLocation();
      let address = await this.R.fetchLocationName({ lat: latitude, lng: longitude })
      this.form.address = address;
      this.form.lat = latitude;
      this.form.lng = longitude;
      this.markers = [{
        latitude: this.form.lat,
        longitude: this.form.lng
      }]
      
      this.fetchCircleList(this.form.lat, this.form.lng)
      
      if (this.hasCircle) {
        this.selectedCircle = {
          name: decodeURIComponent(groupName),
          groupId: groupId 
        }
      }
      //   setTimeout(()=>{
      //   this.polygons = [{
      //   ...INIT_POLYGON
      // }]
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
    }
  },
  async mounted() {
    if (this.goodId == 0) {
      this.clearImage();
    }
  },
  methods: {
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
    // 立即发布
    async publish() {
      let images = this.$refs.upload.getImages();
      
      // return images;
      let data = {
        buyTime: this.buyTime == OPTIONAL ? '' : this.buyTime,
        condition: this.currentColorIndex == -1 ? -1 : this.currentColor.type,
        description: this.form.desc,
        images: images,
        isFree: this.isFree,
        isPublish: 1,
        // 经纬度需改改
        lat: this.form.lat,
        lng: this.form.lng,
        name: this.form.name,
        oriPrice: parseFloat(this.oldPrice),
        price: parseFloat(this.price),
        secondCategoryId: this.tagDetail.id ? this.tagDetail.id : -1,
        address: this.form.address,
        groupId: this.selectedCircle.groupId
      };

      // 

      // return
      if (this.goodId != 0) data.id = this.goodId;
      wx.showLoading();
      let res = await this.R.fetchPublish(data);
      
      wx.hideLoading();
      if (res.data.success) {
        this.clear();
        this.isPublishClick = true;
        this.$toast.success('发布成功');
        let param_str = encodeURIComponent(JSON.stringify(res.data.data));
        if (this.$store.state.userIsAuthMessage) {
          this.$push(`/pages/product-detail/main?data=${param_str}`);
        } else {
          messageAuthSetting().then(() => {
            this.$store.commit('USER_IS_AUTH_MESSAGE', 1);
            this.$push(`/pages/product-detail/main?data=${param_str}`);
          })
        }
      } else this.$toast.fail(res.data.message)
    },
    clear() {
      this.hasCircle = false;
      this.showCircle = false;
      this.form.name = "";
      this.form.desc = "";
      this.form.address = "";
      this.previewList = [];
      this.isFree = 0;
      this.price = "";
      this.oldPrice = "";
      this.buyTime = '';
      this.currentDate = new Date().getTime();
      this.currentColorIndex = -1;
     
      this.priceValue = this.text;
      //this.babyValue = this.text;
      // let _time = formatDate(this.currentDate);
      // this.date = _time.showTime;
      // this.buyTime = _time.time;

      this.babyValue = OPTIONAL;
      this.date = OPTIONAL
      this.buyTime = OPTIONAL

      this.currentColor = {};
      this.tagCategoryIndex = -1;
      this.tagDetailIndex = -1;
      this.tagDetail = {};
      this.isPublishClick = false;
      try {
        this.$refs.upload.clearImages();
      } catch (e) {}
    },
    clearImage() {
      try {
        this.$refs.upload.clearImages();
      } catch (e) {}
    },
    onInputName(e) {
      this.form.name = e.mp.detail;
    },
    onInputDesc(e) {
      this.form.desc = e.mp.detail.value
    },
    onShowPrice() {
      this.showPrice = true;
    },
    confirmPrice() {
      if (parseFloat(this.priceValue) < 0.01) {
        this.priceValue = this.freeTitle;
        this.isFree = 1;
      } else {
        this.isFree = 0;
      }
      this.showPrice = false;
    },
    freeSong() {
      this.priceValue = this.freeTitle;
      this.showPrice = false;
      this.isFree = 1;
      this.price = 0;
      this.oldPrice = 0;
    },
    priceChange(e) {
      this.price = e.mp.detail.value;
      this.priceValue = e.mp.detail.value;
    },
    oldPriceChange(e) {
      this.oldPrice = e.mp.detail.value;
    },
    getToday() {
      let _date = new Date();
      let _month = _date.getDate() + 1;
    },
    onInput(e) {
      this.currentDate = e.mp.detail;
      let _time = formatDate(this.currentDate);
      
      this.date = _time.showTime;
      this.buyTime = _time.time;
      this.date_record = _time.showTime;
      this.buyTime_record = _time.time;
    },
    onConfirmTime() {
      this.showTime = false;
      this.date = this.date_record;
      this.buyTime = this.buyTime_record;
      this.date_record = "";
      this.buyTime_record = "";
    },
    onShowBaby() {
      this.showBaby = true;
      this.tags = this.originTags;
      this.currentTagIndex = this.tagCategoryIndex;
      this.chooseTagStep = 1;
      this.babyBtnText = "下一步";
      if (this.currentTagIndex != -1) this.isChooseTag = true;
      else this.isChooseTag = false;
    },
    chooseTag(tag, index) {
      this.currentTagIndex = index;
      this.isChooseTag = true;
      if (this.chooseTagStep == 1) {
        this.tagCategory = tag;
        this.tagCategoryIndex = index;
        this.tags = this.tagCategory.children;
        this.chooseTagStep++;
        this.babyBtnText = "上一步";
        this.currentTagIndex = this.tagDetailIndex != -1 ? this.tagDetailIndex : this.currentTagIndex;
        if (this.tagDetailIndex != -1) this.isChooseTag = true;
        else this.isChooseTag = false;
      } else if (this.chooseTagStep == 2) {
        this.tagDetail = tag;
        this.tagDetailIndex = index;
        this.showBaby = false;
        this.babyValue = this.tagCategory.name + "-" + this.tagDetail.name;
      }
    },
    nexStep2ChooseTag() {
      if (this.chooseTagStep == 2) {
        // 上一步
        this.tags = this.originTags;
        this.babyBtnText = "下一步";
        this.chooseTagStep--;
      }
    },
    chooseBabyColor(color, index) {
      this.currentColorIndex = index;
      this.currentColor = color;
    },
    onCancelTime() {},
    setChoosedCategory(categoryId, secondCategoryId) {
      if (this.tags.length > 0) {
        let rootName = "",
          categoryName = "";
        for (let i = 0; i < this.tags.length; ++i) {
          if (this.tags[i].id == categoryId) {
            this.tagCategoryIndex = i;
            rootName = this.tags[i].name;
            break;
          }
        }
        for (let i = 0; i < this.tags[this.tagCategoryIndex].children.length; ++i) {
          let tag = this.tags[this.tagCategoryIndex].children[i];
          if (tag.id == secondCategoryId) {
            this.tagDetail = tag;
            this.tagDetailIndex = i;
            categoryName = tag.name;
            break;
          }
        }
        this.babyValue = rootName + "-" + categoryName;
      }
    },
    getConditionIndex(condition) {
      for (let i = 0; i < this.babyColors.length; ++i) {
        if (condition == this.babyColors[i].type) {
          this.currentColor = this.babyColors[i];
          return i;
        }
      }
      return 0;
    },
    onFocus(e) {
      let height = e.mp.detail.height;
      this.inputHeight = height - 34 + 'px'
    },
    onBlur(e) {
      this.inputHeight = 0;
    },
    onOpenImage(openImage) {
      this.openImage = openImage;
    },
    async onChooseLocation() {
      let locationSetting = await checkAuthSetting('scope.userLocation')
      this.openMap = true;
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
        this.markers = [{
          latitude: this.form.lat,
          longitude: this.form.lng
        }]
        if (!this.hasCircle)
          this.fetchCircleList(this.form.lat, this.form.lng)
      }
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