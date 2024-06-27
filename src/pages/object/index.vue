<style lang="less" scoped>
    @import '~@/styles/color.less';
    </style>

<template>
 <web-view :src="h5Url"></web-view>
</template>

<script>
    import qs from 'querystring'
    
export default {
    name: 'Object',
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
        let sessionKey = this.$mp.query.sessionKey;
        let latitude = this.$mp.query.latitude;
        let longitude = this.$mp.query.longitude;

        this.h5Url = `https://www.xzcricle.com/home/#/objectHome?${qs.stringify({
            sessionKey: sessionKey,
            latitude: latitude,
            longitude: longitude,
        })}`
    },
    methods:{

    }
}

</script>