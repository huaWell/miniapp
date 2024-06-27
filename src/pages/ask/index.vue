<style lang="less" scoped>
  @import '~@/styles/color.less';
.ask-container {
  min-height: calc(100vh - 73px);
  /* 使得底部留出 输入栏 */
  padding-bottom: calc(env(safe-area-inset-bottom) + 73px); 
  background: #f2f2f2;
  /* 输入框 */
  .footer {

    position: fixed;
    margin-top: 200px;
    bottom: 0;
    left: 0;

    // left: 0;
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
      max-height: 70px;
      min-height: 70px;
      overflow: hidden;
      .chat-input {
        background: #F2F2F2;
        border-radius: 8px;
        // padding: 10px 8px;
        padding: 0 8px;
        height: 42px;
        line-height: 42px;
        flex: 1;
        background: #f2f2f2;
      }
    }
  }

  .body{
    padding: 16px;
    box-sizing: border-box;
    background: #eee;
  }
  .item{
    padding: 17px 16px;
    background: #fff;
    border-radius: 8px;
    margin-top: 12px;
  }
  .item-1{
    margin-top: 110px;
  }
  .title-panel{
    display: flex;
    align-items: flex-start;
  }
  .custom-icon{
    flex-shrink: 0;
  }
  .title{
    margin-left: 8px;
    color: #000;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    word-break: break-all;
  }
  .answer{
    color: #4F5077;
    font-size: 14px;
    word-break: break-all;
    margin-left: 8px;
  }
  .no-answer{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 16px;
  }
  .no-answer-title {
      padding: 8px 16px;
      box-sizing: border-box;
      background: #F2F2F2;
      height: 36px;
      border-radius: 20px;
      opacity: 0.3;
      color: #4F5077;
  }
  .answer-title {
      padding: 8px 16px;
      box-sizing: border-box;
      background: #00C35A;
      height: 36px;
      border-radius: 20px;
      color: #FFF;
  }

  .popup{
    position: fixed;
    top: 0;
    width: 100vw;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
  }
  .popup-inner{
    display: flex;
    width: 100%;
    border-radius: 16px;
    background: #fff;
    padding: 16px;
    box-sizing: border-box;
  }
  .left{
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image-block{
    width: 56px;
    height:56px;
  }
  .production-image{
    width: 56px;
    height: 56px;
    border-radius: 4px;
  }
  .right{
    margin-left: 15px;
    height: 60px;
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
    font-family: 'PingFang SC';
  }
  .info{
    display: flex;
    align-items: flex-end;
    font-family: 'Montserrat';
    height: 38px;
  }
  .price{
    font-size: 14px;
    font-weight: 700;
    color: #000;
    line-height: 17px;
    display: flex;
    align-items: center;
    height: 25px;
  }
  .production-type{
    margin-left: 6px;
    padding:4px 8px;
    box-sizing: border-box;
    background: #eee;
    border-radius: 18px;
    height: 25px;
    color: #4F5077;
    font-size: 12px;
  }
}
</style>
<template>
  <div class="ask-container">
    <div class="body">
      <div :class="[index==0?showPopup ? 'item item-1' : 'item':'item']" v-for="(ques, index) in questions" :key="index">
        <div class="title-panel">
          <div class="icon icon--question custom-icon"></div>
          <div class="title">{{ ques.content }}</div>
        </div>
        <div v-if="ques.children && ques.count>0">
            <div class="title-panel"  v-for="(answer,idx) in ques.children" :key="idx" style="margin-top: 15px;">
                 <div class="icon icon--answer custom-icon"></div>
                   <div class="answer">
                    {{ answer.content }}
                 </div>
            </div>
        </div>
       
        <div class="no-answer" v-else="ques.count == 0">
          <div :class="[good.isSelf ? 'answer-title' : 'no-answer-title']" @click="answerQuestion(ques)">
            等待回答中...
          </div>
        </div>
      </div>
    </div>

    <!-- 悬浮窗 -->
    <div class="popup" v-if="showPopup" @click="onClickPopup">
        <div class="popup-inner">
          <div class="left">
            <div class="image-block">
              <img class="production-image" :src="good.image" alt="">
            </div>
          </div>
          <div class="right">
             <div class="production-title-panel">
              <div class="production-title text-overflow--1">
                {{good.name}}
              </div>
              <div class="icon icon--close" @click="closePopup"></div>
            </div>
            <div class="info">
              <div class="price">¥{{good.price}}</div>
              <div class="production-type">{{good.condition}}</div>
            </div>
          </div>
        </div>
        <div>
        </div>
    </div>

    <!-- 输入框 -->
    <div class="footer" :style="{'bottom': inputHeight}">
      <div class="footer--inner">
        <input type="text" :focus="focus" :value="value" placeholder="提一个问题" class="chat-input" maxlength="500" confirm-type="send" cursor-spacing="0" @confirm="onAsk" :adjust-position="false" @focus="onFocus" @blur="onBlur">
      </div>
    </div>
  </div>
</template>
<script>
import chooseLocation from '@/modules/chooseLocation'
export default {
  name: 'Ask',
  components: {},
  data() {
    return {
      value: '',
      showPopup: true,
      good:{},
      questions: [],
      focus: false,
      isAnswerQuestion: false,
      currentQuestion: {},
      inputHeight: 0
    }
  },
  async mounted() {
    let data = JSON.parse(decodeURIComponent(this.$mp.query.data));
    this.showPopup = true;
    this.good = data;
    

    this.getAskList();
  },
  onShow(){
    this.focus = false;
  },
  methods: {
    async getAskList(){
      let res = await this.R.fetchProductAskList(this.good.id);
      this.questions = res.data.data;
    },
    async onAsk(e) {
      let value = e.mp.detail.value;
      this.value = value;
      
      if (this.isAnswerQuestion) {
        
          let res = await this.R.fetchProductAnswer(this.good.id, this.currentQuestion.id, this.value)
          this.value = "";
          this.isAnswerQuestion = false;
          this.getAskList();
      } else {
        if (value.length) {  
          // call ajax
          let res = await this.R.fetchProductAskPublish(this.good.id, this.value);
          this.value = '';
          this.getAskList();
        }
      }
      this.focus = false;
    },
    closePopup(){
      this.showPopup = false;
    },
    onClickPopup(){
      
    },
    answerQuestion(question) {
      if (!this.good.isSelf)  return;
      this.focus = true;
      this.isAnswerQuestion = true;
      this.currentQuestion = question;
    },
    onFocus (e) {
      let height = e.mp.detail.height;
      this.inputHeight = height - 34 + 'px'
    },
    onBlur () {
      this.inputHeight = 0;
    }
  }
}

</script>
