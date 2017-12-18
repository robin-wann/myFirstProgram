<template>
	<div>
		<!-- 下面这个div是遮罩 -->
		<div class="page_cover" v-show="proShow" @click='showMenu'></div>
		<div class='header_div'>
			<div class="header_pull_left left" @click='showMenu'>菜单</div>
			<div class="center">{{title}}</div>
			<div class='header_pull_right'>搜索</div>
		</div>
		<v-menu class='initShow' :class='{menuShow:proShow}'></v-menu>
	</div>
</template>

<script>
	import vMenu from './../menu/menu.vue';
	import { mapState } from 'vuex';   //就是映射的重命名，但是mapState是不变的
	export default {
		name: 'v-components',
		components : {
			vMenu,
		},
		data(){
			return {
				isShow : false,
			}
		},
		methods : {
			showMenu : function(event){
				//触发store里面的函数
				this.$store.commit('UPDATE_MENUSHOW');
				event.stopPropagation();
			}
		},
		computed : {
			...mapState ([
				'title',
				'proShow'
			])
		}
	}
</script>

<style>
	.header_div{
		display: flex;
		width : 100%;
		height : 50px;
		background-color: #03A9F4;
		line-height: 50px;
		text-align: center;
		color : white;
	}
	.header_div .center{
		flex : 1;
		font-size : 16px;
	}	
	.header_pull_left,.header_pull_right {
		width: 60px;
	}
	.page_cover{
		position : fixed;
		top: 0;
		bottom : 0;
		left : 0;
		right : 0;
		background-color: black;
		opacity: 0.2;
	}
	.initShow{
		transform: translateX(-248px);
		transition: all 0.5s ease;
		z-index: 99;
	}
	.menuShow{
		transform: translateX(0);
	}
</style>