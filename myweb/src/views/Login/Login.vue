<template>
    <div style="margin-top:25%">
        <el-container>
          <el-header>登录界面</el-header>
          <el-main>
              <div class="container">
                  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="name">
                            <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="ruleForm.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                            <el-button @click="resetForm('ruleForm')">注册</el-button>
                        </el-form-item>
                  </el-form>
              </div>
          </el-main>
          <el-footer>version: 1.0.0 &nbsp;&nbsp; copyright@lizhiyu</el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    name:'Login',
    data() {
      return {
        ruleForm: {
          name: '',
          password:''
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            const {name,password} =this.ruleForm
            const data ={
                username:name,
                password:password
            }
            //const var let 都是定义数据的语句
            //const 定义的变量不能修改，而且必须初始化
            //var 定义的变量可以进行修改，如果不进行初始化，会输出undefined 不会报错
            //let是块级作用，在函数内定义后，对函数外部无影响
          if (valid) {
              //把用户名和密码发送到后端进行匹配验证
              this.$axios.post("http://mock-api.com/RzJx6rn9.mock/login",data).then(res =>{
                  
                  if (res.data.code==200) {
                      this.$router.replace('/home');
                      sessionStorage.setItem("username",name)
                  }else{
                      alert('登陆失败')
                  }
              })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .container{
      width: 300px;
      margin: auto;
  }
</style>