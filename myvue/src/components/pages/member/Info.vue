<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/member' }"
        >会员列表</el-breadcrumb-item
      >
      <el-breadcrumb-item>会员{{ tip }}</el-breadcrumb-item>
    </el-breadcrumb>
    <p></p>
    <!-- 会员添加 -->
    <el-form
      :model="info"
      :rules="rules"
      ref="info"
      label-width="100px"
      class="demo-info"
    >
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="info.phone" class="resetW"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="info.nickname" class="resetW"></el-input>
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
        phone: "",
        nickname: "",
        password:'',
        status: false,
      },
      rules: {
       phone: [{ required: true, message: "请输入手机号名称", trigger: "blur" }],
       nickname: [{ required: true, message: "请输入昵称", trigger: "blur" }],
       password: [{ required: true, message: "请输入密码", trigger: "blur" }],
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
          let url = this.$api.menuaddUrl;
          if (this.$route.params.id) {
            url = this.$api.membereditUrl;
            data.id = Number(this.$route.params.id);
          }
          data.status = data.status ? 1 : 2;
          console.log(data, "设置id的data");

          //发送请求
          this.$axios.post(url, data).then((res) => {
            console.log(res, "发送请求的res");
            if (res.data.code == 200) {
              this.$router.push("/member");
            } else {
              this.$message.error(res.data.msg);
            }
          });
        }
      });
    },
  },
  created() {
    // 页面刷新  需要数据
    let memberid = this.$route.params.id;
    if (memberid) {
      this.tip = "修改";
      // 根据id获取id对应的该条数据 赋值给info
      this.$axios
        .get(this.$api.memberinfoUrl, {
          params: {
            uid: memberid,
          },
        })
        .then((res) => {
          console.log(res.data,'memberinfo')
          
          this.info = res.data.list;
          // 修改status的值为true或者false
          this.info.status = this.info.status == 1 ? true : false;
        });
    }
  },
};
</script>

<style>
.resetW {
  width: 60%;
}
</style>
