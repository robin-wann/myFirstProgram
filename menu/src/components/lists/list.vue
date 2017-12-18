<template>
	<div class="list" v-infinite-scroll='' infinite-scroll-disabled='busy' infinite-scroll-distance='10'>
	<!-- infinite-scroll-disabled : 防止数据重复加载 -->
		<a>{{title}}</a><br>
		<button @click='loadMore'>123</button>
	</div>
</template>

<script type="text/javascript">
	export default{
		name : "v-list",
		props : {
			type: {
				type:String,
			}
		},
		data(){
			return {
				title : '123',
				page: 1,
				busy : false
			}
		},
		methods : {
			loadTop(){
				this.$http.get(`http://gank.io/api/data/${this.type}/10/${this.page}`).then((response)=>{
					console.log(response);
				})
			},
			loadMore(){
				this.busy = true;
				this.loadTop();
				this.page++;
			}
		}
	}
</script>

<style type="text/css">
	.list{
		padding: 15px;
		border: 1px solid red;
	}
</style>