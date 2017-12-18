//创建状态管理

import Vue from 'vue';
import Vuex from 'vuex';
//引用JS文件的方法
import * as action from './action';
import * as getter from './getter';
import * as data from './../common/js/data';

//告诉vue使用Vuex
Vue.use(Vuex);

//启动时的初始状态
const state = {
	'title' : "福利",
	'menus' : data.NAME_TITLE,
	'proShow' : false,
};

//保存一系列接下来要写的mutations函数
const mutations = {
	UPDATE_TITLE(state, title){
		console.log(title);
		state.title = title;
	},
	UPDATE_MENUSHOW(state) {
		state.proShow = !state.proShow;
	},
	UPDATE_LOADING(state,date){
		state.loadingShow = data;
	}
}

//整合初始状态和变更函数，我们就可以得到我们所需要的store
//然后就可以链接这个store到应用中
export default new Vuex.Store({
	state,
	mutations,
	action,
	getter
});