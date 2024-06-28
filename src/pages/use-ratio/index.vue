<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 8px;
  padding: 8px;
  box-sizing: border-box;
  background-color: red !important;
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

    .title {
      color: rgb(51, 51, 51);
      flex-basis: auto;
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
      <div class="title">产能利用趋势</div>
      <div class="content">
        <mp-charts :options="options" :canvasId="'chart1'" />
      </div>
    </div>
    <div class="card" style="height: 300px;">
      <div class="title">产线产能利用率</div>
      <div class="content">
        <mp-charts :options="options1" :canvasId="'chart2'" />
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
        xAxis: [
          {
            type: 'category',
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            axisPointer: {
              label: {
                formatter: function (params) {
                  return 'week' + params.value;
                }
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        grid: {
          left: 40,
          right: '0%',
          bottom: 20,
          top: 20
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        series: [
          {
            data: [27, 33, 29, 36, 30, 40, 27, 47, 30, 63, 13, 100],
            type: 'line',
            symbol: 'none',
            color: '#165DFF',
            smooth: true,
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              }
            }
          }
        ]
      },
      options1: {
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
          data: ['产线1', '产线2', '产线3', '产线4', '产线5', '产线6', '产线7']
        },
        series: [
          {
            name: '2011',
            type: 'bar',
            seriesLayoutBy: 'column',
            data: [98, 80, 75, 99, 17, 8, 17],
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

  methods: {}
}
</script>
