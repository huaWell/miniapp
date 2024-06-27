<style lang="less" scoped>
  @import '~@/styles/color.less';
  .container{
  padding: 0 16px ;
  padding-bottom: 85px;
}
.square-container {
  // width: 100%;
  .inner-box {
    width: 100%;
    height: 0;
    /* 确定高度, 100% 表示完全等于宽度, 但是也可以是一个比例的呀*/
    padding-bottom: 100%;
    position: relative;
    .layout-box {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .ideal-box {
        height: 100%;
        width: 100%;
      }
    }
  }
}
 .fresh-list {
        .fresh-item {
          display: flex;
          margin-top: 20px;
          .avatar {
            display: block;
            height: 40px;
            width: 40px;
            min-width: 40px;
            border-radius: 50%;
          }
          .right {
            flex: 1;
            margin-left: 8px;
            .header {
              .header-title{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .nickname {
                  font-size: 16px;
                  font-weight: bold;
                }
              }
            
              .date {
                color: #ACADBB;
                font-size: 12px;
                margin-top: 4px;
              }
            }
            .body {
              font-size: 12px;
              color: #4F5077;
              margin-top: 8px;
            }
            .img-block {
              display: flex;
              flex-wrap: wrap;
              margin-top: 12px;
              .img-box {
                width: 32%;
                margin-bottom: 10px;
                &:nth-child(3n+1),
                &:nth-child(3n+2) {
                  margin-right: 2%;
                }
                .image{
                  width: 100%;
                  height: 100%;
                  display: block;
                  border-radius: 4px;
                }
                .fresh-img {
                  display: block;
                  height: 100%;
                  width: 100%;
                  border-radius: 6px;
                }
              }
            }
          }
          .footer{
              height: 18px;
              margin-top: 6px;
              color: #8E8F9A;
              font-size: 12px;
              display: flex;
              align-items: center;
              .image-block{
                margin-right: 4px;
                .image{

                }
              }
              .text{
                
              }
          }
        }
      }
.good{
  display: flex;
  flex-direction: row;
  background: rgba(239,239,239,0.6);
  border-radius: 12px;
  margin-top: 22px;
  padding: 12px;
  color: #000;
  align-items: center;

  .left{
    .image{
      width: 48px;
      height: 48px;
      border-radius: 8px;
    }
  }
  .desc{
    margin-left: 16px;
    flex: 1;
    .title{
      font-size: 14px;
      line-height: 16px;
    }
    .price{
      font-size: 14px;
      line-height: 16px;
      margin-top: 4px;
    }
  }
  .right{
    width: 24px;
    height: 24px;
    margin-left: auto;
  }

}

.divider{
  height: 1px;
  background-color: #f1f1f1;
  margin-top: 23px;
}

.review{
  margin-top: 16px;
  .header{
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #000;
    font-weight: 500;
    .title{

    }
    .count{
      margin-left: 4px;
    }
  }
  .review-list{
    margin-top: 25px;
    .review-item{
      margin-bottom: 32px;
      .item{
        display: flex;
        .left{
          flex-shrink: 0;
          .avatar{
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }
        }
        .right{
          margin-left: 8px;
          flex: 1;
          .name{
            font-size: 14px;
            line-height: 16px;
            font-weight: 700;
            color: #000;
          }
          .time{
            margin-top: 4px;
            font-size: 12px;
            line-height: 14px;
            color: #ACADBB;
          }
          .content{
            margin-top: 4px;
            color: #4F5077;
            font-size: 12px;
            line-height: 18px;
          }
        }
      }
    }
  }
}
.footer-panel{
  z-index: 2;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  height: 65px;
  width: 100%;
}
  .footer{
    height: 48px;
    bottom: 37px;
    display: flex;
    align-items: center;
    width: calc(100% - 52px);
    .left{
      flex: 1;
      background: #F2F2F2;
      border-radius: 8px;
      height: 48px;
      .input{
        height: 48px;
        width: 100%;
        padding-left: 11px;
        box-sizing: border-box;
        border: 0;
        outline: none;
        background-color: rgba(0,0,0,0);
      }
    }
    .right{
      width: 34px;
      height: 34px;
      margin: auto;
      margin-left: 20px;
      .custom-icon{
        width: 34px!important;
        height: 34px!important;
        
      }
    }
  }
  .more{
    color: #00C35A;
    font-size: 12px;
    line-height: 18px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<template>
<div class="container">
     <div class="fresh-list">
              <div class="fresh-item" v-for="(fresh, index) in freshes" :key="index">
                <img :src=fresh.publisherImage alt="" class="avatar">
                <div class="right" @click="toFreshDetail(fresh)">
                  <div class="header">
                    <div class="header-title">
                       <div class="nickname text-overflow--1">{{fresh.publisherName}}</div>
                       <div class="icon icon--arrow-right custom-image"></div>
                    </div>
                  
                    <div class="date">{{fresh.createTime}}</div>
                  </div>
                  <div class="body">
                    {{fresh.content}}
                  </div>
                  <div class="img-block">
                    <div class="img-box" v-for="(img, idx) in fresh.imgList" :key="idx">
                     <div class="square-container" >
                      <div class="inner-box" >
                        <div class="layout-box">
                          <div class="ideal-box">
                              <img class="image" :src=img>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div class="footer">
                    <div class="image-block">
                      <div class="icon--comment"></div>
                    </div>
                    <span class="text">评论 ({{fresh.discussCount}})</span>
                  </div>
                </div>
              </div>
            </div>
      <div style="padding-left:62px;padding-right:62px;box-sizing: border-box;" v-if="!hasMore">
      <van-divider contentPosition="center">已经到底了</van-divider>
  </div>

</div>
</template>

<script>
import qs from 'querystring'
import { getLocation } from '@/modules/getLocation'
import formatDate from '@/utils/formatDate'
export default{
    name: 'MyFresh',
    components: {},
    data(){
        return {
            freshes: [],
            page: 1,
            size: 30,
            hasMore: false,
        }
    },
    computed: {
        formatD(d){
          return formatDate(d)
        }
    },
    async mounted(){
      this.getFreshes()
    },
    async onPullDownRefresh(){
      this.page = 1;
      this.hasMore = false;
      await this.getFreshes()
      wx.stopPullDownRefresh();
    },
    onReachBottom(){
      if (this.hasMore) {
        this.page++;
        this.getFreshes();
      }
    },
    methods:{
      async getFreshes(){
        let data = {
          pageNum: this.page,
          pageSize: this.size
        }
        let res = await this.R.fetchMyFresh(data)
        for(let i = 0; i < res.data.data.dataList.length; ++i) {
          res.data.data.dataList[i].createTime = formatDate(res.data.data.dataList[i].createTime)
        }

        if (this.page == 1)
          this.freshes = res.data.data.dataList;
        else  this.freshes = this.freshes.concat(res.data.data.dataList);
        this.hasMore = res.data.data.hasMore;
        
      },
      // 跳转新鲜事详情
      async toFreshDetail(fresh){
        let {latitude, longitude} = await getLocation();
        let session_key = wx.getStorageSync("session_key");
        this.$push(`/pages/h5-webview/main?${qs.stringify({
          id: fresh.id,
          sessionKey: session_key,
          latitude: latitude,
          longitude: longitude,
          queryGroup: true
        })}`)
      }
    }
}


</script>