<template>
  <div class="layout">
    <div class="login">
      <h3>登录我的账号</h3>
      <el-form
        :model="user"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="user.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
        ],
        password: [
          { required: true, message: "密码不能为空", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["userinfoAsyncAdd"]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //登录按钮--提交表单--发送请求
          this.userinfoAsyncAdd(this.user).then((res) => {
            console.log("登录是否成功");
            if (res.data.code == 200) {
              console.log(res.data.list);
              //  1把token存储到sessionStorage中
              sessionStorage.setItem("token", res.data.list.token);
              this.$router.push("/home");
            } else {
              this.$message.error(res.data.msg);
            }
          });

          // //登录按钮--提交表单--发送请求
          // this.$axios.post(this.$api.userloginUrl,this.user)
          // .then(res=>{
          //   console.log(res);
          //   if(res.data.code==200){
          //     sessionStorage.setItem('token',res.data.list.token);//把token存储在本地,---用户信息用store存储
          //     this.$router.push('/menu');//登录成功--默认跳转到菜单页
          //   }else{
          //         this.$message.error(res.data.msg);
          //   }
          // })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
 
};
</script>
<style>
.el-form-item__label {
  color: white;
}
</style>
<style scoped>
.layout {
  border: 1px solid transparent;
  height: 100%;
  background: url("../assets/images/layoutbg.jpg") no-repeat;
  background-size: cover;
}
.login {
  width: 400px;
  padding: 20px;
  margin: 150px auto;
  border: 1px solid skyblue;
  color: white;
  background-image: url("../assets/images/bg.jpg");
}
</style>
