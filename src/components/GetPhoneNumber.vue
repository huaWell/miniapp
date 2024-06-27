<style lang="less">
.get-phone-number {

}
</style>
<template>
	<div class="get-phone-number">
<!-- 		<button class="button--reset" open-type="getPhoneNumber" @getphonenumber="onGetPhoneNumber">
			<slot></slot>
		</button> -->

		<button class="button--reset"  @click="onGetPhoneNumber">
			<slot></slot>
		</button>


	</div>
</template>
<script>
	export default {
		name: 'getPhoneNumber',
		components: {},
		data () {
			return {}
		},
		mounted () {},
		methods: {
			onGetPhoneNumber (e) {
				// console.log('手机号',e, e.mp.detail.code)
				// let code = e.mp.detail.code;
				this.$emit('success')
			}
		}
	}
</script>