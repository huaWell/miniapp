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
      <div class="title">品类达交率</div>
      <div class="content">
        <mp-charts :options="options" :canvasId="'chart1'" />
      </div>
    </div>
    <div class="card" style="height: 300px;">
      <div class="title">未履约原因分析</div>
      <div class="content">
        <mp-charts :options="options1" :canvasId="'chart2'" />
      </div>
    </div>
  </div>
</template>
<script>
import mpCharts from '@/components/MpCharts.vue'

export default {
  name: 'performanceDetails',
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
          },
          formatter: function (params) {

            let tooltipContent = params[0].name + '<br>';
            params.forEach(function (param) {
              if (param.value == 0) return;
              const seriesName = param.seriesName;
              tooltipContent += seriesName + ': ' + param.value + '%' + '<br>';
              tooltipContent += '达交量' + ': ' + param.value * 30 + '吨' + '<br>';
            });
            return tooltipContent;
          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: 5,
          top: 10,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['品类1', '品类2', '品类3', '品类4', '品类5'],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
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
            name: '达交率',
            type: 'bar',
            tooltip: {
              valueFormatter: function (value) {
                return value + '%';
              }
            },
            barWidth: 23,
            emphasis: {
              focus: 'series'
            },
            color: '#165DFF',
            data: [80, 76, 68, 62, 58],
          }
        ]
      },
      options1: {
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
                    length2: 10
                },
                data: [
                    { value: 30, name: '供应延期' },
                    { value: 20, name: '模具不足' },
                    { value: 20, name: '人力不足' },
                    { value: 10, name: '机台瓶颈' },
                    { value: 20, name: '其他' }
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
