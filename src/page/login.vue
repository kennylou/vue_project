<template>
	<div class="boot-page"> 
		<navigation class="boot-nav"></navigation>
		<div class="form-container"> 
			<loginform labelwidth="68px"></loginform>
		</div>	
		
	</div>
</template>
<style lang='scss'>
	.boot-page{ 
		height: 100%;
		.boot-nav{ 
			margin-bottom: 18px;
		}
	}
	.form-container{ 
		position: relative;
      	width: 480px;
      	padding: 60px 20px 20px; 
      	margin: 120px auto;
      	background: #fff; 
      	border-radius: 8px;
      	.login-info{
      		position: absolute;
      		top: 0; 
      		left: 0;
      		right: 0
      	}
	}
</style>
<script>
	import navigation from "../components/navigation.vue"
	import loginform from "../components/loginform.vue"

	export default { 
		components:{
			navigation,
			loginform 
		}
	}
</script>