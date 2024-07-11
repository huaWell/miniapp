<style lang="less" scoped>
  @import '~@/styles/color.less';
.publish-container {
  padding-bottom: 80px;

  .name-panel{
      width: 100%;
      padding: 16px;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px solid #F3F3F3;
      align-items: center;
    }
    .name-text{
      color: #323233;
      font-size: 16px;
      line-height: 18px;
      width: 64px;
    }

  .name-input{
      flex: 1;
      height: 32px;
    }
    .name-input input{
      border: none;
      padding-left: 16px;
      font-size: 14px;
      color: #969799;
      height: 32px;
    }
     .name-input input::-webkit-input-placeholder{
       color: #000;
       font-weight: 400;
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

  .result-pop{
    width: 100%;
    height: 100%;
  }
    .result-item{
      height: 50%;
      padding: 6px 0px;
      border-bottom: 1px solid #ddd;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .text{
        color: #000;
        font-size: 20px;
        margin-left: 8px;
      }
      .title{
        color: #ACADBB;
        font-size: 18px;
        margin-left: 4px;
      }
    }
    .custom-icon{
              flex-shrink: 0;
              margin-left: auto;
            }
}
</style>
<template>
  <div class="publish-container">
    <van-cell-group :border="false">
      <!-- <div class="name-panel" style="margin-top: 16px;" :style="{'bottom':inputHeight}">
        <div class="name-text">产品名称</div>
        <div class="name-input">
        
          <input type="text" placeholder="请输入产品名称" :value="productionName" @input="onProductionChange" @blur="onBlur" @focus="onFocus">
        </div>
      </div>

      <div class="name-panel" style="margin-top: 16px;" :style="{'bottom':inputHeight}">
        <div class="name-text">数量</div>   
        <div class="name-input">
           
          <van-field label="ceshi" />
        </div>
      </div> -->

      <van-field
        clearable
        label="产品名称"
        icon="search"
        :value="productionName"
        placeholder="请输入产品名称"
        @focus="onSearch"
      />
      
      <van-field
        clearable
        label="策略"
        icon="search"
        placeholder="请输入选择策略"
      />

      <van-field
        clearable
        type="number"
        :value="amount"
        label="数量"
        placeholder="请输入数量"
      />
      <van-field
        clearable
        :value="date"
        label="开工日期"
        is-link="true"
      />

<!-- 
      <div class="name-panel" style="margin-top: 16px;" :style="{'bottom':inputHeight}">
        <div class="name-text">数量</div>
        <div class="name-input">
          <input type="number" placeholder="请输入数量" :value="amount" @input="onAmountChange" @blur="onBlur" @focus="onFocus">
        </div>
      </div>

      <van-cell custom-class="my-van-cell--large" title="开工日期" is-link @click="showTime=true" :value="date">
      </van-cell> -->
    </van-cell-group>

    <van-button custom-class="my-van-button" type="primary" @click="calDate">计算交期</van-button>
    <van-popup :show="showTime" custom-style="height: 60%;border-top-left-radius:24px;border-top-right-radius:24px;overflow:hidden" position="bottom">
      <van-datetime-picker 
        title="选择日期" type="date" @input="onInput" :value="currentDate"
         :min-date="minDate" 
         :max-date="maxDate" 
         :show-toolbar="true" 
         @confirm="onConfirmTime"
         @cancel="showTime=false"
         :formatter="formatter"
         :visible-item-count="5"
         />
    </van-popup>

    <van-popup :show="showResult"
    custom-style="width:60%;height:30%;border-radius:24px;padding:16px;box-sizing: border-box"
    @close="onClose">
      <div class="result-pop">

          <div class="result-item">
            <div class="icon icon--hw-price"></div>
             <span class="title">报价:</span>
             <span class="text">{{price}}元</span>
          </div>
          <div class="result-item">
            <div class="icon icon--date"></div>
             <span class="title">交期:</span>
             <span class="text">{{caledDate}}</span>
          </div>

      </div>
    </van-popup>
  </div>
</template>
<script>
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
import checkAuthSetting from '@/modules/checkAuthSetting'
// import getAddress from '@/modules/getAddress'
import formatDate from '@/modules/formatDate'
import messageAuthSetting from '@/modules/messageAuthSetting'
import { forEach } from 'lodash'


function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);

    return result.getFullYear() + "-" + (result.getMonth()+1) + "-" + result.getDate();
}

export default {
  name: 'Publish',
  components: {

  },
  data() {
    return {
      showTime:false,
      showResult: false,
      productionName:'',
      amount:'',
      date:null,
      price: '163,496',
      caledDate: addDays(new Date(), 8),
      inputHeight:0,
      maxYear: 0,
      maxMonth: 12,
      currentDate: new Date().getTime(),
      minDate: new Date(1970, 0).getTime(),
      maxDate: new Date(2032, 11).getTime(),
      pickerFormatter(type, value) {
        if (type === 'year') return `${value}年`
        if (type === 'month') return `${value}月`
      }, 
      formatter(type, value) {
        if (type === 'year') {
          return `${value}年`;
        }
        if (type === 'month') {
          return `${value}月`;
        }
        return value;
      },
    }
  },
  onLoad() {},
  onHide() {
  },
  onUnload(){

  },
  async onShow() {
    console.log('--------------------')
    const pages = getCurrentPages()
    const curPage = pages[pages.length-1]
    console.log(curPage.data)
    console.log(curPage.data.productName)
    this.productionName = curPage.data.productName ? curPage.data.productName : ''
  },
  async mounted() {
  },
  methods: {
    onSearch(){
      console.log('123')
      this.$push(`/pages/search/main`);

    },
    onClickIcon(){
      console.log('xxxxxxxxxxxx')
    },
    onShowTime(){
      this.showTime = true;
    },
    onClose(){
      this.showResult = false
    },
    onProductionChange(e) {
      this.productionName = e.mp.detail.value;
      console.log(e)
    },
    onAmountChange(e) {
      this.amount = e.mp.detail.value
    },
    calDate(){
      wx.showLoading()
      let _this = this
      setTimeout(()=>{
        wx.hideLoading()
        _this.showResult = true
      }, 2000)
    },
    getToday() {
      let _date = new Date();
      let _month = _date.getDate() + 1;
    },
    onInput(e) {
      this.currentDate = e.mp.detail;
      let _time = formatDate(this.currentDate);
    },
    onConfirmTime(e) {
      this.showTime = false;
      console.log(this.currentDate)
      let _time = formatDate(this.currentDate);
      console.log(_time)
      this.date = _time.time;
    },
    onFocus(e) {
      let height = e.mp.detail.height;
      this.inputHeight = height - 34 + 'px'
    },
    onBlur(e) {
      this.inputHeight = 0;
    }
  }
}
</script>