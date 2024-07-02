<style lang="less" scoped>
.container {
  --tabs-default-color: #165dff;
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
  background-color: #f1f5fa !important;
  flex-direction: column;

  .card {
    background-color: #fff;
    padding: 12px;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 4px;



    .bar {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;

      .title {
        color: rgb(51, 51, 51);
        flex-basis: auto;
      }
    }

    .content {
      flex: 1;
      display: flex;
      gap: 4px;

      .text {
        flex-basis: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }

      .chart {
        flex: 1;
        height: 100%;
      }

      .tag {
        flex-basis: auto;
      }
    }
  }
}
</style>
<template>
  <div class="container">
    <div class="card" style="height: 300px;">
      <div class="bar">
        <div class="title">质检通过率</div>
        <div class="operation" style="width: 40%;">
          <van-tabs @change="handlerChange" type="card">
            <van-tab title="客户"></van-tab>
            <van-tab title="产品"></van-tab>
          </van-tabs>
        </div>
      </div>
      <div class="content">
        <mp-charts :options="options" :canvasId="'chart1'" />
      </div>
    </div>
  </div>
</template>
<script>
import mpCharts from '@/components/MpCharts.vue'

export default {
  name: 'delayOrderDetails',
  components: {
    mpCharts
  },
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: 5,
          right: 20,
          bottom: 1,
          top: 5,
          containLabel: true
        },
        xAxis: {
          type: 'value',
          min: 0,
          max: 100,
          interval: 20,
          axisLabel: {
            formatter: '{value} %'
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          data: ['客户1', '客户2', '客户3', '客户4', '客户5', '客户6', '客户7']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            seriesLayoutBy: 'column',
            data: [98, 94, 90, 85, 97, 98, 87],
            color: '#165DFF',
            barWidth: 7,
            realtimeSort: true,
            label: {
              show: true,
              position: 'right',
              valueAnimation: true,
              fontFamily: 'monospace',
              formatter: '{c}%'
            }
          }
        ]
      }
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
  },
  mounted() {
    console.log('xxxxx')
  },

  methods: {
    handlerChange(ev) {
      let index = ev.target.index;
      let count = 7;
      let text = index == 0 ? "客户" : "产品";
      const arr = Array.from({ length: count }, (_, i) => `${text}${i + 1}`);
      console.log(arr);
      this.options.yAxis.data = arr;
    }
  }
}
</script>
