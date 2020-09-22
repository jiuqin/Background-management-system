<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/menu' }"
        >管理员列表</el-breadcrumb-item
      >
      <el-breadcrumb-item>用户{{ tip }}</el-breadcrumb-item>
    </el-breadcrumb>
    <p></p>
    <!-- 菜单添加 -->
    <el-form
      :model="info"
      :rules="rules"
      ref="info"
      label-width="100px"
      class="demo-info"
    >
      <el-form-item label="所属角色" prop="roleid">
        <el-select v-model="info.roleid" placeholder="请选择">
          <el-option
            v-for="item in rolesarr"
            :key="item.id"
            :label="item.rolename"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="用户名" prop="username">
        <el-input v-model="info.username" class="resetW"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="info.password" class="resetW" type="password"></el-input>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="info.status"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('info')">{{
          tip
        }}</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
import { mapGetters } from "vuex"; //从store中获取到菜单下拉数据

export default {
  data() {
    return {
      tip: "添加",
      info: {
        roleid: "", //所属角色
        username: "", //用户名
        password:'',
        status: false,

      },
      rolesarr: [], //下拉列表选项值--获取所属角色列表
      rules: {
        roleid: [
          { required: true, message: "请选择所属角色", trigger: "change" },
        ],
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        password: [
          { required: true, message: "留空则不修改", trigger: "change" },
        ],
      },
    };
  },
  methods: {
   
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log(this.info, "info");

          //   验证规则都满足时，会执行这里
          //    不管是添加还是修改都在这里操作
          // json序列化，防止数据变化，上面的数据跟着变化
          let data = JSON.parse(JSON.stringify(this.info));
          let url = this.$api.useraddUrl;
          if (this.$route.params.id) {
            url = this.$api.usereditUrl;
            data.id = Number(this.$route.params.id);
          }
          data.status = data.status ? 1 : 2;
          console.log(data, "设置id的data");

          //发送请求
          this.$axios.post(url, data).then((res) => {
            console.log(res, "发送请求的res");
            if (res.data.code == 200) {
              this.$router.push("/user");
            } else {
              this.$message.error(res.data.msg);
            }
          });
          
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  computed: {
    ...mapGetters(["getrolelist"]),
  },
  created() {
    // 页面刷新  需要数据
    let userid = this.$route.params.id; //获取动态id--判断是添加还是修改
    console.log(userid);
    if (userid) {
      this.tip = "修改";
      // 根据id获取id对应的该条数据 赋值给info
      this.$axios
        .get(this.$api.usrinfoUrl, {
          params: {
            uid: userid,
          },
        })
        .then((res) => {
          this.info = res.data.list;
          // 修改status的值为true或者false
          this.info.status = this.info.status == 1 ? true : false;
        
        });
    }
 

   //获取角色列表的下拉信息--再渲染到页面上
    this.$axios.get(this.$api.rolelistUrl)
    .then(res=>{
      console.log(res.data.list,'rolelist');
      this.rolesarr=res.data.list;
    })

    
   
  },
};
</script>

<style>
.resetW {
  width: 60%;
}
</style>
