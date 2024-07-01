<style lang="less" scoped>
@import '~@/styles/color.less';
         .container {
            // height: 100em;
            background: #F1F2F4;
         }

        .body{
            width: 100%;
            padding: 0 16px;
            box-sizing: border-box;
            //overflow: scroll;
        }
        /*隐藏滚动条*/
        ::-webkit-scrollbar{
        width: 0;
        height: 0;
        color: transparent;
        }
        .goods-wrapper {
            margin-top: 16px;
        }
        .goods {
            width: 100%;
            padding: 8px 16px;
            box-sizing: border-box;
            border-radius: 8px;
            background-color: #fff;
            margin-bottom: 12px;

            .title{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom: 1px solid #ddd;
                height: 30px;
                box-sizing: border-box;

                .title-left{
                    display: flex;
                    align-items: center;

                    .custom-name{
                        margin-left: 6px;
                        color: #666666;
                        font-size: 18px;
                    }
                }
            }
            .content{
                .name{
                    color: #333;
                    font-size: 18px;
                }
                .info{
                    color: #999;
                    font-size: 14px;
                    .info-label{

                    }
                    .info-text{
                        margin-right: 8px;
                    }
                }
                .date{
                    display: flex;
                    flex-direction: row;
                    margin-top: 8px;
                    justify-content: space-between;
                    .date-left{
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        flex: 1;
                    }
                    .date-right{
                        z-index: 1 !important;
                        width: 12vw;
                    }

                    .date-block{
                        padding: 6px 8px;
                        background: #F1F3F7;
                        box-sizing: border-box;
                        height: 52px;
                        border-radius: 4px;
                    }
                    .date1{

                    }
                    .date2{
                        margin-left: 8px;
                    }
                    .date-label{
                        display: flex;
                        align-items: center;

                        .text{
                            color: #666;
                            font-size: 14px;
                            margin-left: 6px;
                        }
                    }
                    .date-text{
                        font-size: 12px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 30px;
                        font-size: 16px
                    }
                }
            }
        }
</style>

<template> 
    <div class="container" @touchmove.prevent @mousewheel.prevent>
        <div class="my-tab-item-4">
                <van-dropdown-menu
                    active-color="#ACADBB"
                 
                >
                    <van-dropdown-item 
                    custom-class="my-dropdown-menu"
                        :value="value1" 
                        :options="option1"
                         @change="chooseDistance" />
                    <van-dropdown-item 
                        :value="value2" 
                        :options="option2"
                         @change="chooseDistance" />
                </van-dropdown-menu>
        </div>


        <div class="body">
            <div class="goods-wrapper clearfix">
                <div class="goods" v-for="(order,index) in orders" :key="index">
                 
                        <div class="title">
                            <div class="title-left">
                                <div class="icon icon--company"></div>
                                <div class="custom-name">{{order.custom_name}}</div>
                            </div>
                            <div class="title-right">
                                
                            </div>
                        </div>
                        <div class="content">
                            <div class="name">
                                {{order.name}}
                            </div>
                            <div class="info">
                                <span class="info-label">数量：</span>
                                <span class="info-text">{{order.amount}}</span>
                                <span class="info-label">总金额：</span>
                                <span class="info-text">{{order.price}}</span>
                            </div>
                            <div class="date">
                                <div class="date-left">
                                    <div class="date-block date1">
                                    <div class="date-label">
                                        <div class="icon icon--date"></div>
                                        <div class="text">约定交期</div>
                                    </div>
                                    <div class="date-text">{{order.origin_date}}</div>
                                    </div>
                                    <div class="date-block date2">
                                        <div  class="date-label">
                                            <div class="icon icon--date"></div>
                                            <div class="text">计算交期</div>
                                        </div>
                                        <div  class="date-text">{{order.release_date}}</div>
                                    </div>
                                </div>
                                <div class="date-right">
                                    <!-- <mp-charts :options="options" :canvasId="`chart${index}`" /> -->
                                    <van-circle
                                        size="50"
                                        value="25"
                                        layer-color="#D7E3FD"
                                        color="#3775F6"
                                        stroke-width="6"
                                        text="60%"
                                        style="position: absolute;"
                                        />
                                </div>
                            </div>
                   
                    </div>
                </div>
            </div>
        </div>

        <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;">
            <van-divider contentPosition="center">已经到底了</van-divider>
        </div>
       
    </div>
</template>

<script>
    import qs from 'querystring'
    import mpCharts from '@/components/MpCharts.vue'

    export default {
        name: 'ProductionList',
        components: {
            mpCharts
        },
        data(){
            return {
                options: {
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
            //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //     {
            //       offset: 0,
            //       color: "#F53F3F"
            //     },
            //     {
            //       offset: 1,
            //       color: '#FFFFFF'
            //     }
            //   ])
            }
          }
        ]
      },
                option1: [
                    { text: '全部订单', value: 0 },
                    { text: '需求订单', value: 1 },
                    { text: '生产订单', value: 2 },
                    { text: '延误订单', value: 3 },
                    ],
                option2: [
                { text: '默认排序', value: 0 },
                { text: '数量排序', value: 1 },
                { text: '金额排序', value: 2 },
                ],
                value1: 0,
                value2: 0,
                orders:[
                    {
                        name: '产品1',
                        amount:1000,
                        price:1000,
                        release_date: "2024-06-28",
                        origin_date: "2024-06-28",
                        custom_name:'客户名'
                    },
                    {
                        name: '产品2',
                        amount:1000,
                        price:1000,
                        release_date: "2024-06-28",
                        origin_date: "2024-06-28",
                        custom_name:'客户名'
                    },
                    {
                        name: '产品3',
                        amount:1000,
                        price:1000,
                        release_date: "2024-06-28",
                        origin_date: "2024-06-28",
                        custom_name:'客户名'
                    }
                ],
                circleZIndex: 1
            }
        },
        onLoad(options) {
        },
        async mounted() {
            //let data = JSON.parse(decodeURIComponent(this.$mp.query.data))

          
        },
        async onPullDownRefresh(){


          
            wx.stopPullDownRefresh();
        },
        onReachBottom(){
         
        },
        methods:{
            // 跳转到商品详情页
            // goProductionDetail(good){
            //     let param_str = encodeURIComponent(JSON.stringify(good));
            //     this.$push(`/pages/product-detail/main?data=${param_str}`);
            // }
        }
    }
</script>