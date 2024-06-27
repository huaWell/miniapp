<style lang="less" scoped>
@import '~@/styles/color.less';
</style>
<template>
  <div class="container">
    community
  </div>
</template>
<script>
  export default {
    name: '',
    components: {},
    data () {
      return {}
    },
    mounted () {    this.$mp.page.getTabBar().setData({
      curPage: this.$mp.page.route
    });},
    methods: {}
  }
</script>