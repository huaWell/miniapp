<template>
  <div style="width: 100%;height: 100%;background-color: #fff;">
    <ec-canvas :id="canvasId" :canvas-id="canvasId" ref="canvas" :ec="ec" @init="onChartInit" :echarts="echarts" />
  </div>
</template>

<script>
import * as echarts from '../../static/lib/echarts.min.js';
import mpvueEcharts from 'mpvue-echarts';
const systemInfo = wx.getSystemInfoSync();
const devicePixelRatio = systemInfo.pixelRatio;
let chart = null;
export default {
  components: {
    'ec-canvas': mpvueEcharts
  },
  props: {
    options: {
      type: Object,
      required: true
    },
    canvasId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      echarts,
      ec: {
        lazyLoad: true // 懒加载，init 方法会在组件 mounted 后执行
      }
    };
  },
  methods: {
    onChartInit({ canvas, canvasWidth, canvasHeight }) {
      chart = echarts.init(canvas, null, {
        width: canvasWidth,
        height: canvasHeight,
        devicePixelRatio: devicePixelRatio
      })
      canvas.setChart(chart);
      this.updateChart();
      return chart
    },
    updateChart() {
      if (chart) {
        chart.setOption(this.options);
      }
    }
  },
  watch: {
    option: {
      handler() {
        this.updateChart();
      },
      deep: true // 深度监听对象变化
    }
  }
};
</script>

<style scoped>
/* 可选的样式 */
</style>
