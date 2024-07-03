<style lang="less" scoped>
.container {
  width: 100%;
  min-height: 100vh;
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
      width: 100%;
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
    <div class="card" style="height: 300px;">
      <div class="title">产能</div>
      <div class="content">
        <mp-charts :options="options2" :canvasId="'chart3'" />
      </div>
    </div>

    <div class="card" style="height: 120px;" v-for="(order, index) in orders" :key="index">
      <div class="title">{{ order.name }}</div>
      <div class="content" style="justify-content: space-around;">
        <div class="text" style="color: #ccc;">{{ order.sku }}</div>
        <div class="text" style="color: #ccc;">利润: {{ order.profit }}</div>
        <div class="tag">
          <van-circle size="70" :value="order.ratio1" layer-color="#D7E3FD" color="#3775F6" stroke-width="6"
            :text="order.text1" />
        </div>
        <div class="tag">
          <van-circle size="70" :value="order.ratio2" layer-color="#D7E3FD" color="#3775F6" stroke-width="6"
            :text="order.text2" />
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import mpCharts from '@/components/MpCharts.vue'

const getMonths = () => {
  // 获取当前的月份（从1开始）
  const currentMonth = (new Date()).getMonth() + 1;

  // 构建包含前7个月份名称的数组，确保第五个元素是当前月份
  let months = [];
  for (let i = 1; i <= 7; i++) {
    const monthIndex = currentMonth - 5 + i; // 计算当前月份之前的月份
    if (monthIndex > 0) {
      months.push(`${monthIndex}月`);
    } else {
      months.push(`${monthIndex + 12}月`); // 处理跨年情况，12月之前的月份应该是前一年的月份
    }
  }

  return months;
};

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
      },
      options2: {
        legend: {
          bottom: 'bottom',
          left: 'center',
          itemWidth: 8,
          itemHeight: 8,
          data: [
            {
              name: '产能占用',
            },
            {
              name: '产能富余'
            },
            {
              name: '预计产能占用',
              itemStyle: {
                borderType: 'dashed',
                borderWidth: 1,
                color: 'transparent',
                borderColor: '#165DFF'
              }
            },
            {
              name: '预计产能富余',
              itemStyle: {
                borderType: 'dashed',
                borderWidth: 1,
                color: 'transparent',
                borderColor: '#14c9c9'
              }
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
            data: getMonths(),
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
            name: '产能占用',
            type: 'bar',
            stack: 'stack',
            color: '#165DFF',
            data: [
              90, 80, 50, 50, null, null, null
            ]
          },
          {
            name: '产能富余',
            type: 'bar',
            stack: 'stack',
            color: '#14C9C9',
            data: [
              10, 20, 50, 50, null, null, null
            ]
          },
          {
            name: '预计产能占用',
            type: 'bar',
            stack: 'stack',
            itemStyle: {
              color: 'transparent',
              borderColor: '#165DFF',
              borderType: 'dashed'
            },
            data: [
              null, null, null, null, 71, 22, 41
            ]
          },
          {
            name: '预计产能富余',
            type: 'bar',
            stack: 'stack',
            itemStyle: {
              color: 'transparent',
              borderColor: '#14c9c9',
              borderType: 'dashed'
            },
            data: [
              null, null, null, null, 29, 78, 59
            ]
          }
        ]
      },
      orders: [
        {
          name: '品类1',
          sku: 'sku1',
          profit: '100,000',
          ratio1: 50,
          ratio2: 59,
          text1: '产能占用50%',
          text2: '利润率59%'
        },
        {
          name: '品类2',
          sku: 'sku2',
          profit: '150,000',
          ratio1: 50,
          ratio2: 59,
          text1: '产能占用50%',
          text2: '利润率59%'
        },
        {
          name: '品类3',
          sku: 'sku3',
          profit: '100,000',
          ratio1: 50,
          ratio2: 59,
          text1: '产能占用50%',
          text2: '利润率59%'
        }
      ],
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
