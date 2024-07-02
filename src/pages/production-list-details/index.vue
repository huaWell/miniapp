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
    <div class="card" style="height: 250px;" v-for="(machineGroup, index) in machineGroups" :key="index">
      <div class="title">{{ machineGroup.name }}</div>
      <div class="content">
        <mp-charts :options="machineGroup.options" :canvasId="`canvasId${index + 1}`" />
      </div>
    </div>
  </div>
</template>
<script>
import mpCharts from '@/components/MpCharts.vue'
import * as echarts from "../../../static/lib/echarts.min.js";


const getDatesStartingFrom = (a, n) => {
  // 获取当前日期
  const startDate = new Date();

  // 设置 startDate 为 a 天后的日期
  startDate.setDate(startDate.getDate() + a);

  // 定义结果数组
  const result = [];

  // 循环生成 n 天的日期
  for (let i = 0; i < n; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i); // 获取当前日期后i天的日期

    // 格式化为 mm-dd 形式
    const formattedDate = `${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    // 将格式化后的日期添加到结果数组中
    result.push(formattedDate);
  }

  return result;
}

function generateNumbersInRange(a, b, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const randomInt = Math.floor(Math.random() * (b - a + 1)) + a;
    result.push(randomInt);
  }

  return result;
}


export default {
  name: 'delayOrderDetails',
  components: {
    mpCharts
  },
  data() {
    return {
      machineGroups: [
        {
          name: "机器组1",
          options: {
            xAxis: {
              type: 'category',
              data: getDatesStartingFrom(5, 12)
            },
            yAxis: {
              type: 'value'
            },

            grid: {
              left: 40,
              right: '0%',
              bottom: 20,
              top: 15
            },
            series: [
              {
                data: generateNumbersInRange(400, 1200, 12),
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
        },
        {
          name: "机器组2",
          options: {
            xAxis: {
              type: 'category',
              data: getDatesStartingFrom(5, 12)
            },
            yAxis: {
              type: 'value'
            },

            grid: {
              left: 40,
              right: '0%',
              bottom: 20,
              top: 15
            },
            series: [
              {
                data: generateNumbersInRange(400, 1200, 12),
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
        },
        {
          name: "机器组3",
          options: {
            xAxis: {
              type: 'category',
              data: getDatesStartingFrom(5, 12)
            },
            yAxis: {
              type: 'value'
            },

            grid: {
              left: 40,
              right: '0%',
              bottom: 20,
              top: 15
            },
            series: [
              {
                data: generateNumbersInRange(400, 1200, 12),
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
      ]
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
