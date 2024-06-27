<style lang="less" scoped>
@import '~@/styles/color.less';

.user-info-container {
  .custom-value {
    display: flex;
    justify-content: flex-end;
  }

  .avatar {
    display: block;
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }

      .production{
            padding-left: 16px;
            padding-right: 16px;
            box-sizing: border-box;
        .production-inner{
          position: relative;
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
                min-width: 80px;
                width: 80px;
                height: 80px;
                border-radius: 4px;
                border: 1px solid #f3f3f3;
                border-radius: 8px;
                box-sizing: border-box;
            }
            .fail-block {
              position: absolute;
              top: 66rpx;
              left: 0px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #fff;
              background: #8D8D8D;
              padding: 4px 8px;
              box-sizing: border-box;
              height: 24px;
              z-index: 99;
              width: 56px;
              font-size: 12px;
            }
            .custom-icon{
              flex-shrink: 0;
              margin-left: auto;
            }
            .right{
                margin-left: 15px;
                height: 80px;
                flex: 1;
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
                font-size: 24px;
                font-weight: 700;
                color: #000;
                line-height: 17px;
                display: flex;
                align-items: flex-end;
                height: 36px;
            }
            .old-price{
              font-size: 12px;
              font-weight: 500;
              line-height: 14px;
              color: #ACADBB;
              text-decoration: line-through;
              margin-left: 4px;
            }
          }
        }
        .production-gray{
          -webkit-filter: grayscale(100%);
          -moz-filter: grayscale(100%);
          -ms-filter: grayscale(100%);
          -o-filter: grayscale(100%);
          filter: grayscale(100%);
          filter: gray;
          filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
        }
}

</style>
<template>
  <div class="user-info-container">
    <van-cell-group :border="false">
        <div :class="good.status == 1 ? 'production' : 'production production-gray'" v-for="(good,index) in goods" :key="index" @click="toProductDetail(good)">
            <div class="production-inner">
                <div class="left">
                    <div class="image-block">
                      <img class="production-image" :src="good.headImg" alt="">
                    </div>
                     <div class="fail-block" v-if="good.status == 2 || good.status == 3">
                      已失效
                    </div>
                </div>
                <div class="right">
                    <div class="production-title-panel">
                        <div class="production-title text-overflow--2">
                            {{good.name}}
                        </div>
                      </div>
                      <div class="info">
                          <div class="price">¥{{good.price}}</div>
                          <div class="old-price">¥{{good.oriPrice}}</div>
                          <div class="icon icon--delete custom-icon" @click.stop="onDelete(good)" ></div>
                      </div>
                    </div>
                <div>
              </div>
          </div>
        </div>
    </van-cell-group>
    <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!hasMore">
        <van-divider contentPosition="center">已经到底了</van-divider>
    </div>
  </div>
</template>
<script>
export default {
  name: 'UserInfo',
  components: {},
  data() {
    return {
      goods: [],
      hasMore:false,
      page: 1
    }
  },
  async onPullDownRefresh(){
    this.page = 1;
    this.goods = [];
    //this.getGoods(this.page);
    let res = await this.R.fetchProductLikeList(1);
    this.goods = this.goods.concat(res.data.data.dataList);
    this.hasMore = res.data.data.hasMore;
    wx.stopPullDownRefresh();
  },
  onReachBottom(){
    if (this.hasMore) {
      this.page++;
      this.getGoods(this.page);
    }
  },
  async mounted() {
    this.goods = [];
    this.page = 1;
    this.getGoods(1);
  },
  methods: {
    async getGoods(page) {
      let res = await this.R.fetchProductLikeList(page);
      this.goods = this.goods.concat(res.data.data.dataList);
      this.hasMore = res.data.data.hasMore;
    },
    async onDelete(good){
      let that = this;
      await this.$confirm({
        title: '提示',
        content: '是否确认删除该收藏?'
      }).then(res => {
        that.R.fetchProductLike(good.id,0).then(res => {
          this.page = 1;
          this.goods = [];
          this.getGoods(this.page);
        }) 
      }).catch(err => {

      })
    },
    toProductDetail(good){
       let param_str = encodeURIComponent(JSON.stringify(good))
      this.$push(`/pages/product-detail/main?data=${param_str}`);
    }
  }
}

</script>
