<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" v-bind:label-width="labelwidth" class="boot-form">
    <el-form-item label="用户名" prop="user">
      <el-input type="text" v-model="ruleForm.user" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
    </el-form-item>  
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
    <div>
      <p>当前在线用户：<code>{{cout}}</code></p> 
    </div>
    <el-alert class="login-info"
            v-if= "state"
            title="请登录"
            type="error" 
            show-icon>
    </el-alert> 
  </el-form>
</template> 
<script>
  import filter from "../filters/filters.js"
  import "../scss/_code.scss"
  export default {
    name: "loginform",
    props: ['labelwidth'], 
    data() {
       
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else { 
          callback();
        }
      }; 
      return {
        cout: filter.numspa(10000782937897,' '),
        state: false,
        ruleForm: {
          pass: '',
          user: '',
          age: ''
        },
        rules: {
          user: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ] 
        }
      };
    },
    methods: {
      submitForm(formName) {
        var vm = this;
        console.log(vm.state);
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!'); 
            sessionStorage.setItem("accessToken","loveqin");
            vm.$router.push({
              "name": "home"
            });
          } else {
            console.error('error submit!!');
            vm.state = true;
            return false;
          }
        });
      },
      resetForm(formName) {
        var vm = this;
        vm.state = false;
        vm.$refs[formName].resetFields();
      }
    }
  }
</script>