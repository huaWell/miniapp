<style lang="less" scoped>
  @import '~@/styles/color.less';
 .container{

  }
    .search-panel{
        margin-top: 8px;
    }
    .content-panel{
        padding: 8px 16px;
        box-sizing: border-box;
    }
    .content{
          width: 100%;
    }
    .item{
        width: 100%;
        background: #F3F3F3;
        border-radius: 16px;
        margin-top: 16px;
        padding: 16px 16px;
        box-sizing: border-box;
        height: 112px;
        display: flex;
        .inner{
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
        }
        .inner_1{
            width: 100%;
            height: 100%;
        }
        .left {
            display: flex;
            flex-direction: column;
            flex: 1;
            width: calc(100% - 96px);
          
        }
          .title{
            font-size: 14px;
            font-weight: 700;
            line-height: 16px;
            color: #000;
            height: 32px;
            }
            .remark{
            margin-top: 8px;
            font-size: 12px;
            line-height: 16px;
            color: #3D3D3D;
            height: 32px;
            }

        .right {
            margin-left: 16px;
            width: 80px;
            .img{
            width: 80px;
            height: 80px;
            border-radius: 8px;
            }
        }
            }
    .item-inner-box{
        padding: 24px;
        box-sizing: border-box;
    }
    .item-title{
        display: flex;
    }
    .text{
        font-size: 16px;
        line-height: 18px;
        color: #000;
        font-weight: 700;
    }
        .item-body{
            display: flex;
            margin-top: 16px;
        }
        .item-left{
            width: 80px;
            height: 80px;
        }
        .item-left-image{
            width:80px;
            height: 80px;
        }
        .item-right{
            margin-left: 16px;
            height: 80px;
            position: relative;
            flex: 1;
        }
        .label{
            position: absolute;
            font-size: 14px;
            font-weight: 500;
            color: #4F5077;
            line-height: 16px;
            height: 16px;
            top: 0;
            width: 100px;
        }
        .price{
            position: absolute;
            font-size: 16px;
            line-height: 20px;
            font-weight: 500;
            color:#000;
            height: 29px;
            margin-top: 20px;
            display: flex;
            align-items: center;
        }
        .tag{
            position: absolute;
            bottom: 0;
            padding: 4px;
            box-sizing: border-box;
            margin-top: 14px;
            background: rgba(255,162,162,0.16);
            border-radius: 4px;
            width: 64px;
            height: 22px;
            font-size: 14px;
            color: #FF3939;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .distance-wrapper{
  display: flex;
  align-items: center;
}
.free-distance{
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  background: #fff;
  border-radius: 4px;
}
.free-distance-active{
  background: #F3F3F3;
}
 
</style>

<template>
<div class="container">
    <div class="search-panel" @click="goSearch">
        <van-search
            :value="value"
            placeholder="搜索您想要的宝贝"
            shape="round"
            readonly="true"
            >
        </van-search>
    </div>
    <div class="content-panel">
        <div class="distance-wrapper">
            <div :class="[currentDistanceIndex==index ? 'free-distance free-distance-active' : 'free-distance']" v-for="(distance, index) in distances" :key="index" @click="onDistance(index)">
            {{distance}}km
            </div>
        </div>
        <div class="content">
            <div class="item" v-for="(good, index) in goods" :key="index" @click="toProductHelpDetail(good)">
                    <div class="inner" v-if="good.headImg">
                    <div class="left">
                        <div class="title text-overflow--2">{{good.title}}</div>
                        <div class="remark text-overflow--2">{{good.remark}}</div>
                    </div>
                    <div class="right">
                        <img class="img" :src="good.headImg" alt="">
                    </div>
                </div>
                <div class="inner_1" v-if="!good.headImg">
                    <div class="title text-overflow--2">{{good.title}}</div>
                    <div class="remark text-overflow--2">{{good.remark}}</div>
                </div>
                
                <!-- <div class="item-inner-box" >
                    <div class="item-title">
                        <span class="text">
                            🔥{{good.title}}
                        </span>
                        <span class="flex"></span>
                       <div class="icon--arrow-right"></div>
                    </div>
                    <div class="item-body">
                        <div class="item-left">
                            <img class="item-left-image" :src="good.headImg" alt="">
                        </div>
                        <div class="item-right">
                            <div class="label">心理价位:</div>
                            <div v-if="good.lowPrice==good.highPrice" class="price">¥{{good.lowPrice}}</div>
                            <div v-if="good.lowPrice != good.highPrice" class="price">¥{{good.lowPrice}}-{{good.highPrice}}</div>
                            <div class="tag">加急请求</div>
                        </div>
                    </div>
                </div> -->
            </div>
            <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="goods.length>0&&!searchAfter">
                <van-divider contentPosition="center">已经到底了</van-divider>
            </div>
            <div v-if="goods.length == 0">
              <van-empty 
                description="暂无求购商品"
                image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
              >
            </van-empty>
          </div>
              
        </div>
    </div>
</div>
</template>

<script>
    import {getLocation,setLocation} from '@/modules/getLocation'

    export default {
        name: 'ProductionHelpSearch',
        components:{},
        data(){
            return {
                value: "",
                distances:[],
                goods:[],
                searchAfter:[],
                currentDistanceIndex:0,
                isFromHome:true
            }
        },
        async onShow(){
            let data = JSON.parse(decodeURIComponent(this.$mp.query.data));
            
            this.value = data.keyword;
            this.currentDistanceIndex = data.currentDistanceIndex;
            let res = await this.R.fetchBaseConfig()
            this.distances = res.data.data.searchRange;
            this.goods = [];
            this.searchAfter = [];
            this.getGoods(this.distances[this.currentDistanceIndex], this.searchAfter); 
        },
        mounted(){
        },
        async onPullDownRefresh(){
            this.searchAfter = [];
            this.goods = [];
            let {latitude, longitude} = await getLocation();
            let param = {
                distance: this.distances[this.currentDistanceIndex],
                keyword: this.value,
                lat: latitude,
                lng: longitude,
                searchAfter:[],
                size:20
            }
            let res = await this.R.fetchMissionSearch(param);
            wx.stopPullDownRefresh();
            this.goods = res.data.data.dataList;
            this.searchAfter = res.data.data.searchAfter;
         
        },
        onReachBottom(){
            if (this.searchAfter) {
                this.getGoods(this.distances[this.currentDistanceIndex], this.searchAfter);
            }
        },
      
        methods: {
            async getGoods(distance, searchAfter) {
                let {latitude, longitude} = await getLocation();
                let param = {
                    distance: distance,
                    keyword: this.value,
                    lat: latitude,
                    lng: longitude,
                    searchAfter:searchAfter,
                    size:20
                }
                
                let res = await this.R.fetchMissionSearch(param);
                this.goods = this.goods.concat(res.data.data.dataList);
                this.searchAfter = res.data.data.searchAfter;
            },
           goSearch(){
                let params = {IsFromHelp: 1, value: this.value, currentDistanceIndex: this.currentDistanceIndex};
                let params_str = encodeURIComponent(JSON.stringify(params))

                this.$push(`/pages/search/main?data=${params_str}`)
           },
           toProductHelpDetail(good){
               this.$push('/pages/production-help-detail/main?id=' + good.id);
           },
           onDistance(index){
               this.currentDistanceIndex = index;
               
               
               this.goods = [];
               this.searchAfter = [];
               this.getGoods(this.distances[this.currentDistanceIndex], this.searchAfter)
           }
        }
        
    }
</script>