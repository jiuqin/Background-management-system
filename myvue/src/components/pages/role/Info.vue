<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/role' }">角色列表</el-breadcrumb-item>
      <el-breadcrumb-item>角色{{ tip }}</el-breadcrumb-item>
    </el-breadcrumb>
    <p></p>
    <!-- 角色添加 -->
    <el-form
      :model="info"
      :rules="rules"
      ref="info"
      label-width="100px"
      class="demo-info"
    >
      <el-form-item label="角色名称" prop="rolename">
        <el-input v-model="info.rolename" class="resetW"></el-input>
      </el-form-item>

      <el-form-item label="角色权限">
        <!-- default-checked-keys	默认勾选的节点的 key 的数组 -->
        <el-tree
          :data="menus"
          show-checkbox
          ref="tree"
          node-key="id"
          default-expand-all
          :default-checked-keys="defaultkeys"
          :props="defaultProps"
        >
        </el-tree>
        <!-- {{menus}} -->
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
        rolename: "",
        status: true,
        menus: "", //下拉列表选项值，从store中获取到--menus是个数组，里面是对象[{},{}]--存角色权限
      },
      menus: [],
      defaultProps: {
        children: "children",
        label: "title", //显示角色权限选项数据
      },
      defaultkeys: [], //角色选中默认--数组
      rules: {
        rolename: [
          { required: true, message: "请输入角色名称", trigger: "blur" },
          { min: 1, max: 20, message: "角色名称长度不符合", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      //提交
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //   验证规则都满足时，会执行这里
          //    不管是添加还是修改都在这里操作
          // json序列化，防止数据变化，上面的数据跟着变化
          let data = JSON.parse(JSON.stringify(this.info));
          //    默认url为添加
          let url = this.$api.roleaddUrl;
          //    如果能获取到id ，url的值变为修改
          if (this.$route.params.id) {
            url = this.$api.roleeditUrl;
            data.id = Number(this.$route.params.id);
          }
          data.status = data.status ? 1 : 2;
          //   this.$refs.tree.getCheckedKeys()  获取选中的tree的值  得到的是数组
          // 数据库中存储的是字符串
          data.menus = this.$refs.tree.getCheckedKeys()
            ? this.$refs.tree.getCheckedKeys().join(",")
            : "";
          //   console.log(this.$refs.tree.getCheckedKeys(),1)
          // console.log(data,"data")
          // 发送请求
          this.$axios.post(url, data).then((res) => {
            if (res.data.code == 200) {
              this.$router.push("/role");
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
    this.menus = this.getmenulist; //获取角色权限的所有列表项
    // 页面刷新  需要数据
    let roleid = this.$route.params.id;
    if (roleid) {
      this.tip = "修改";
      // 根据id获取id对应的该条数据 赋值给info
      this.$axios
        .get(this.$api.roleinfoUrl, {
          params: {
            id: roleid,
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

          // // 给选中的tree赋值
          this.defaultkeys = this.info.menus ? this.info.menus.split(",") : [];
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
