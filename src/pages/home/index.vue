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

      .near-distance {
        font-size: 14px;
        color: #4F5077;
        line-height: 16px;
        margin-left: 12px;
      }

      .near-distance-active {
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

  .inner {
    display: flex;
    align-items: center;
  }

  .inner_1 {
    width: 100%;
    height: 100%;
  }

  .left {
    display: flex;
    flex-direction: column;
    width: 152px;

  }

  .title {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: #000;
    height: 32px;
  }

  .remark {
    margin-top: 8px;
    font-size: 12px;
    line-height: 16px;
    color: #3D3D3D;
    height: 32px;
  }

  .right {
    margin-left: 16px;

    .img {
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

    .footer {
      position: absolute;
      width: 100%;
      bottom: 0px;
      //left: 0px;
      color: white;
      height: 30px;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
      border-radius: 0 0 8px 8px;
      box-sizing: border-box;
      padding: 0px 4px;
      line-height: 30px;

      .title {
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

.distance-wrapper {
  display: flex;
  align-items: center;
}

.free-distance {
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

.free-distance-active {
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
  left: 10px;
  /* attation this*/
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

.qipao_wrap {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  z-index: 999;
  opacity: 0.9;
}

.qipao_none {
  display: none;
}

.qipao {

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

.qipao::before {
  content: '';
  width: 0;
  height: 0;
  border: 10px solid;
  position: absolute;
  bottom: -20px;
  // left: 70px;
  border-color: #00C35A transparent transparent;
}

.qipao::after {
  content: '';
  width: 0;
  height: 0;
  border: 10px solid;
  position: absolute;
  bottom: -18px;
  // left: 70px;
  border-color: #00C35A transparent transparent;
}
</style>
<template>
  <div class="home-container" @click="hideTip">
    <div class="search-wrapper" :style="{ 'top': searchBarTop + 'px', 'width': searchBarWidth + 'px' }">
      <search @search="search" placeholder="搜索商品"></search>
    </div>

    <div style="width: 100vw;height: 250px;background-color: red;">
      <mpvue-echarts lazyLoad :echarts="echarts" :onInit="onInit" ref="echarts" />
    </div>

    <div style="width: 100vw;height: 250px;background-color: red;">
      <mp-charts :options="chartOption" />
    </div>
    <div class="body">
    </div>

  </div>
</template>
<script>
import Search from '@/components/Search.vue'
import * as echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
import mpCharts from '@/components/MpCharts.vue';
const NEAR = 0;
const FREE = 1
var chart = null;
// import cGetAddress from '@/modules/cGetAddress'
// import chooseLocation from '@/modules/chooseLocation'
// import {getLocation,setLocation} from '@/modules/getLocation'
import checkAuthSetting from '@/modules/checkAuthSetting'
export default {
  name: 'Home',
  components: {
    Search,
    mpvueEcharts,
    mpCharts
  },
  data() {
    return {
      echarts,
      chartOption: {
        title: {
          text: '柱状图示例'
        },
        tooltip: {},
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130]
          }
        ]
      },
    }
  },
  async onPullDownRefresh() {


      //wx.stopPullDownRefresh();

    //this.$toast.success('刷新成功')

  },
  onReachBottom() {
  },
  onShareAppMessage: function (res) {
    var that = this;
    // if (res.from === 'button') {
    //   //
    // } else if (res.from === 'menu'){
    //   //
    // }
    // 返回数据
    // return {
    //   title: "闲置能换钱！出圈儿，一个让你融入这座城的网站!",
    //   path: '/pages/home/main',
    //   success: function (res) {
    //     // 转发成功，可以把当前页面的链接发送给后端，用于记录当前页面被转发了多少次或其他业务
    //   },
    //   fail: function (res) {
    //     // 转发失败

    //   }
    // }
  },
  onShow() {
    console.log('000')
    this.initChart()
  },
  mounted() {
    console.log('xxxxx')
  },

  methods: {
    onInit(canvas, width, height) {
      console.log('111')
      chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(chart)
      chart.setOption(this.chartOption)
      return chart
    },
    initChart() {
      console.log('222')
      this.$refs.echarts.init()
    }
  }
}
</script>
