<style lang="less" scoped>
@import '~@/styles/color.less';
    .container{
        padding-bottom: calc(100px + env(safe-area-inset-bottom));
    }
    .my-tags-wrapper {
        display: flex;
        flex-wrap: wrap;
    }
    .my-tag{
        width: fit-content;
        height: 24px;
        padding: 4px 12px;
        color: #4F5077;
        font-size: 14px;
        line-height: 24px;
        background: #EEE;
        border-radius: 18px;
        margin-right: 10px;
        margin-top: 10px;
        border: 1px solid #fff;
    }
    .my-tag-active{
        color: #00C35A;
        background: #fff;
        border: 1px solid #00C35A;
    }
    .search-result-panel{
        width: 100%;

    }
    .search-container{
        padding-left: 24px;
        padding-right: 24px;
        box-sizing: border-box;
        margin-top: 32px;
        width: 100%;
    }
    .title-panel{
        height: 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title{
        color: #000;
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
    }

    .search-result-panel{
        width: 100%;
        background: #fff;
        margin-top: 16px;
        position: absolute;
        padding-left: 16px;
        padding-right: 16px;
        box-sizing: border-box;
    }
    .item{
        width: 100%;
        height: 52px;
        border-bottom: 1px solid #F3F3F3;
        box-sizing: border-box;
        color: #000;
        display: flex;
        align-items: center;
    }
    .custom-search{
        border-radius: 16px;
        opacity: 0.6;
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
<div class="container">
    <div class="search-panel">
        <van-search
            :value="value"
            placeholder="搜索您想要的宝贝"
            shape="round"
            focus="true"
            use-action-slot
            @change="onChange"
            @search="onSearch"
            @cancel="onCancel"
            @clear="onClear"
            >
            <view slot="action" @tap="onCancel">取消</view>
        </van-search>
    </div>
    <div class="search-result-panel" v-if="showSearchResult">
        <div class="item" v-for="(item, index) in searchResults" :key="index" :index="index" @click="goProductionList(item)">
            {{ item }}
        </div>
    </div>
    
    <div class="category_panel" v-if="isCategory">
        <div class="icon icon--category"></div>
        <div class="category_text">
            {{rootCategory}} > {{ category }}
        </div>
        <span class="flex"></span>
        <div class="icon icon--close-fill" @click="removeCategory"></div>
    </div>

    <div class="search-container" v-if="searchHistory.length>0">
        <div class="title-panel">
            <div class="title">历史搜索</div>
        </div>
       
        <div class="my-tags-wrapper">
            <div class="my-tag text-overflow--1" v-for="(tag,index) in searchHistory" :key="index" @click="chooseHistoryTag(tag, index)">
                {{ tag }}
            </div>
        </div>
    </div>

    <!-- <div class="search-container">
        <div class="title-panel">
            <div class="title">推荐搜索</div>
        </div>
        <div  class="my-tags-wrapper">
            <div class="my-tag" v-for="(tag,index) in recommendTags" :key="index" @click="chooseRecommendTag(tag.value, index)">
                {{ tag.value }}
            </div>
        </div>
    </div> -->
</div>
</template>


<script>
import qs from 'querystring'

const HistoryCount = 10;

export default {
    name: 'Search',
    components:{},
    data () {
        return {
            value: "",
            searchResults:[],
            searchHistory:[],
            recommendTags:[{"value":"123"},{"value":"456"},{"value":"789"}],
            currentHistoryTagIndex:-1,
            currentRecommendTagIndex:-1,
            showSearchResult:false,
            currentHistory:{},
            category: "",
            rootCategory:"",
            rootCategoryId: 0,
            categoryId: 0,
            isCategory:false,
            sortModel:'',
            distanceValue:0,
            IsFromHelp: 0,
            isFromProductList:0,
            currentDistanceIndex:0
        }
    },
    mounted () {
        // 1级分类
        let data = JSON.parse(decodeURIComponent(this.$mp.query.data))

        

        let rootCategory = data.rootCategory;
        this.rootCategory = rootCategory == undefined ? '' : rootCategory

        let rootCategoryId = data.rootCategoryId;
        this.rootCategoryId = rootCategoryId == undefined ? '' : rootCategoryId;

        // 2级分类
        let category = data.category;
        this.category = category == undefined ? '' : category

        let categoryId = data.categoryId;
        this.categoryId = categoryId == undefined ? '' : categoryId;

        // 输入框的值
        let value = data.value;
        this.value = value == undefined ? '' : value

        // 商品列表传参: 排序规则sortModel + 距离选择的index
        this.sortModel = data.sortModel == undefined ? '' : data.sortModel;
        this.distanceValue = data.distanceValue == undefined ? 0 : data.distanceValue;

        // 是否从江湖救急页面跳转
        let IsFromHelp = data.IsFromHelp;
        this.IsFromHelp = IsFromHelp == undefined ? 0 : IsFromHelp;
        // 江湖救急当前选择的距离
        this.currentDistanceIndex = data.currentDistanceIndex == undefined ? 0 : data.currentDistanceIndex;
        // 是否从商品列表或者分类页进入

        // 是否显示分类块
        this.isCategory = this.rootCategory == "" ? false : true;

        this.showSearchResult = false;


        let _sh = wx.getStorageSync('searchHistory');
        this.searchHistory = _sh == '' ? [] : _sh; 
    },
    created(){
        
    },
    onLoad(options){
    },
    methods:{
        closeSearchPanel(){
            this.showSearchResult = false;
            this.value = "";
        },
        async onChange(e){
            this.showSearchResult = true;
            this.value = e.mp.detail;
             if (this.value == "") {
                  this.closeSearchPanel();
             }
             // get search results
             if (this.IsFromHelp){
                let res = await this.R.fetchMissionSuggestion(this.value);
                
                this.searchResults = res.data.data.title;
             } else {
                let res = await this.R.fetchSearchSuggestion(this.value);
                this.searchResults = res.data.data.title;
             }
            
        },
          onCancel(){
            this.closeSearchPanel();
            wx.navigateBack();
        },
        // 查重历史记录
        recheck(value){
            for(let i = 0; i < this.searchHistory.length; ++i) {
                if (this.searchHistory[i] == value)     return true;
            }
            return false;
        },
        addHistory(value){
            if (this.recheck(value))    return;
            if (this.searchHistory.length == HistoryCount) {
                this.searchHistory.shift();
            }
            this.searchHistory.push(value);

            wx.setStorageSync('searchHistory', this.searchHistory);
        },
        onSearch(e){ 
            let params_1 = {value: this.value};
            let params_2 = {
                    value: this.value, 
                    rootCategory: this.rootCategory, 
                    category: this.category,
                    rootCategoryId: this.rootCategoryId,
                    categoryId: this.categoryId,
                    distanceValue: this.distanceValue,
                    sortModel: this.sortModel
            };

            this.addHistory(this.value);
            this.closeSearchPanel();

            if (this.IsFromHelp) {
                let params_str = encodeURIComponent(JSON.stringify({keyword:params_1.value, currentDistanceIndex: this.currentDistanceIndex}))
                this.$push(`/pages/production-help-search/main?data=${params_str}`)
            } else {
                let params_str = encodeURIComponent(JSON.stringify(params_2));
                this.$push(`/pages/production-list-search/main?data=${params_str}`);
            }
        },
        chooseHistoryTag(tag, index){
            this.currentHistoryTagIndex = index;
            this.currentHistory = tag;
            // to detail page
            this.goProductionList(tag);
        },
        chooseRecommendTag(tag, index) {
            this.currentRecommendTagIndex = index;
            // to detail page
            this.goProductionList(tag);
        },
        goProductionList(data) {
            this.addHistory(data);

            if (this.IsFromHelp) {
                let params = {value: data};
                let params_str = encodeURIComponent(JSON.stringify({keyword: data, currentDistanceIndex: this.currentDistanceIndex}))
                this.$push(`/pages/production-help-search/main?data=${params_str}`)
            } else {
                let params = {
                    value: data, 
                    rootCategory: this.rootCategory,
                    category: this.category,
                    rootCategoryId: this.rootCategoryId,
                    categoryId: this.categoryId,
                    distanceValue: this.distanceValue,
                    sortModel: this.sortModel
                };
                let params_str = encodeURIComponent(JSON.stringify(params));
                this.$push(`/pages/production-list-search/main?data=${params_str}`)
            }
        },
        removeCategory(){
            this.isCategory = false;
            this.categoryId = 0;
            this.rootCategoryId = 0;
            this.rootCategory = "";
            this.category = "";
        }
      
    }
        
}

</script>