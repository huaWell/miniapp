<!--
 * @Author: MASON-SEA yangyangmason@outlook.com
 * @Date: 2024-06-28 10:56:26
 * @LastEditors: MASON-SEA yangyangmason@outlook.com
 * @LastEditTime: 2024-06-28 11:38:14
 * @FilePath: \miniapp\src\components\MpCharts.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<style lang="less" scoped></style>
<template>
  <div style="width: 100vw;height: 250px;background-color: red;">
    123
    <mpvue-echarts lazyLoad :echarts="echarts" :onInit="onInit" ref="echarts" />
  </div>
</template>
<script>
import * as echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'
export default {
  name: 'mpCharts',
  components: {
    mpvueEcharts
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  watch: {
    options: {
      deep: true,
      handler() {
        this.updateChart()
      }
    }
  },
  data() {
    return {
      chart: null,
      echarts
    }
  },
  mounted() {
    console.log('000')
    console.log(this.options)

    this.initChart()
  },
  // mounted() {
  //   console.log('xxxxx')
  // },

  methods: {
    onInit(canvas, width, height) {
      console.log('111')
      this.chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(this.chart)
      this.chart.setOption(this.options)
      return this.chart
    },
    initChart() {
      console.log('222')
      // this.$refs.echarts.init()
    },
    updateChart() {
      if (this.chart) {
        this.chart.setOption(this.options);
      }
    }
  }
}
</script>
