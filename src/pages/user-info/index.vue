<style lang="less" scoped>
@import '~@/styles/color.less';
@import '~@/styles/vant.less';

.user-info-container {
  height: 100vh;
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

.pop-name-container{
    width: 100%;
    height: 100%;
    //padding: 24px 16px;
    box-sizing: border-box;
    .title-panel{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .title-text{
        color: #000;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
    }
    .name-panel{
      width: 100%;
      padding: 16px 0px;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px solid #F3F3F3;
      align-items: center;
    }
    .name-text{
      color: #ACADBB;
      font-size: 16px;
      line-height: 18px;
      width: 32px;
    }

  .name-input{
      flex: 1;
      height: 32px;
    }
    .name-input input{
      border: none;
      padding-left: 16px;
      font-size: 24px;
      color: #000;
      font-weight: 700;
      height: 32px;
    }
     .name-input input::-webkit-input-placeholder{
       color: #ACADBB;
       font-weight: 400;
    }
  }
   .chat-input {
        border-radius: 8px;
        flex: 1;
        width: 100%;
        height: 100%;
        /deep/ .van-cell {
          padding: 8px 12px;
          background: #fff;
          border-radius: 8px;
        }
    }
      .price-panel{
      width: 100%;
      padding: 16px 0px;
      box-sizing: border-box;
      display: flex;
      border-bottom: 1px solid #F3F3F3;
      align-items: center;
    }
    .price-text{
      color: #ACADBB;
      font-size: 16px;
      line-height: 18px;
      width: 32px;
    }

.price-input{
      flex: 1;

    }
}

</style>
<template>
  <div class="user-info-container">
    <van-cell-group :border="false">
      <van-cell custom-class="my-van-cell--large" size="large" title="头像" :border="false" is-link @click="onChooseImage">
        <div class="custom-value">
          <img :src="image" alt="" class="avatar">
        </div>
      </van-cell>
      <van-cell custom-class="my-van-cell--large" size="large" title="昵称" :value="name" :border="false" is-link @click="showName=true">
      </van-cell>
    </van-cell-group>

  <van-button custom-class="my-van-button" type="primary" @click="saveUserInfo">保 存</van-button>

    <van-action-sheet :show="showName" z-index="100000" close-on-click-overlay>
      <div class="ac-wrapper" style="overflow: hidden;">
        <header>
          修改昵称
          <span class="flex"></span>
          <div class="icon--close" @click="showName=false"></div>
        </header>
        <div class="body">
          <div class="pop-name-container">
            <div class="name-panel" style="margin-top: 16px;" :style="{'bottom':inputHeight}">
              <div class="name-text">昵称</div>
              <div class="name-input">
                 <!-- <van-field class="chat-input" :border='false' @input="onNameChange" :value="name" type="digit" placeholder="请输入昵称" autosize confirm-type="send" /> -->
                <input type="text" placeholder="请输入昵称" :value="name" @input="onNameChange" @blur="onBlur" @focus="onFocus">
              </div>
            </div>
            <van-button custom-class="my-van-button-pop" type="primary" @click="confirmName"> 确定 </van-button>
          </div>
        </div>
    </div>
    </van-action-sheet>
  </div>
</template>
<script>
import chooseImage from '@/modules/chooseImage'

export default {
  name: 'UserInfo',
  components: {},
  data() {
    return {
      showName: false,
      image: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF',
      name: '',
      tmp_name:'',
      showImage: false,
      inputHeight: 0
    }
  },
  mounted() {
    this.showName = false;
    let data = JSON.parse(decodeURIComponent(this.$mp.query.data));
    this.name = data.name;
    this.image = data.avatar;
  },
  methods: {
    onChooseImage(){
      chooseImage().then(res => {
        
        this.image = res[0];
        this.showImage = true;
      })
    },
    onNameChange(e) {
       this.tmp_name = e.mp.detail.value;
    },
    confirmName(){
      this.name = this.tmp_name;
      this.showName = false;
    },
    onBlur(e){
      let height = e.mp.detail.height;
      this.inputHeight = height - 34 + 'px'
    },
    onFocus(e) {
      this.inputHeight = 0;
    },
    uploadFile(){
      let _this = this;
        return new Promise((resolve, reject) => {
        wx.uploadFile({
          header: {
            'content-type': 'multipart/form-data',
            'token': wx.getStorageSync('token')
          },
          filePath: _this.image,
          name: 'file',
          url: 'https://www.xzcricle.com/recyclebackend/image/upload',
          success(res) {
            
            let url = ''
            try {
              url = JSON.parse(res.data).data.image;
              
              resolve(url);
            } catch (err) {
              url = ''
              resolve(url)
            }
          },
          fail(res){
            
          }
      })
        })
    },

    async saveUserInfo(){
      let _this = this;
     if (this.showImage) {
        this.uploadFile().then((url) => {
          _this.R.fetchUserUpdate({
              headImg: url,
              name: _this.name
          }).then(res => {
            
            if (res.data.success) {
              let param = {'isUpdateUserInfo': 1}
              let param_str = encodeURIComponent(JSON.stringify(param));
              _this.$switchTab(`/pages/wode/main?data=${param_str}`);
            } else {
              this.$toast.fail(res.data.message)
            }
          }).fail(res => {
           
          })
        })
     } else {
        _this.R.fetchUserUpdate({
              headImg: _this.image,
              name: _this.name
          }).then(res => {
            
            if (res.data.success) {
              let param = {'isUpdateUserInfo': 1}
              let param_str = encodeURIComponent(JSON.stringify(param));
              _this.$switchTab(`/pages/wode/main?data=${param_str}`);
            } else {
               this.$toast.fail(res.data.message)
            }
         
          }).fail(res => {
           
          })
     }
    },
  }
}

</script>
