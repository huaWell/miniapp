<style lang="less" scoped>
.container {
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
      <div class="title">成品库存量</div>
      <div class="content">
        <mp-charts :options="options" :canvasId="'chart1'" />
      </div>
    </div>
    <div class="card" style="height: 300px;">
      <div class="title">库存结构</div>
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
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          position: 'center',
          bottom: 0,
          itemHeight: 8,
          itemWidth: 14,
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: 30,
          top: 30,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['成品A', '成品B', '成品C', '成品D', '成品E'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '单位: K',
            min: 0,
            max: 100,
            interval: 20
          },
          {
            type: 'value',
            // name: 'Temperature',
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '数量（箱）',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + 'K';
              }
            },
            barWidth: 23,
            color: '#165DFF',
            data: [80, 76, 68, 62, 58]
          },
          {
            name: '库存占比',
            type: 'line',
            yAxisIndex: 1,
            color: '#14C9C9',
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              }
            },
            data: [30, 59, 70, 70, 80]
          }
        ]
      },
      options1: {
        graphic: {
          elements: [
            {
              type: 'text',
              right: 'center',
              bottom: 'center',
              style: {
                text: '总库存占比\n\n75%',
                textAlign: 'center'
              },
              z: 100
            }
          ]
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['45', '60'],
            label: {
              show: true,
              position: 'outside',
              alignTo: 'labelLine',
              formatter: '{b}: {d}%'
            },
            labelLine: {
              showAbove: true,
              length: 5,
              length2: 40
            },
            data: [
              { value: 30, name: '原材料' },
              { value: 40, name: '成品' },
              { value: 30, name: '半成品' }
            ]
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
