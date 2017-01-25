<template>
	<div> 
		<navigation></navigation>
	  	<el-carousel :interval="4000" type="card" height="420px">
		    <el-carousel-item v-for="item in banners">
		      	<img :src="item.url" :alt="item.title"/>
		    </el-carousel-item>
	  	</el-carousel>
	</div>
</template>
<script>
	import navigation from "../components/navigation.vue"

	export default {
		data() {
			return {
				banners: [{
					title: "冰河时代4:大陆漂移",
					url: "http://img05.tooopen.com/images/20150423/tooopen_sy_120060089945.jpg"
				},{
					title: "禁运品contraband",
					url: "http://img2.niutuku.com/desk/1207/1600/bizhi-1600-15680.jpg" 
				},{
					title: " 画皮",
					url: "http://image5.tuku.cn/pic/wallpaper/qita/huapi2kuanpingbizhi/002.jpg" 
				},{
					title: "侏罗纪世界",
					url: "http://images.missyuan.com/attachments/day_151014/20151014_e0722d4c2628770a89edp6yxyuApOPPP.jpg" 
				},{
					title: "美女",
					url: "http://www.benbenla.cn/images/20121219/benbenla-05c.jpg" 
				},{
					title: "X战警 逆转未来",
					url: "http://www.xinren1314.com/data/attachment/forum/201405/14/141115dgn8e29e2zn42992.jpg" 
				}]
			}
		},
		components: {
			navigation
		}
	}
</script>
<style lang="scss" scoped>
	.el-carousel{   
		.el-carousel__item{
			img{
				height: 100%; 
			}
		} 
	} 
</style> 