<style lang="less" scoped>
@import '~@/styles/color.less';

.upload-container {

  /* 正方形结构 */
  .square-item {
    width: 100%;

    .square-inner {
      padding-bottom: 100%;
    }
  }

  /* 预览图片区域 */
  .preview-item {
    width: 32%;
    float: left;
    position: relative;
    margin-bottom: 2%;
    box-sizing: border-box;

    .icon--del {
      position: absolute;
      top: 4px;
      right: 4px;
      display: block;
      height: 18px;
      width: 18px;
    }

    .img-block {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      display: block;
      border-radius: 4px;
      background-size: cover;
      background-position: center;
    }
  }

  .preview-item:nth-child(3n+1),
  .preview-item:nth-child(3n+2) {
    margin-right: 2%;
  }

  /* 单单设置图片圆角不行, 还要设置这里 */
  .square-item {
    border-radius: 4px;
  }

  /* 上传按钮 */
  .upload-item {
   
   
   
   
   
   
    background: #FAFAFA;
    border: 1px solid #EEEEEE;
    border-radius: 8px;

    .content {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        height: 28px;
        width: 28px;
      }
    }
  }
}

</style>
<template>
  <div class="upload-container clearfix">
    <!-- 预览图片 -->
    <div class="preview-item" v-for="(item, key) in tmpPathList" :key="key" @click="onPreview(item, key)">
      <div class="square-item">
        <div class="square-inner">
          <img class="img-block" :src="item" mode="aspect-fill" />
          <div class="img-block" :style="{'backgroundImage': 'url(' + item + ')'}"></div>
        </div>
      </div>
      <img :src="icon.del" class="icon--del" @click.stop="onDel(key)" />
    </div>
    <!-- 上传按钮 -->
    <div class="preview-item upload-item" @click="onChooseImage" v-if="tmpPathList.length<MAX_UPLOAD_COUNT">
      <div class="square-item">
        <div class="square-inner">
          <div class="content">
            <img :src="icon.upload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* 需要解决的几种情况 
    1. 处于修改状态时, 用户进来的时候带了图片, 删除的时候, 需要将 previewList 同步删除吗?
       不需要, 这玩意我他吗的又不用. 直接删 tmpPathList 即可.
    2. 处于修改状态时, 用户进来的时候带了图片, 用户又重新上传了几张图片, 当用户点击保存的时候
       原来的图片不应该被重新上传;
       新上传的图片才应该被重新上传;
       但是二者混淆在一起了.
       所以我建议: 在真正上传的时候, 要将 tmp 拿出来 (做一次过滤)
       但是这样会有一个问题:
       我们拿出来了, 上传了, 然后是: 只把这些给到后端? 不行;
       要全量给到后端, 也就是 新的加旧的, 要不然后端是不知道, 你给过去的是要覆盖还是添加到原来的上去.
       那么全量给的话, 你就要维护一个原先的列表出来;
       不需要, 在真的上传的时候, 再拷贝一下即可. 
组件上我放了一个 v-model 属性.
因为 upload 经常是作为 表单组件的一项来使用
那么就需要拿到它的值, 来判断是否 让提交按钮可以被点击, 
这个使用, 使用 this.$refs.upload.hasValue() 就会有问题
1. upload 在 computed 的时候还没有初始化呢
2. 即使值变了, hasValue 也不会重新执行的. 
  */
