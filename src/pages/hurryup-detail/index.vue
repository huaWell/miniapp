<style lang="less" scoped>
@import '~@/styles/color.less';

.hurryup-detail-container {
  .swiper {
    height: 100vw;

    .swiper-item {
      .slide-image {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }

  /* body 为了做出来圆角效果 */
  .body {
    position: relative;
    z-index: 1;
    margin-top: -40px;
    background: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background: white;
    padding: 0 15px;
    padding-top: 20px;

    // .custom-image-dots {
    //   display: flex;
    //   overflow: scroll;
    //   &::-webkit-scrollbar {
    //     display: none;
    //   }
    //   ;
    //   .dot {
    //     display: block;
    //     flex-shrink: 0;
    //     height: 60px;
    //     width: 60px;
    //     border-radius: 8px;
    //     margin-right: 10px;
    //     transition: all .3s;
    //     padding: 2px;
    //     border: 2px solid transparent;
    //   }
    //   .active {
    //     border-radius: 10px;
    //     // padding: 2px;
    //     border: 2px solid #00C35A;
    //   }
    // }
    .product-intro-wrapper {

      // margin-top: 15px;
      .top-block {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left {
          .price {
            .sale-price {
              font-weight: bold;
              font-size: 22px;
              line-height: 22px;
            }

            // .label {
            //   margin-left: 15px;
            //   font-size: 13px;
            // }
          }

          .origin-price {
            font-size: 13px;
            // color: #ACADBB;
            // text-decoration: line-through;
          }
        }

        .right {
          .condition-text {
            color: #FF3939;
            font-size: 14px;
            background: #eee;
            border-radius: 18px;
            padding: 6px 10px;
            line-height: 14px;
            background: rgba(255, 162, 162, 0.16);
            border-radius: 4px;
          }
        }
      }

      .title {
        margin-top: 6px;
        font-size: 18px;
        line-height: 25px;
      }

      .desc {
        margin-top: 10px;
        color: #4F5077;
        font-size: 14px;
      }
    }

    .buy-date-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #4F5077;
      border: 1px solid #ACADBB;
      padding: 10px 15px;
      // margin-top: px;
      margin: 15px 0;
      border-radius: 8px;
    }

    .ask-others-wrapper {
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .text {
          font-weight: bold;
          font-size: 18px;
        }

        .more {
          color: #00C35A;
        }
      }

      .questions {
        margin-top: 5px;
        font-size: 14px;

        .q-block {
          display: flex;
          margin: 4px 0;

          .flex {
            flex: 1;
          }

          .answer {
            color: #ACADBB;
          }
        }
      }
    }

    .self-card {
      margin-top: 20px;
      background: rgba(238, 238, 238, .3);
      // opacity: 0.3;
      border-radius: 8px;
      padding: 16px;

      .user {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #eee;

        img {
          display: block;
          height: 32px;
          width: 32px;
          border-radius: 50%;
        }

        .name {
          margin-left: 10px;
        }

        padding-bottom: 16px;
      }

      .info {
        padding: 0 20px;
        padding-top: 16px;
        display: flex;
        justify-content: space-between;

        .block {
          .text {
            color: #ACADBB;
          }

          .value {
            font-size: 18px;
            font-weight: bold;
            margin-top: 4px;
          }
        }
      }
    }

    .map-wrapper {
      margin-top: 20px;
      background: rgba(238, 238, 238, .3);
      border-radius: 8px;
      padding: 16px;

      header {
        padding-bottom: 10px;
        font-size: 16px;
        font-weight: bold;
      }

      .my-map {
        width: 100%;
        border-radius: 16px;
      }
    }
  }

  /* 输入框 */
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: white;
    z-index: 1000;
    padding-bottom: calc(env(safe-area-inset-bottom));

    .footer--inner {
      background: white;
      padding: 15px;
      display: flex;
      box-sizing: border-box;
      align-items: center;
      // max-height: 70px;
      // min-height: 70px;
      overflow: hidden;

      // // display: flex;
      // .chat-input {
      //   background: #F2F2F2;
      //   border-radius: 8px;
      //   padding: 10px 8px;
      //   flex: 1;
      // }
      // .icon--image {
      //   margin-left: 10px;
      // }
      .btn {
        background: #00C35A;
        border-radius: 8px;
        color: white;
        flex: 1;
        font-size: 15px;
        line-height: 15px;
        text-align: center;
        padding: 15px 0;
      }

      .self-wrapper {
        display: flex;
        align-items: center;
      }
    }

    // .open {
    //   max-height: 200px;
    //   min-height: 200px;
    // }
  }
}

