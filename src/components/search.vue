<style lang="less" scoped>
.search-production-panel{
    width: fit-content;
    height: 24px;
    color: #000;
    background: rgba(0,0,0,0.1);
    border-radius: 10px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    padding: 2px 8px;
}
.search-production-text{
    opacity: 0.3;
    font-size: 14px;
    line-height: 16px;
}
.search-production-img{
    margin-left: 12x;
}
.my-input{
    font-size:14px;
    font-weight:400;
    line-height:16.41px;
    color: #000 !important;
}
   .my-input::-webkit-input-placeholder{
       color: #ACADBB;
       font-weight: 400;
    }
</style>

<template>
    <div class="weui-search-bar" style="height: 100%;opacity:0.6;background: #EFEFEF;border-radius: 16px;border: 1px solid #ddd;" @click="goSearchPage">
        <div class="weui-search-bar__form">
            <div class="weui-search-bar__box" style="display:flex;padding-left: 8px;align-items: center;height: 32px;">
                <div style="width: 16px;">
                    <icon class="weui-icon-search_in-box" type="search" size="14" @click="search"></icon>
                </div>
                <div style="flex-grow: 1;padding: 4px 16px;box-sizing: border-box;">
                    <input disabled="disabled" type="text" class="weui-search-bar__input my-input" :placeholder="placeholder" v-model="inputVal" />
                </div>
                <div class="weui-icon-clear" v-if="inputVal.length > 0" @click="clearInput" style="width: 14px;padding-right: 8px;">
                    <icon type="clear" size="14"></icon>
                </div>
               
                <!-- <div v-if="searchProduction!='' && searchProduction != undefined && isMall" class="search-production-panel">
                    <span class="search-production-text">{{searchProduction}}</span>
                    <div class="icon icon--close search-production-img" @click.stop="closeSearchProduction"></div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
    import qs from 'querystring'

    export default {
        name: "Search",
        components:{},
        data(){
            return {
                inputVal: "",
            }
        },
        props: ["placeholder","searchProduction","rootCategory", "value"],
        mounted () {
            if (this.value == undefined)    this.value = "";
            this.inputVal = this.value;
        },
        onload(options) {         
        },
        created() {
            
        },
        watch(){
            // value:{
            //     immediate:true,
            //     handler(val){
            //         this.inputVal = val
            //     };
            // }
        },
        methods:{
            inputTyping(e){
                this.inputVal = e.mp.detail.value
            },
            clearInput(){
                this.inputVal = '';
            },
            search(){
                // this.$emit("search", this.inputVal);
            },
            closeSearchProduction(){
                this.value = "";
            },
            goSearchPage(){
                let params = {category: this.searchProduction, rootCategory: this.rootCategory};
                let params_str = encodeURIComponent(JSON.stringify(params))
                this.$push('/pages/mall/main')

                // this.$push(`/pages/search/main?data=${params_str}`);

                // wx.navigateTo({
                //     url: `/pages/search/main?data=${params_str}`
                // }) 
            }
        }
    }
</script>