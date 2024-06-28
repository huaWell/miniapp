<style lang="less" scoped>
@import '~@/styles/color.less';

.container{
            width: 100%;
            height: 100%;
            background: #F1F2F4;
        }
        .card{
            border-radius: 6px;
            width: 100%;
            height: auto;
            background: #fff;
            margin-bottom: 12px;
            padding-top: 16px;
            padding-bottom: 16px;
            box-sizing: border-box;
        }
        .title{
            height: 24px;
            font-size: 18px;
            display: flex;
            padding-left: 16px;
            box-sizing: border-box;
            align-items: center;
        }
        .mark{
            width: 6px;
            height: 18px;
            background: #3775F6;
            border-radius: 4px;
            font-weight: 500px;
        }
        .title-text{
            margin-left: 6px;
        }
        .body{
            width: 100%;
            height: auto;
        }
        .guis{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
        }
        .gui{
            width: 25%;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .img-box{
            width: 40px;
            height: 40px;

        }
.img-box-img{
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 4px;
}
        .text{
            font-size: 12px;
            margin-top: 4px;
        }
</style>
<template>
  <div class="container" @click="hideTip">
    <div style="width: 100vw;height: 250px;background-color: #fff;">
      <mpvue-echarts lazyLoad :echarts="echarts" :onInit="onInit" ref="echarts" />
    </div>


        <div class="card" v-for="(category,index) in menus" :key="index">
            <div class="title">
                <div class="mark">
                </div>
                <div class="title-text">{{category.name}}</div>
            </div>
            <div class="body">
                <div class="guis">
                  <div class="gui" v-for="(gui, idx) in category.guis" :key="idx">
                    <div class="img-box">
                            <img class="img-box-img" src="https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390"></img>
                        </div>
                        <div class="text">{{gui.name}}</div>
                  </div>
                </div>
              </div>
        </div>
  </div>
</template>
<script>
import qs from 'querystring'
import * as echarts from 'echarts'
import mpvueEcharts from 'mpvue-echarts'

let chart = null;

export default {
  name: 'Wode',
  components: {
    mpvueEcharts
  },
  data() {
    return {
      echarts,
      menus:[],
      chartOption: {
        title: {
          text: '柱状图示例'
        },
        tooltip: {},
        xAxis: {
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [120, 200, 150, 80, 70, 110, 130]
          }
        ]
      },
    }
  },
  mounted() {
  },
  async onShow () {
    console.log('000')
    this.initChart()
    this.menus = [{
      name: '需求管理',
      guis: [{
        name:'需求计划方案',
        url:'/static/gui.jpeg'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      }]
    },
    {
      name: '需求管理',
      guis: [{
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      }]
    },
    {
      name: '需求管理',
      guis: [{
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      }]
    }]
  },
  methods: {
    onInit(canvas, width, height){
      console.log('111')
      chart = echarts.init(canvas, null, {
        width: width,
        height: height
      })
      canvas.setChart(chart)
      chart.setOption(this.chartOption)
      return chart
    },
    initChart(){
      console.log('222')
      this.$refs.echarts.init()
    }
  }
}

</script>