</style>
<template>
  <div class="hurryup-detail-container">
    <swiper class="swiper" :indicator-dots="false" :current="currentSlide">
      <div v-for="(item, index) in images" :index="index" :key="key">
        <swiper-item class="swiper-item">
          <img :src="item.url" class="slide-image" mode="aspectFill" />
        </swiper-item>
      </div>
    </swiper>
    <div class="body">
      <!--       <div class="custom-image-dots">
        <img :src="item.url" alt="" class="dot" :class="{'active': key==currentSlide}" v-for="(item, key) in images" :key="key" @click="onSwitchSlide(key)">
      </div> -->
      <div class="product-intro-wrapper">
        <div class="top-block">
          <div class="left">
            <div class="price">
              <span>¥</span>
              <span class="sale-price">2328</span>
              <!-- <span class="label">到手价</span> -->
            </div>
            <div class="origin-price">
              心理价位
            </div>
          </div>
          <div class="right">
            <!-- 加急请求 -->
            <div class="condition-text">轻微使用痕迹</div>
          </div>
        </div>
        <div class="title">
          95新 iPhone X 256G 银色 移动4G 联通4G 电信4G 其他版本
        </div>
        <div class="desc">
          这里是宝贝描述信息这里是宝贝描述信息这里是宝贝描述信息这里是宝贝描述信息这里是宝贝描述信息这里是宝贝描述信息这里是宝贝描述信息这里是宝贝描述信息这里是宝贝描述信息
        </div>
      </div>
      <div class="buy-date-wrapper">
        <span class="label">求购成色</span>
        <span class="date">九成新</span>
      </div>
      <div class="ask-others-wrapper">
        <header>
          <span class="text">问大家</span>
          <span class="more">查看全部</span>
        </header>
        <div class="questions">
          <div class="q-block" v-for="i in 3">
            <div class="icon"></div>
            <div class="question">品质可以吗？有没有故障的地方？</div>
            <span class="flex"></span>
            <div class="answer">2个回答</div>
          </div>
        </div>
      </div>
      <div class="self-card">
        <div class="user">
          <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgx.xiawu.com%2Fxzimg%2Fi3%2F429312012%2FO1CN01UkzlY61QjXRKlSb5w_%21%21429312012.jpg&refer=http%3A%2F%2Fimgx.xiawu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654409658&t=51ea952c960db314cef8de73a27cff6a" alt="">
          <p class="name">小朋友</p>
        </div>
        <div class="info">
          <div class="block">
            <div class="text">挂单</div>
            <div class="value">222</div>
          </div>
          <div class="block">
            <div class="text">卖出</div>
            <div class="value">222</div>
          </div>
          <div class="block">
            <div class="text">求购</div>
            <div class="value">222</div>
          </div>
        </div>
      </div>
      <div class="map-wrapper">
        <header>
          <span class="address"> 我是一个地址, 我是一个地址</span>
        </header>
        <map class="my-map" :enable-zoom="false" />
      </div>
      <!-- 输入框 -->
      <div class="footer">
        <div class="footer--inner">
          <button class="button--reset" open-type="share">分享</button>
          

          <div class="btn">
            我想要
          </div>
          <div class="self-wrapper">
            <div class="btn">
              关闭求购
            </div>
            <div class="btn">
              编辑信息
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import share from '@/modules/share'
export default {
  name: 'HurryupDetail',
  components: {},
  onShareAppMessage () {
    return share()
  },
  data() {
    return {
      currentSlide: 0,
      images: [{ url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgx.xiawu.com%2Fxzimg%2Fi3%2F429312012%2FO1CN01UkzlY61QjXRKlSb5w_%21%21429312012.jpg&refer=http%3A%2F%2Fimgx.xiawu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654409658&t=51ea952c960db314cef8de73a27cff6a" },
        { url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgx.xiawu.com%2Fxzimg%2Fi3%2F429312012%2FO1CN01UkzlY61QjXRKlSb5w_%21%21429312012.jpg&refer=http%3A%2F%2Fimgx.xiawu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654409658&t=51ea952c960db314cef8de73a27cff6a" },
        { url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimgx.xiawu.com%2Fxzimg%2Fi3%2F429312012%2FO1CN01UkzlY61QjXRKlSb5w_%21%21429312012.jpg&refer=http%3A%2F%2Fimgx.xiawu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654409658&t=51ea952c960db314cef8de73a27cff6a" }
      ]
    }
  },
  mounted() {},
  methods: {
    onSwitchSlide(index) {
      this.currentSlide = index;
    }
  }
}

</script>
