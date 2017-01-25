// const login={
// 	template: "<h1>登录页面</h1> <el-button type='ghost'>点击登录</el-button> "
// }
import login from "../page/login.vue"
import home from "../page/home.vue"

const routers = [{
		path: '/login',
		name: 'login',
		component: login
	},{
		path: '/home',
		name: 'home',
		component: home
	}] 
export default routers