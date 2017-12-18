<template>
	<div class="walfare_wrapper" v-infinite-scroll='loadMore' infinite-scroll-disabled='busy' infinite-scroll-distance='10'>
		<div class="welfare_left">
			<figure class="welfare_img" v-for='data in leftData'>
				<v-img :imgUrl='data.url'></v-img>	
			</figure>
		</div>
		<div class="welfare_left">
			<figure class="welfare_img" v-for='data in rightData'>
				<v-img :imgUrl='data.url'></v-img>
			</figure>
		</div>
		<!-- <button @click="loadMore">click</button> -->
	</div>
</template>

<script type="text/javascript">

	import vImg from './../lazyimg/lazyimg.vue'
	export default{
		data(){
			return {
				page: 1,
				leftData: [],
				rightData: [],
				busy: false,
			}
		},
		components:{
			vImg
		},
		computed : {
			show(){
				JSON.stringify(this.leftData);
			}
		},
		methods :{
			loadTop(){
				this.page = 4;
				this.busy = true;
				this.$http.get(`https://gank.io/api/data/福利/10/${this.page}`)
				.then((response)=>{
					/*response为请求接收到的数据*/
					let left = response.data.results.filter((data,i)=>{
						/*data为改组数据对象，下面返回的是该索引值所对应的对象内容*/
						/*i为索引值*/
						return ( i + 1 ) % 2 === 1;
					});
					let right = response.data.results.filter((data,i)=>{
						return ( i + 1 ) % 2 !== 1;
					});
					this.leftData = this.leftData.concat(left);
					this.rightData = this.rightData.concat(right);
					this.busy = false;	
				});
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
	.walfare_wrapper{
		display: flex;
	}
	.welfare_left{
		width: 50%;
		--webkit-columns-gap: 10px;
	}
	.welfare_img{
		width: 95%;
		background-color: #fefefe;
      	border: 2px solid #fcfcfc;
      	box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);
      	margin: 0 2px 10px;
	}
	.welfare_img img{
		width: 100%;
		height: auto;
	}
</style>