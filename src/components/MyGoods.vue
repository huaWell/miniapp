<style lang="less" scoped>
@import '~@/styles/color.less';
.my-goods-container {

.my-goods-wrapper {

	display: flex;
	align-items: center;

}


	.img {
		display: block;
		height: 80px;
		width: 80px;
		min-width: 80px;

border: 1rpx solid #F3F3F3;
border-radius: 8px;

	}
	.right {
		margin-left: 12px;
		flex: 1;
		height: 80px;
		.title {
			line-height: 22px;
			font-size: 16px;
			font-weight: bold;
			height: 44px;
		}

		.desc {
			display: flex;
			align-items: flex-end;
			height: 36px;
			.price {

font-weight: 700;
font-size: 18px;
line-height: 20px;

			}
			.origin-price {

margin-left: 6px;
font-size: 12px;
line-height: 15px;
/* identical to box height */

text-decoration: line-through;

color: #ACADBB;


			}
		}
	}
}
</style>
<template>
	<div class="my-goods-container" @click="toPublishPage(good)">
		<van-cell>
			<!-- <div slot="title" class="my-goods-wrapper">
				<img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg14.360buyimg.com%2Fn1%2Fjfs%2Ft1%2F205924%2F8%2F1846%2F146642%2F611cb4f4Ed52ed5d4%2Fd5710d9248fb393b.jpg&refer=http%3A%2F%2Fimg14.360buyimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1654399958&t=de544ce60062216ec9ab6525bb8b8d9a" alt="" class="img">
				<div class="right">
					
					<p class="title text-overflow--2">
						我是商品的飞机啊思考放进口袋里撒范德萨我是商品的飞机啊思考放进口袋里撒范德萨我是商品的飞机啊思考放进口袋里撒范德萨我是商品的飞机啊思考放进口袋里撒范德萨我是商品的飞机啊思考放进口袋里撒范德萨
					</p>
					<div class="desc">
						<span class="price">¥1111</span>
						<span class="origin-price">¥2222</span>
					</div>
				</div>
			</div> -->
			<div slot="title" class="my-goods-wrapper"  @click="toPublishPage(good)">
				<img :src="good.headImg" alt="" class="img">
				<div class="right">
					
					<p class="title text-overflow--2">
						{{good.name}}
					</p>
					<div class="desc">
						<span class="price">¥{{good.price}}</span>
						<span class="origin-price">¥{{good.oriPrice}}</span>
					</div>
				</div>
			</div>
		</van-cell>
	</div>
</template>
<script>
	export default {
		name: 'MyGoods',
		components: {},
		data () {
			return {}
		},
		props:["good"],
		mounted () {},
		methods: {
			toPublishPage(good){
				let param_str = encodeURIComponent(JSON.stringify(good))
          		this.$push(`/pages/product-detail/main?data=${param_str}`);
			}
		}
	}
</script>