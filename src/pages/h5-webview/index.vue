<style lang="less" scoped>
    @import '~@/styles/color.less';
    </style>

<template>
 <web-view :src="h5Url"></web-view>
</template>

<script>
    import qs from 'querystring'
    
export default {
    name: 'H5Webview',
    components: {},
    data(){
        return {
            h5Url: '',
            fresh: {}
        }
    },
    onShow(){

    },
    mounted(){
        let id = this.$mp.query.id;
        let sessionKey = this.$mp.query.sessionKey;
        let latitude = this.$mp.query.latitude;
        let longitude = this.$mp.query.longitude;
        let queryGroup = this.$mp.query.queryGroup;
        

        this.h5Url = `https://www.xzcricle.com/h5/#/fresh-detail?${qs.stringify({
            id: id,
            sessionKey: sessionKey,
            latitude: latitude,
            longitude: longitude,
            queryGroup: queryGroup
        })}`
    },
    methods:{

    }
}

</script>