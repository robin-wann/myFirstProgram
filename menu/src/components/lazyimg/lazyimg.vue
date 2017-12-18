<template>
	<img v-lazy='imgObj' lazy='loading'>
</template>

<script type="text/javascript">
	export default {
		name : "v-img",
		props : {
			imgUrl:{
				type : String
			}
		},
		computed : {
			imgObj(){
				return `${this.imgUrl}?imageView2/0/w/200`;
			}
		}
	}
</script>

<style type="text/css">
	@keyframes fadeIn {
		from {
			opacity: 0 ;
		}
		to {
			opacity: 1;
		}
	}
	img[lazy=loading]{
		margin: auto;
	}
	img[lazy=loaded]{
		animation: fadeIn 1.5s both;
		--webkit-animation: fadeIn 1.5s both;
	}
	img[lazy=error] {
		border-radius: 2px;
		-webkit-animation: fadeIn 1.5s both;
		animation: fadeIn 1.5s both; 
	}
</style>