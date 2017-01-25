<template>
  <div id="app"> 
    <router-view></router-view>
    <!-- <img @click="inToLogin" src="./assets/logo.png">
    <hello></hello> --> 
  </div>
</template>

<script>
import "normalize.css" 
// import Hello from './components/Hello'

export default {
  // name: 'app',
  // components: {
  //   Hello
  // },
  created:function(){
    this.$router.replace('/login'); 
  },
  methods: {
    inToLogin: function() {
      var vm = this;
      // 触发路由跳转
      // vm.$router.push({name:'login'});
    }
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  background: #435571;
  height: 100%; 
}
</style>