import del from './assets/del.png'
import upload from './assets/upload.png'
import Service from '@/config/service'
let MAX_UPLOAD_COUNT = 12;
let isTmpPath = path => {
  return path.indexOf('//tmp') > -1;
}
let isPlainObj = obj => {
  return JSON.stringify(obj) == '{}'
}
export default {
  name: '',
  components: {},
  props: {
    /* 当用户要修改自己发布的照片的时候, 刚进来就会有一个列表, 代表着用户上次上传的图片 */
    previewList: {
      default () {
        return []
      }
    },
    value: {
      default () {
        return []
      }
    },
    openImage:{
      default () {
        return false
      }
    }
  },
  watch: {
    previewList: {
      handler() {
        this.init();
      }
    }
  },
  data() {
    return {
      MAX_UPLOAD_COUNT,
      icon: {
        del,
        upload
      },
      /* 用户选择图片之后, 图片临时路径保存的位置 */
      tmpPathList: [],
      currentCouldUploadCount: 9,
      upload_images:[]
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    clear() {
      Object.assign(this, this.$options.data());
    },
    clearImages(){
      this.tmpPathList = [];
      this.upload_images = [];
    },
    init() {
      if (this.previewList.length) {
        this.tmpPathList = JSON.parse(JSON.stringify(this.previewList))
        this.upload_images = JSON.parse(JSON.stringify(this.previewList))
        // this.$emit('input', this.tmpPathList)
      }
    },
    onChooseImage() {
      let that = this;
      that.$emit('onOpenImage', true)
      this.currentCouldUploadCount = MAX_UPLOAD_COUNT - this.tmpPathList.length;
      /* 小程序有个问题: count 传递0, 那么就相当于传递了9 */
      if (this.currentCouldUploadCount <= 0) {
        return;
      }
      // this.upload_images = [];
      wx.chooseImage({
        sizeType: ['compressed'],
        count: that.currentCouldUploadCount,
        async success (res) {

          try {

          that.tmpPathList = that.tmpPathList.concat(res.tempFilePaths);
         
          wx.showLoading({
            title: '上传中...',
            mask: true
          })

          let uploadImages = await that.upload(res.tempFilePaths)

          

          that.upload_images = that.upload_images.concat(uploadImages)

          

          wx.hideLoading();



          } catch (err) {


            
          }


        },
        fail(err) {}
      })
    },
    /* 删除预览图片 */
    onDel(index) {
      this.tmpPathList.splice(index, 1);
      this.upload_images.splice(index, 1);

      

      

      // this.$emit('input', this.tmpPathList)
    },
    upload(uploadList) {


      let uploadFile = (path) => {
        return new Promise(async(resolve, reject) => {
          let _res = await this.R.fetchImageSignature()
          console.log(_res)

          let idx = path.indexOf(".")
          let _suffix = path.substring(idx+1, path.length)
          let _name = path.substring(11, path.length - _suffix.length - 1)

          wx.uploadFile({
            header: {
              'content-type': 'multipart/form-data',
              'token': wx.getStorageSync('session_key')
            },
            filePath: path,
            name: 'file',
            url: _res.data.data.host,
            formData: {
              key: _res.data.data.dir + _name + "." + _suffix,
              policy: _res.data.data.policy,
              OSSAccessKeyId: _res.data.data.accessid,
              signature: _res.data.data.signature,
              success_action_status:200
            },
            success(res) {
              console.log(res)
              let url = ''
              try {
                url = _res.data.data.host + "/" + _res.data.data.dir + _name + "." + _suffix
              } catch (err) {
                url = ''
              }
              resolve(url)
            }
          })

          // wx.uploadFile({
          //   header: {
          //     'content-type': 'multipart/form-data',
          //     'token': wx.getStorageSync('session_key')
          //   },
          //   filePath: path,
          //   name: 'file',
          //   url: 'https://www.xzcricle.com/recyclebackend/image/upload',
          //   success(res) {
          //     let url = ''
          //     try {
          //       url = JSON.parse(res.data).data.image;
          //     } catch (err) {
          //       url = ''
          //     }
          //     resolve(url)
          //   }
          // })
        })
      }


      return Promise.all(uploadList.map(path => {
        return uploadFile(path)
      }))








    },
    /* 预览上传的图片 */
    onPreview(item, index) {
      let that = this;
      that.$emit('onOpenImage', true)
      wx.previewImage({
        current: item,
        urls: that.tmpPathList
      })
    },
    getImages(){
      return this.upload_images;
    }
  }
}

</script>
