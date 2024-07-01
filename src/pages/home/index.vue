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

  .todo-items {
    display: flex;
    gap: 8px;

    .todo-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      padding: 12px;
      border-radius: 4px;
      gap: 4px;

      .title {
        font-size: 12px;
        color: #333333;
      }

      .value {
        font-size: 12px;
        color: #1677ff;
      }

      .body {
        display: flex;
        width: 100%;
        justify-content: space-between;

        .text {
          font-size: 10px;
          color: #666666;
        }

        .value {
          font-size: 10px;
          color: #ff4a58;
        }
      }
    }
  }


}
</style>
<template>
  <div class="container">
    <div class="todo-items">
      <div class="todo-item" v-for="(item, index) in items" :key="index">
        <div class="title">{{ item.title }}</div>
        <div class="value">{{ item.value }}</div>
        <div class="body">
          <div class="text">
            {{ item.type_name }}
          </div>
          <div class="value">
            {{ item.type_value }}
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="height: 400px;" @click="jump">
      <div class="title">履约趋势</div>
      <div class="content">
        <mp-charts :options="options" :canvasId="'chart1'" />
      </div>
    </div>
    <div class="card" style="height: 100px;" @click="jump1">
      <div class="content">
        <div class="text">
          <div class="description">成品库存总量</div>
          <div class="value">125,083</div>
        </div>
        <div class="chart">
          <mp-charts :options="options1" :canvasId="'chart2'" />
        </div>
      </div>
    </div>
    <div class="card" style="height: 100px;" @click="jump2">
      <div class="content">
        <div class="text">
          <div class="description">大客户履约率</div>
          <div class="value">67%</div>
        </div>
        <div class="chart">
          <mp-charts :options="options1" :canvasId="'chart3'" />
        </div>
      </div>
    </div>
    <div class="card" style="height: 100px;" @click="jump3">
      <div class="content">
        <div class="text">
          <div class="description">产能利用率</div>
          <div class="value">21%</div>
        </div>
        <div class="chart">
          <mp-charts :options="options1" :canvasId="'chart4'" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Search from '@/components/Search.vue'
import mpCharts from '@/components/MpCharts.vue'
import * as echarts from '../../../static/lib/echarts.min.js';

export default {
  name: 'Home',
  components: {
    Search,
    mpCharts
  },
  data() {
    return {
      items: [
        {
          title: '订单履约率',
          value: '80%',
          type_name: '环比',
          type_value: '0.14+'
        },
        {
          title: '产能利用率',
          value: '85%',
          type_name: '环比',
          type_value: '0.14+'
        },
        {
          title: '延误订单（预测）',
          value: '10',
          type_name: '环比',
          type_value: '0.14+'
        }
      ],
      options: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          },
          formatter: function (params) {
            const value_handler = {
              "生产量": 'K',
              "延误量": 'K',
              "预测生产量": 'K',
              "预测延误量": 'K',
              "达交率": '%',
            };

            const marker_handler = {
              "预测生产量": '#165DFF',
              "预测延误量": '#EA5B3A'
            };

            const create_dashed_rect = (color) => {
              return `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;border: 1px dashed ${color}"></span>`
            };

            let tooltipContent = params[0].name + '<br>';
            params.forEach(function (param) {
              if (param.value == 0) return;
              const seriesName = param.seriesName;
              const color = marker_handler[seriesName]
              const marker = color ? create_dashed_rect(color) : param.marker;
              tooltipContent += marker + seriesName + ': ' + param.value + value_handler[seriesName] + '<br>';
            });
            return tooltipContent;
          }
        },
        legend: {
          bottom: 'bottom',
          left: 'center',
          itemWidth: 8,
          itemHeight: 8,
          textStyle: {
            fontSize: 10
          },
          data: [
            {
              name: '生产量',
            },
            {
              name: '延误量'
            },
            {
              name: '预测生产量',
              itemStyle: {
                borderType: 'dashed',
                borderWidth: 1,
                color: 'transparent',
                borderColor: '#165DFF'
              }
            },
            {
              name: '预测延误量',
              itemStyle: {
                borderType: 'dashed',
                borderWidth: 1,
                color: 'transparent',
                borderColor: '#EA5B3A'
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
          top: 30,
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
            name: '单位: 吨',
            min: 0,
            max: 100,
            interval: 20,
            // axisLabel: {
            //     formatter: '{value} ml'
            // }
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
            name: '生产量',
            type: 'bar',
            color: '#165DFF',
            tooltip: {
              valueFormatter: function (value) {
                return value + 'K';
              }
            },
            data: [
              95, 88, 78, 85, 80
            ]
          },
          {
            name: '延误量',
            type: 'bar',
            color: '#EA5B3A',
            tooltip: {
              valueFormatter: function (value) {
                return value + 'K';
              }
            },
            data: [
              18, 16, 10, 30, 18
            ]
          },
          {
            name: '预测生产量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + 'K';
              }
            },
            itemStyle: {
              color: 'transparent',
              borderColor: '#165DFF',
              borderType: 'dashed'
            },
            data: [
              0, 0, 0, 0, 0, 86, 76
            ]
          },
          {
            name: '预测延误量',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + 'K';
              }
            },
            itemStyle: {
              color: 'transparent',
              borderColor: '#EA5B3A',
              borderType: 'dashed'
            },
            data: [
              0, 0, 0, 0, 0, 78, 70
            ]
          },
          {
            name: '达交率',
            type: 'line',
            yAxisIndex: 1,
            color: '#14C9C9',
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              }
            },
            data: [50, 78, 80, 85, 80, 68, 85]
          }
        ]
      },
      options1: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          show: false
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '0%',
          top: '0%'
        },
        series: [
          {
            data: [800, 1000, 850, 1100, 900, 1200, 820, 1400, 900, 1900, 400, 3000],
            type: 'line',
            symbol: 'none',
            color: "#F53F3F",
            smooth: true,
            lineStyle: {
              width: 1,
            },
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#F53F3F"
                },
                {
                  offset: 1,
                  color: '#FFFFFF'
                }
              ])
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
    jump() {
      this.$push(`/pages/delay-order-details/main`);
    },
    jump1() {
      this.$push(`/pages/inventory-details/main`);
    },
    jump2() {
      this.$push(`/pages/performance-details/main`);
    },
    jump3() {
      this.$push(`/pages/use-ratio/main`);
    }
  }
}
</script>
