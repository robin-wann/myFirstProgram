<template>
	<div class="menu">
		<div class="header_user">
			<div class="user_pic">
				<img src='./../../assets/img.jpg' alt=''>
			</div>
			<p class="user_title">{{username}}</p>
		</div>
		<div class="menu_ul">
			<div v-for='(list,index) in menus' v-on:click='clickChoose(index,lists[list])' :class='{menu_list:true}'>
				<router-link class="font_color" :class='{menu_show:isActive==index}' :to='list'>
					{{lists[list]}}
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	//下面是vue的映射关系
	import { mapState } from 'vuex';

	const lists = {
				 'welfare': '福利',
				 'day': '每日推荐', 
				 'ios': 'IOS', 
				 'android': 'Android', 
				 'web': '前端'
				};
	export default {
		name : "v-menu",
		data () {
			return {
				username: "luck_yan_0801@163.com",
				lists : lists,
				isActive : 0,
			}
		},
		computed: {
			...mapState([
				'menus',
			]),
		},
		methods : {
			clickChoose : function(index,title){
				this.isActive = index;
				this.$store.commit('UPDATE_TITLE',title);
				this.$store.commit('UPDATE_MENUSHOW');
			}
		}
	}
</script>

<style>
	.menu{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 60%;
		background-color: #22262A;
		padding-top: 20px;
	}
	.user_pic {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
		overflow: hidden;
		margin: 0 auto;
	}
	.header_user img{
		width: 100%;
		height: auto;
	}
	.header_user .user_title{		
		line-height: 50px;
		text-align: center;
		color: white;
	}
	.menu_list{
		padding: 5px 0 5px 25px;
		font-size: 19px;
		line-height: 35px;
		border-bottom: 1px solid lightgray;
	}
	.font_color{
		text-decoration: none;
		color: lightgray;
	}
	.menu_show {
		color: #01AEF3;
	}
</style>