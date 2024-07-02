<style lang="less" scoped>
@import '~@/styles/color.less';

.container{
            width: 100%;
            height: 100%;
            background: #f1f5fa;
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
            margin-top: 12px;
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
            width: 50%;
            height: 60%;

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
        <div class="card" v-for="(category,index) in menus" :key="index">
            <div class="title">
                <div class="mark">
                </div>
                <div class="title-text">{{category.name}}</div>
            </div>
            <div class="body">
                <div class="guis">
                  <div class="gui" v-for="(gui, idx) in category.guis" :key="idx" @click="toPage(gui)">
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

export default {
  name: 'workcenter',
  components: {
  },
  data() {
    return {
      menus:[]
    }
  },
  mounted() {
  },
  async onShow () {
    this.menus = [
    {
      name: '快捷入口',
      guis: [{
        name:'报价计算器',
        url:'/static/gui.jpeg'
      },
      {
        name:'BI报表',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'订单',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390',
        path:'/pages/production-list/main'
      },
      {
        name:'质检分析',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390',
        path:'/pages/quality-analysis/main'
      }
    ]
    },
    {
      name: '需求管理',
      guis: [{
        name:'需求计划方案',
        url:'/static/gui.jpeg'
      },
      {
        name:'需求跟踪',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'订单跟踪',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'需求计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      }]
    },
    {
      name: '库存管理',
      guis: [{
        name:'库存计划',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      }]
    },
    {
      name: '采购管理',
      guis: [{
        name:'物料需求',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'供应序列',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      ]
    },
    {
      name: '高级计划和排产',
      guis: [{
        name:'生产计划方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      {
        name:'排产方案',
        url:'https://img2.baidu.com/it/u=1421951440,2958002268&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=390'
      },
      ]
    }]
  },
  methods: {
    toPage(gui) {
      console.log(gui)
      this.$push(gui.path);
    }
  }
}

</script>
