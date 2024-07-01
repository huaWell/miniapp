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
      <div class="title">延误订单量</div>
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
        legend: {
          bottom: 'bottom',
          left: 'center',
          itemWidth: 8,
          itemHeight: 8,
          data: [
            {
              name: '预测单',
            },
            {
              name: '实际单'
            },
            {
              name: '补库单'
            },
            {
              name: '预计延误',
              itemStyle: {
                borderType: 'dashed',
                borderWidth: 1,
                color: 'transparent',
                borderColor: '#165DFF'
              }
            },
            {
              name: '达交率'
            }
          ]
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: 30,
          top: 10,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
          }
        ],
        series: [
          {
            name: '预测单',
            type: 'bar',
            stack: 'stack',
            color: '#165DFF',
            data: [
              21, 70, 20, 20, 10, null, null
            ]
          },
          {
            name: '实际单',
            type: 'bar',
            stack: 'stack',
            color: '#14C9C9',
            data: [
              10, 20, 50, 50, 50, null, null
            ]
          },
          {
            name: '补库单',
            type: 'bar',
            stack: 'stack',
            color: '#F7BA1E',
            data: [
              60, 5, 20, 5, 20, null, null
            ]
          },
          {
            name: '预计延误',
            type: 'bar',
            stack: 'stack',
            itemStyle: {
              color: 'transparent',
              borderColor: '#165DFF',
              borderType: 'dashed'
            },
            data: [
              null, null, null, null, null, 22, 41
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
