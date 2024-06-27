<style lang="less" scoped>
@import '~@/styles/color.less';
         .container {
            // height: 100em;
        }
        .my-tab {
            display: flex;
            width: 100%;
            padding: 16px 24px;
            box-sizing: border-box;
            color: #ACADBB;
        }
        .my-tab-item{
            width: 25%;
            height:16px;
            font-size: 14px;
        }

        .my-tab-item-1{
            width: 25%;
            height:16px;
            font-size: 14px;
            text-align: left;
        }
         .my-tab-item-2{
            width: 25%;
            height:16px;
            font-size: 14px;
            text-align: center;
        }
         .my-tab-item-3{
            width: 25%;
            height:16px;
            font-size: 14px;
            text-align: right;
        }
         .my-tab-item-4{
            width: 25%;
            height:16px;
            font-size: 14px;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }

        .my-tab-item-active{
            font-size: 14px;
            color: #000;
            font-weight: 700;
        }

        .body{
            width: 100%;
            padding: 0 8px;
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
            border-radius: 8px;
            border: 1px solid #f3f3f3;
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
        .price{

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
        .position{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 6px 0;
        }
        .position-info{
            display: flex;
            align-items: center;
        }
        .position-info-img{
            display: block;
            width:20px;
            height:20px;
            min-width:20px;
        }
        .position-info-img-img{
            display: block;
            width:20px;
            height:20px;
            min-width:20px;
            border-radius:50%;
        }
        .position-info-text{
            font-size: 12px;
            line-height: 14px;
            color: #000;
            margin-left: 6px;
        }
        .distance {
            color: #ACADBB;
            font-size: 12px;
        }
        .search-panel{
            // padding-left: 16px;
            // padding-right: 16px;
            box-sizing: border-box;
            margin-top: 8px;
        }
        .category_panel{
            width: 100%;
            display: flex;
            align-items: center;
            padding: 8px 16px;
            box-sizing: border-box;
            margin-top: 16px;
        }
        .category_text{
            font-size: 18px;
            color: #000;
            font-weight: 700;
            margin-left: 6px;
        }
</style>

<template> 
    <div class="container" @touchmove.prevent @mousewheel.prevent>
        <div class="search-panel" @click="onFocus">
            <van-search
                :value="value"
                placeholder="搜索您想要的宝贝"
                shape="round"   
                readonly="true"       
                @focus="onFocus"
            >
        </van-search>
            <!-- <search placeholder="搜索您想要的宝贝" :value="value" :rootCategory="rootCategory" :searchProduction="category"></search> -->
        </div>

        <div class="category_panel" v-if="rootCategory!=''">
            <div class="icon icon--arrow-right-green"></div>
            <div class="category_text">
                {{rootCategory}} > {{ category }}
            </div>
            <span class="flex"></span>
            <div class="icon icon--close-fill" @click="removeCategory"></div>
        </div>

        <div class="my-tab">
            <div :class="index==currentIndex ? 'my-tab-item my-tab-item-active':'my-tab-item'" v-for="(sortModel, index) in sortModelArr" :key="index" @click="onChangeSort(index)">
                {{sortModel.value}}
            </div>
            <!-- <div :class="[newPublish?'my-tab-item-1 my-tab-item-active':'my-tab-item-1']" @click="onClickPublish">最新发布</div>
            <div :class="[priceUp?'my-tab-item-2 my-tab-item-active':'my-tab-item-2']" @click="onClickPriceUp">价格低到高</div>
            <div :class="[priceDown?'my-tab-item-3 my-tab-item-active':'my-tab-item-3']" @click="onClickPriceDown">价格高到低</div> -->
            <div class="my-tab-item-4">
                <van-dropdown-menu
                    active-color="#ACADBB"
                >
                    <van-dropdown-item 
                        :value="distanceValue" 
                        :options="distanceOptions"
                         @change="chooseDistance">
                    </van-dropdown-item>
                </van-dropdown-menu>
            </div>
        </div>
        <div class="body">
            <div class="goods-wrapper clearfix">
                <div class="goods" v-for="(good,index) in goods" :key="index" @click="goProductionDetail(good)">
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
                        <div class="position">
                            <div class="position-info">
                                <div class="position-info-img">
                                    <img class="position-info-img-img" :src="good.publisherImage" alt="#">
                                </div>
                                <div class="position-info-text text-overflow--1">
                                    {{good.publisherName}}
                                </div>
                            </div>
                            <div class="distance">{{good.distance}}</div>
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
    import Search from '@/components/Search'
    import qs from 'querystring'
    import {getLocation} from '@/modules/getLocation'

    export default {
        name: 'ProductionList',
        components: {
            Search,
        },
        data(){
            return {
                rootCategory:"",
                category:"",
                searchProduction:"",
                newPublish:true,
                priceUp:false,
                priceDown:false,
                distanceValue: 0,
                distanceOptions:[],
                value:"",
                searchRange:[],
                goods:[],
                rootCategoryId: -1,
                categoryId: -1,
                searchAfter:[],
                sortModel: 'closest',
                sortModelArr:[],
                currentIndex: 0
            }
        },
        onLoad(options) {
        },
        async mounted() {
            let data = JSON.parse(decodeURIComponent(this.$mp.query.data))

            let value = data.value;
            let rootCategory =  data.rootCategory;
            let category = data.category;
            let rootCategoryId = data.rootCategoryId;
            let categoryId = data.categoryId;

            this.rootCategory = rootCategory == undefined ? '' : rootCategory;
            this.value = value == undefined ? '' : value;
            this.category = category == undefined ? '' : category;
            this.rootCategoryId = rootCategoryId == undefined ? 0 : rootCategoryId;
            this.categoryId = categoryId == undefined ? 0 : categoryId;

            if (this.distanceOptions.length < 1) {
                let res = await this.R.fetchBaseConfig();
                this.searchRange = res.data.data.searchRange;
                for(let i = 0; i < this.searchRange.length; ++i) {
                    this.distanceOptions.push({
                        text: this.searchRange[i] + "km",
                        value: this.searchRange[i]
                    })
                }
            }
            this.distanceValue = this.searchRange[this.searchRange.length-1];

            let res = await this.R.fetchSortModel();
            this.sortModelArr = res.data.data.sortModel;
            this.sortModel = this.sortModelArr[0].type;

            this.goods = [];
            this.getGoods(this.distanceValue);
        },
        async onPullDownRefresh(){
            this.searchAfter = [];
            this.goods = [];

            let {latitude, longitude} = await getLocation();
            let res = await this.R.fetchProductList({
                distance: this.distanceValue,
                lat: latitude,
                lng: longitude,
                sortModel: this.sortModel,
                size: 100,
                searchAfter: [],
                isFree: false,
                keyword: this.value,
                categoryId: this.rootCategoryId,
                secondCategoryId: this.categoryId
            });
            this.goods = this.goods.concat(res.data.data.dataList);
            this.searchAfter = res.data.data.searchAfter == null ? [] : res.data.data.searchAfter;
            wx.stopPullDownRefresh();
            //this.getGoods(this.distanceValue, this.searchAfter);
        },
        onReachBottom(){
            if (this.searchAfter.length > 0) {
                this.getGoods(this.distanceValue, this.searchAfter);
            }
        },
        methods:{
            async getGoods(distance, searchAfter=[]) {
                let {latitude, longitude} = await getLocation();
                let res = await this.R.fetchProductList({
                    distance: distance,
                    lat: latitude,
                    lng: longitude,
                    sortModel: this.sortModel,
                    size: 100,
                    searchAfter: searchAfter,
                    isFree: false,
                    keyword: this.value,
                    categoryId: this.rootCategoryId,
                    secondCategoryId: this.categoryId
                });
                
                this.goods = this.goods.concat(res.data.data.dataList);
                this.searchAfter = res.data.data.searchAfter == null ? [] : res.data.data.searchAfter;
            },
            chooseDistance(e){
                
                this.distanceValue = e.mp.detail;
                this.goods = [];
                this.getGoods(this.distanceValue);
            },
            onChangeSort(index){
                this.currentIndex = index;
                this.sortModel = this.sortModelArr[index].type;
                this.goods = [];
                this.searchAfter = [];
                this.getGoods(this.distanceValue);
            },
            removeCategory(){
                this.rootCategory = "";
                this.category = "";
            },
            onFocus(event){
                let params = {
                    category: this.category, 
                    rootCategory: this.rootCategory, 
                    value: this.value,
                    rootCategoryId: this.rootCategoryId,
                    categoryId: this.categoryId,
                    sortModel: this.sortModel,
                    distanceValue: this.distanceValue
                };
                let params_str = encodeURIComponent(JSON.stringify(params))

                this.$push(`/pages/search/main?data=${params_str}`);
            },
            // 跳转到商品详情页
            goProductionDetail(good){
                let param_str = encodeURIComponent(JSON.stringify(good));
                this.$push(`/pages/product-detail/main?data=${param_str}`);
            }
        }
    }
</script>