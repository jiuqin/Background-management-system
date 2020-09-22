<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/menu' }">菜单列表</el-breadcrumb-item>
      <el-breadcrumb-item>菜单{{ tip }}</el-breadcrumb-item>
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
      <el-form-item label="菜单名称" prop="title">
        <el-input v-model="info.title" class="resetW"></el-input>
      </el-form-item>
      <el-form-item label="上级菜单" prop="pid">
        <el-select v-model="info.pid" placeholder="请选择">
          <!-- <el-option label="顶级菜单" :value="0"></el-option> -->
          <el-option
            v-for="item in getmenulist"
            :key="item.id"
            :label="item.title"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="菜单类型" prop="type">
        <el-radio-group v-model="info.type">
          <el-radio :label="1">目录</el-radio>
          <el-radio :label="2">菜单</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="菜单图标" v-show="info.type == 1">
        <el-input v-model="info.icon"></el-input>
      </el-form-item>
      <el-form-item label="菜单地址" v-show="info.type == 2" prop="url">
        <el-input v-model="info.url"></el-input>
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
        title: "",
        pid: "",
        status: false,
        type: 1,
        icon: "",
        menus: [], //下拉列表选项值，从store中获取到
      },
      rules: {
        title: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pid: [{ required: true, message: "请选择菜单", trigger: "change" }],
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
            url = this.$api.menueditUrl;
            data.id = Number(this.$route.params.id);
          }
          data.status = data.status ? 1 : 2;
          console.log(data, "设置id的data");

          //发送请求
          this.$axios.post(url, data).then((res) => {
            console.log(res, "发送请求的res");
            if (res.data.code == 200) {
              this.$router.push("/menu");
            } else {
              this.$message.error(res.data.msg);
            }
          });
        }
      });
    },
    
  },
  computed: {
    ...mapGetters(["getmenulist"]),
  },
  created() {
    // 页面刷新  需要数据
    let menuid = this.$route.params.id;
    if (menuid) {
      this.tip = "修改";
      // 根据id获取id对应的该条数据 赋值给info
      this.$axios
        .get(this.$api.menuinfoUrl, {
          params: {
            id: menuid,
          },
        })
        .then((res) => {
          // console.log(res)
          // pid: 0
          // title: "系统设置"
          // icon: "el-icon-setting"
          // type: 1
          // url: ""
          // status: 1

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
