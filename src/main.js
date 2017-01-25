// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource' 
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import routes from './route/routes.config.js'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'

//加载路由中间件
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Element)

const router = new VueRouter({
	routes
}) 
// 监听路由跳转前变化
router.beforeEach((to,from,next) => {
	if(to.path == "/login") {
		// 清除session
		sessionStorage.clear();
		// 加载条启动
		NProgress.start();
		//路由跳转 
		next()
	} else {
		if (!sessionStorage.getItem("accessToken")) { 
			console.log(to.fullPath);
			 
			next({
				path: '/login',
				query: {
					redirect: to.fullPath
				}
			})
		} else {
			NProgress.start();
			next();
		}
	}
})

// 监听路由跳转完成变化
router.afterEach(transition => { 
    NProgress.done();
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
