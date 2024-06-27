<style lang="less" scoped>
@import '~@/styles/color.less';
.myCenter-container{
    .header-wrapper {

        display: flex;
        align-items: center;
        padding: 0 16px;
        padding-top: 20px;

        .left {
            .name {
                font-size: 32px;
                font-weight: bold;
            }

            .desc {
                font-size: 14px;
                color: #4F5077;
                margin-top: 8px;
            }
        }

        .avatar-block {
            height: 80px;
            width: 80px;
            position: relative;
            .avatar {
                display: block;
                height: 100%;
                width: 100%;
                border-radius: 50%;
            }

            .icon--chat {
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }

    }

     .goods {
            float: left;
            width: 50%;
            padding: 8px 16px;
            box-sizing: border-box;
            border-radius: 8px;
        }
        .box {
            width: 100%;
        }
        .inner-box {
            width:100%;
            height:0;
            box-sizing: border-box;
            padding-bottom: 100%;
            position: relative;
        }
        .layout-box{
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px soild red;
        }
        .goods-image{
            display: block;
            width: 100%;
            height: 100%;
            border: 1px solid #f3f3f3;
            border-radius: 8px;
            box-sizing: border-box;
        }
        .desc {
            padding: 12px 0;
        }
        .title{
            height: 36px;
            color: #000;
            font-size: 15px;
            line-height: 18px;
            font-weight: 400;
        }
        .actual-price{
            color: #000;
            font-size: 24px;
            font-weight: 700;
            line-height: 30px;
        }
        .old-price{
            font-weight: 500;
            color: #ACADBB;
            font-size: 12px;
            line-height: 14px;
            margin-left: 5px;
            text-decoration: line-through;
        }

        .production{
            padding-left: 16px;
            padding-right: 16px;
            box-sizing: border-box;
        .production-inner{
            display: flex;
            width: 100%;
            background: #fff;
            padding-bottom: 16px;
            padding-top: 16px;
            box-sizing: border-box;
            border-bottom: 1px solid rgba(79,80,119,0.05);
            .left{
                width: 80px;
                height: 80px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .image-block{
                width: 80px;
                height:80px;
            }
            .production-image{
                width: 80px;
                height: 80px;
                border-radius: 8px;
                border: 1px solid #f3f3f3;
                box-sizing: border-box;
            }
            .right{
                margin-left: 15px;
                height: 80px;
            }
            .production-title-panel{
                display: flex;
                justify-content: space-between;
            }
            .production-title{
                color: #000;
                font-size: 16px;
                line-height: 22px;
                height: 44px;
                font-family: 'PingFang SC';
            }
            .info{
                display: flex;
                align-items: flex-end;
                font-family: 'Montserrat';
                height: 36px;
            }
            .production-status{
                background: rgba(255,162,162,0.16);
                padding: 4px;
                box-sizing: border-box;
                font-size: 12px;
                border-radius: 4px;
                color: #FF3939;
                font-weight: 500;
            }
            .price{
                font-size: 14px;
                font-weight: 700;
                color: #000;
                line-height: 17px;
                display: flex;
                align-items: flex-end;
                height: 36px;
            }
            .production-type{
                margin-left: 6px;
                padding:4px 8px;
                box-sizing: border-box;
                background: #eee;
                border-radius: 18px;
                height: 36px;
                color: #4F5077;
                font-size: 12px;
            }
            .production-price-desc{
                color: #ACADBB;
                font-size: 12px;
                line-height: 15px;
                margin-left: 12px;
                font-weight: 500;
            }
        }
        }
  
}
</style>

<template>
<div class="myCenter-container">
    <div class="header-wrapper">
      <div class="left">
        <div class="name">{{data.name}}</div>
        <div class="desc">加入圈子已经 {{data.days}} 天</div>
      </div>
      <span class="flex"></span>
      <div class="avatar-block" @click="onEditInfo">
        <img :src="data.headImg" alt="" class="avatar">
        <div class="icon icon--chat" @click="toChat"></div>
      </div>
    </div>
    <div class="myCenter-body">
         <van-tabs :active="activeTab" @change="onChange" :border="false">
            <van-tab v-for="(tab, key) in tabs" :key="key" :title="tab.name">
                <div v-show="activeTab == 0" style="height: auto;">
                    <div class="goods" v-for="(good, index) in sellGoods" :key="index" @click="toProductDetail(good,0)">
                        <div class="box">
                            <div class="inner-box">
                                <div class="layout-box">
                                    <img class="goods-image" :src="good.headImg" alt="#">
                                </div>
                            </div>
                        </div>
                        <div class="desc">
                            <div class="title text-overflow--2">{{good.name}}</div>
                            <div class="price">
                                <span class="actual-price">¥{{good.price}}</span>
                                <span class="old-price">¥{{good.oriPrice}}</span>
                            </div>
                        </div>
                      
                    </div>
                    <div style="clear: both;"></div>
                    <div v-if="sellGoods && sellGoods.length == 0">
                        <van-empty
                            description="暂无挂单商品"
                            image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
                        >
                        </van-empty>
                    </div>
                    <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="sellGoods.length > 0 && !sellHasMore">
                        <van-divider contentPosition="center">已经到底了</van-divider>
                    </div>
                </div>
                
                <div v-show="activeTab == 1">
                    <div class="production"   v-for="(good,index) in selledGoods" :key="index"  @click="toProductDetail(good,1)">
                        <div class="production-inner">
                            <div class="left">
                                <div class="image-block">
                                <img class="production-image" :src="good.headImg" alt="">
                                </div>
                            </div>
                            <div class="right">
                                <div class="production-title-panel">
                                    <div class="production-title text-overflow--2">
                                        {{good.name}}
                                    </div>
                                    </div>
                                    <div class="info">
                                        <div class="production-status">已卖出</div>
                                    </div>
                                </div>
                            <div>
                        </div>
                    </div>
                    </div>
                    <div v-if="selledGoods && selledGoods.length == 0">
                      <van-empty
                        description="暂无卖出商品"
                        image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
                        >
                        </van-empty>
                    </div>
                    <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;"  v-if="selledGoods.length > 0 && !selledHasMore">
                        <van-divider contentPosition="center">已经到底了</van-divider>
                    </div>
                </div>

                <div v-show="activeTab == 2">
                    <div class="production"  v-for="(good,index) in wantedGoods" :key="index"  @click="toProductDetail(good,2)">
                      <div class="production-inner">
                        <div class="left">
                            <div class="image-block">
                            <img class="production-image" :src="good.headImg" alt="">
                            </div>
                        </div>
                        <div class="right">
                            <div class="production-title-panel">
                                <div class="production-title text-overflow--2">
                                    {{good.title}}
                                </div>
                                </div>
                                <div class="info">
                                    <div class="price">¥{{good.lowPrice}}</div>
                                    <div class="production-price-desc">心理价位</div>
                                </div>
                            </div>
                        <div>
                        </div>
                    </div>
                    </div>
                    <div v-if="wantendGoods && wantendGoods.length == 0">
                        <van-empty
                            description="暂无想要商品"
                            image="https://recycle-xz.oss-cn-shanghai.aliyuncs.com/WechatIMG906.png"
                        >
                        </van-empty>
                    </div>
                    <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="wantedGoods.length > 0 && !wantedHasMore">
                        <van-divider contentPosition="center">已经到底了</van-divider>
                    </div>
                     
                </div>
            </van-tab>
        </van-tabs>
    </div>
</div>
</template>

<script>
import qs from 'querystring'
    export default{
        name: 'MyCenter',
        components:{},
        data(){
            return {
                tabs:[
                    {name: '挂单'},
                    {name: '卖出'},
                    {name: '求购'}
                ],
                activeTab:0,
                data:{},
                sellGoods:[],
                selledGoods:[],
                wantedGoods:[],
                sellHasMore:false,
                selledHasMore:false,
                wantedHasMore:false,
                sellPage:1,
                selledPage:1,
                wantedPage:1,
                id: 0,
                isSelf:0
            }
        },
        async mounted(){
            
        },
        async onShow(){
           let data = JSON.parse(decodeURIComponent(this.$mp.query.data)); 
            
        
            this.clear();
            this.id = data.id;
            let res = await this.R.fetchShopBrief(this.id);
            
            this.data = res.data.data;
            this.tabs[0].name = `挂单(${this.data.selling})`;
            this.tabs[1].name = `卖出(${this.data.selled})`;
            this.tabs[2].name = `求购(${this.data.wanted})`;
            this.getShopProduct(this.getStatus(), 1); 
        },
        async onPullDownRefresh(){
            
            let status = -1, page = 1;
            if (this.activeTab == 0) {
                status = 1;
            } else if (this.activeTab == 1) {
                status = 3;    
            } else if (this.activeTab == 2) {
                status = -1;
            }
            this.clear();

            let res = await this.R.fetchShopProduct({
                userId: this.data.id,
                status: status,
                page: page,
                size: 20
            })

            if (this.activeTab == 0) {
                this.sellGoods = this.sellGoods.concat(res.data.data.results);
                
                this.sellHasMore =  res.data.data.hasMore;
                
            } else if (this.activeTab == 1) {
                this.selledGoods = this.selledGoods.concat(res.data.data.results);
                this.selledHasMore = res.data.data.hasMore;
                
            } else if (this.activeTab == 2) {
                this.wantedGoods = this.wantedGoods.concat(res.data.data.results);
                this.wantedHasMore = res.data.data.hasMore;
                
            }
             wx.stopPullDownRefresh();

            //this.getShopProduct(status, 1);
        },
        onShareAppMessage: function(res) {
            let param = encodeURIComponent(JSON.stringify({id: this.id}))
            return {
                title: this.data.name + "的商铺",
                path: `/pages/my-center/main?data=${param}`,
                success: function(res) {

                },
                fail: function(res) {

                }
            }
        },
        onReachBottom(){
            if (this.activeTab == 0 && this.sellHasMore) {
                this.sellPage++;
                this.getShopProductReachBottom(1, this.sellPage)
            } else if (this.activeTab == 1 && this.selledHasMore) {
                this.selledPage++;
                this.getShopProductReachBottom(3, this.selledPage);
            } else if (this.activeTab == 2 && this.wantedHasMore) {
                this.wantedPage++;
                this.getShopProductReachBottom(-1, this.wantedPage)
            }
        },
        methods: {
            clear(){
                this.sellGoods = [];
                this.selledGoods = [];
                this.wantedGoods = [];
                this.sellHasMore = false;
                this.selledHasMore = false;
                this.wantedHasMore = false;
                this.sellPage = 1;
                this.selledPage = 1;
                this.wantedPage = 1;
                //this.activeTab = 0;
            },
            toChat(){
                this.$push(`/pages/chat/main?${qs.stringify({
                    contactId: this.id
                })}`)
            },
            getStatus(){
                let status = -1;
                if (this.activeTab == 0) {
                    status = 1;
                } else if (this.activeTab == 1) {
                    status = 3;
                } else if (this.activeTab == 2) {
                    status = -1;
                }
                return status;
            },
            async getShopProductReachBottom(status, page){
                let res = await this.R.fetchShopProduct({
                    userId: this.data.id,
                    status: status,
                    page: page,
                    size: 20
                })
                if (this.activeTab == 0) {
                    this.sellGoods = this.sellGoods.concat(res.data.data.results);
                    this.sellHasMore =  res.data.data.hasMore;
                } else if (this.activeTab == 1) {
                    this.selledGoods = this.selledGoods.concat(res.data.data.results);
                    this.selledHasMore = res.data.data.hasMore;
                } else if (this.activeTab == 2) {
                    this.wantedGoods = this.wantedGoods.concat(res.data.data.results);
                    this.wantedHasMore = res.data.data.hasMore;
                }
            },
            async getShopProduct(status, page){
                let res = await this.R.fetchShopProduct({
                    userId: this.data.id,
                    status: status,
                    page: page,
                    size: 20
                })
                if (this.activeTab == 0) {
                    // this.sellGoods = this.sellGoods.concat(res.data.data.results);
                    this.sellGoods = res.data.data.results;
                    this.sellHasMore =  res.data.data.hasMore;
                } else if (this.activeTab == 1) {
                    // this.selledGoods = this.selledGoods.concat(res.data.data.results);
                    this.selledGoods = res.data.data.results;
                    this.selledHasMore = res.data.data.hasMore;
                } else if (this.activeTab == 2) {
                    // this.wantedGoods = this.wantedGoods.concat(res.data.data.results);
                    this.wantedGoods = res.data.data.results;
                    this.wantedHasMore = res.data.data.hasMore;
                }
            },
            onChange(e){
                this.activeTab = e.mp.detail.index;
                if (this.activeTab == 0) {
                    this.sellGoods = [];
                    this.sellPage = 1;
                    this.getShopProduct(1, this.sellPage);
                } else if (this.activeTab == 1) {
                    this.selledGoods = [];
                    this.selledPage = 1;
                    this.getShopProduct(3, this.selledPage)
                } else if (this.activeTab == 2) {
                    this.wantedGoods = [];
                    this.wantedPage = 1;
                    this.getShopProduct(-1, this.wantedPage)
                }
            },
            toProductDetail(good, activeTab) {
                
                let param_str = encodeURIComponent(JSON.stringify(good));
                if (activeTab == 2)
                    this.$push('/pages/production-help-detail/main?id='+good.id);
                else
                    this.$push(`/pages/product-detail/main?data=${param_str}`);
            },
            onEditInfo () {
                if (!this.isSelf)    return;
                let param = {name: this.data.name, avatar: this.data.headImg};
                let param_str = encodeURIComponent(JSON.stringify(param));
                this.$push(`/pages/user-info/main?data=${param_str}`)
            },
        }
    }

</script>