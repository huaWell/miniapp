<style lang="less" scoped>
    @import '~@/styles/color.less';
    </style>

<template>
 <web-view :src="h5Url"></web-view>
</template>

<script>
import qs from 'querystring'
export default {
    name: 'H5WebviewCircle',
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
        let groupId = this.$mp.query.groupId;
        let sessionKey = this.$mp.query.sessionKey;
        let latitude = this.$mp.query.latitude;
        let longitude = this.$mp.query.longitude;
        
        // this.fresh = JSON.parse(decodeURIComponent(this.$mp.query.data));
        // 
        this.h5Url = `https://www.xzcricle.com/h5/#/circle-detail?${qs.stringify({
            groupId: groupId,
            sessionKey: sessionKey,
            latitude: latitude,
            longitude: longitude,
        })}`
    },
    methods:{

    }
}

</script>