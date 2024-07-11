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
export default {
    name: 'webView',
    components:{},
    data(){
        return {
            //url: "https://product-lite.bugongsoft.com"
            url: "https://operation.bugongsoft.com"
            //url: "https://www.baidu.com"
        }
    },
    mounted(){
        console.log(this.url)
    },
    onShow(){
       // this.url = decodeURIComponent(this.$mp.query.url)
    },
    methods:{

    }
}
</script>