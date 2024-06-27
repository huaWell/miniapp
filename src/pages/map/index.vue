<style lang="less" scoped>
@import '~@/styles/color.less';
.map-container {
  .my-map {
    height: 100vh;
    width: 100vw;
  }
}
</style>
<template>
  <div class="map-container">
      <map 
        class="my-map" 

        :latitude="map.latitude" 
        :longitude="map.longitude" 
        :markers="map.markers"
>
      </map>
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data () {
      return {
        map: {}
      }
    },
    mounted () {

      // this.map = 
      try {
        this.map = JSON.parse(decodeURIComponent(this.$mp.query.map))
        
      } catch (err) {
        
      }


    },
    methods: {}
  }
</script>