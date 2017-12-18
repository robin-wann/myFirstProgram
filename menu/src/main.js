// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './vuex/store';
/*import VueLazyload from 'vue-lazyload';*/
import VueLazyload from 'D:/nodeJS/node_global/node_modules/vue-lazyload';
//接入外部请求
import axios from 'axios';
//引入滑动模块
import VueInfiniteScroll from 'D:/nodeJS/node_global/node_modules/vue-infinite-scroll';
/*import VueInfiniteScroll from 'vue-infinite-scroll';*/
import router from './router/index';

Vue.use(VueLazyload,{
	loading : require('./assets/loading.gif'),
	error : require('./assets/logo.png'),
});
Vue.use(VueInfiniteScroll);
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
   // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  router,
  template: '<App/>',
  components: { App }
})
