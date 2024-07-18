<style lang="less" scoped>
@import '~@/styles/color.less';
</style>

<template>
<div class="webview-container">
    <web-view :src="url">

    </web-view>
</div>
</template>

<script>
let random = () => {
  return parseInt(Math.random() * 10000)
}
import qs from 'querystring'

export default {
    name: 'webView',
    components:{},
    data(){
        return {
            //url: "https://operation.bugongsoft.com"
            url: "https://operation.bugongsoft.com/#/orderProgress"
            //url: "https://www.baidu.com"
        }
    },
    mounted(){
        console.log(this.url)
        this.url = `https://operation.bugongsoft.com/#/order-stats/?v=${random()}`
    },
    onShow(){
       // this.url = decodeURIComponent(this.$mp.query.url)
    },
    methods:{

    }
}
</script>