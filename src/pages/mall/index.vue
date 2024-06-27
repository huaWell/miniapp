<style lang="less" scoped>
@import '~@/styles/color.less';
.container{
  background-color:#FFF;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.search_container{
  width: 100%;
  height: 32px;
  background-color: #fff;
}
.body_container{
  // position:fixed;
  position: relative;
  width:100vw;
  flex: 1;
  background-color:#FFF;
  margin-top: 16px;
}
.nav_left{
  width:25%;
  height:100%;
  background:#FFF;
  text-align:center;
  position:absolute;
  top:0;
  left:0;
  overflow: scroll;
}
.nav_left .nav_left_items{
  height:64px;
  line-height:16px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav_left .nav_left_items.active{
  position:relative;
  background:#FAFAFA;
  color:#000000;
  font-size:16px;
}
.nav_left .nav_left_items.active::before{
  display: inline-block;
  width:6rpx;
  height:60rpx;
  background:#FE5723;
  content:'';
  position:absolute;
  top:20rpx;
  left:0;
}
.nav_right{
  position:absolute;
  top:0;
  right:0;
  width:75%;
  height:100%;
  background: #FAFAFA;
  padding: 24PX 24px;
  box-sizing: border-box;
  background-color: #fafafa;
}
 .nav_righ_items_panel{
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
 }
.nav_right .nav_right_items{
  float: left;   
  width: 33.33%; 
  text-align: center;  
  padding:8px 0;
} 
.nav_right .nav_right_items image{
  width: 120rpx;  
  height: 120rpx; 
} 
.nav_right .nav_right_items text{
  display: block;  
  margin-top: 10px;  
  overflow: hidden;  
  white-space: nowrap;  
  text-overflow: ellipsis;  
  color:#000;
   padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  height: 35px;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.3px;
  font-weight: 700;
}
.product-text{
  color:#000;
  height: 35px;
  font-size: 12px;
  font-weight: 700;
  padding-right: 8px;
}
.inner-product-text{
  //  overflow: hidden;  
  // white-space: nowrap;  
  // text-overflow: ellipsis;  
  background-color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items: center;
  padding-left: 4px;
  padding-right: 4px;
  box-sizing: border-box;
    
  border-radius: 8px;
}
.nocate{
  padding:100rpx;
  text-align: center;  
} 
 
.nocate image{
  width:70rpx;
  height:70rpx;
}
.nocate text{
  display:block;
  color:#BBB;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  height: 35px;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.3px;
  font-weight: 700;
}
/*隐藏滚动条*/
::-webkit-scrollbar{
  width: 0;
  height: 0;
  color: transparent;
}
.search_panel{
  // padding: 16px 24px;
  // padding-top: 0;
  // box-sizing: border-box;
  margin-top: 8px;
}
</style>
<template>
  <div class="container">
      <div class="search-panel" @click="onFocus">
            <van-search
                :value="value"
                placeholder="搜索您想要的宝贝"
                shape="round"   
                readonly="true"       
                @focus="onFocus"
            >
        </van-search>
      </div>
    <div class="body_container">
   
    <div class='nav_left' scroll-y='true'>
        <div v-for="(item,index) in cateItems" :key="index">
        <div class="nav_left_items" :class="curNav==item.id ? 'active':''" @click="switchRightTab" :data-index='index' :data-id="item.id">{{item.name}}</div>
      </div>

      </div>
      <div class="nav_right" scroll-y="true">
        <div v-if="cateItems[curIndex] && cateItems[curIndex].children">
          <div class="nav_righ_items_panel" v-if="cateItems[curIndex].children.length>0">
            <div v-for="(item,childIndex) in cateItems[curIndex].children" :key="childIndex">
              <div class="nav_right_items clearfix">
               
       
                  <div class="product-text">
                    <div @click="toProductionList(cateItems[curIndex],cateItems[curIndex].children[childIndex])" class="inner-product-text text-overflow--1">{{cateItems[curIndex].children[childIndex].name}}</div>
                  </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
  </div>



</template>
<script>
import Search from '@/components/Search'
import qs from 'querystring'
import { getLocation } from '@/modules/getLocation'

  export default {
    name: '',
    components: {
      Search
    },
    data () {
      return {
        cateItems:[],
        curNav:1,
        curIndex:0,
      }
    },
    onLoadWebview(e){
      
    },
    async onPullDownRefresh(){
      let res = await this.R.fetchProductCategory();
      this.cateItems = res.data.data;
      wx.stopPullDownRefresh();
    },
    async mounted () {
      let res = await this.R.fetchProductCategory();
      this.cateItems = res.data.data;
      this.curNav = this.cateItems[0].id;
      
      
    },
    async onShow(){
      
    },
    methods: {
      switchRightTab(e) {
		    let id = e.target.dataset.id, index=e.target.dataset.index;
        this.curNav = id;
        this.curIndex = index;
		  },
      onFocus() {
        this.$push('/pages/search/main')
      },
      toProductionList(rootCategory, category) {
         let params = {rootCategory: rootCategory.name, category: category.name, rootCategoryId: rootCategory.id, categoryId: category.id};
         
         let params_str = encodeURIComponent(JSON.stringify(params))
        this.$push(`/pages/production-list/main?data=${params_str}`);

        //   wx.navigateTo({
        //   url: `/pages/production-list/main?data=${params_str}`
        // })
      }
    }
  }
</script>