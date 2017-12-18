import Vue from 'vue'
import Router from 'vue-router'

import welfare from './../components/welfare/welfare.vue'
import day from './../components/recommend/recommend.vue'
import ios from './../components/lists/ios.vue'
import android from './../components/lists/android.vue'
import web from './../components/lists/web.vue'
//注册组件
Vue.use(Router);
//路由元信息
//meta : {requiresAuth : true}  表示这个路由信息需要检测

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',  //组件名称
      component: welfare
    },
    {
      path : "/welfare",
      name : "welfare",
      component: welfare,
    },
    {
      path : "/day",
      name : "day",
      component: day,
      meta : {requiresAuth : true}
    },
    {
      path : "/ios",
      name : "ios",
      component: ios,
      meta : {requiresAuth : true}
    },
    {
      path : "/android",
      name : "android",
      component: android,
      meta : {requiresAuth : true}
    },
    {
      path : "/web",
      name : "web",
      component: web,
      meta : {requiresAuth : true}
    }
  ]
})
