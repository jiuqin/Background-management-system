<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <p>
      <el-button type="primary" @click="tzadd()">添加</el-button>
    </p>
    <!-- 表格 -->
    <el-table
      :data="users"
      style="width: 100%; margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="用户编号" sortable width="180">
      </el-table-column>
      <el-table-column prop="username" label="用户名" sortable width="180">
      </el-table-column>
      <el-table-column prop="roleid" label="所属角色" sortable width="180">
      </el-table-column>

      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <el-tag effect="dark" v-if="item.row.status == 1">启用</el-tag>
          <el-tag effect="dark" v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="item">
          <el-button type="primary" @click="edit(item.row.uid)">编辑</el-button>
          <el-button type="danger" @click="del(item.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 --><!-- current-change当前页数改变会被触发 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="size"
      @current-change="pagechange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios"; //导入axios--使用axios.all方法

export default {
  data() {
    return {
      users: [],
      size: 3, //每页显示数据条数
      nowpage: 1, //当前是第几页
      total: 0, //总页数
    };
  },
  methods: {
    ...mapActions(["userinfoAsyncAdd"]),
    tzadd() {
      //添加按钮 跳转到添加页面
      this.$router.push("/user/add");
    },
    edit(uid) {
      //编辑
      this.$router.push("/user/" + uid);
    },
    del(uid) {
      // 1出现提示信息
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios.post(this.$api.userdeletUrl, { uid }).then((res) => {
            if (res.data.code == 200) {
              this.users = res.data.list; //更新页面上的数据
              this.$message({
                type: "success",
                message: "删除成功!",
              });
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // current-change当前页数改变会被触发
    pagechange(n) {
      console.log(n); //当前点击的页数---再显示对应页数的数据
      this.nowpage = n;
      // //刷新页面--获取管理员列表信息
      // this.$axios.get(this.$api.usercountUrl).then((res) => {
      //   this.total = res.data.list[0].total;
      // });
      // this.$axios
      //   .get(this.$api.userlistUrl, {
      //     params: {
      //       size: this.size,
      //       page: this.nowpage,
      //     },
      //   })
      //   .then((res) => {
      //     console.log(res.data.list);
      //     this.users = res.data.list;
      //   });
      this.getusers().then((res) => {
        if (res.data.code == 200) {
          this.users = res.data.list;
        } else {
          this.$message({
            type: "error",
            message: res.data.msg,
          });
        }
      });
    },

    //页面刷新--渲染数据--多次使用---封装成函数调用
    getusers() {
      //刷新页面--获取管理员列表信息--return--得到promise对象
      return this.$axios.get(this.$api.userlistUrl, {
        params: {
          size: this.size,
          page: this.nowpage,
        },
      });
    },
    //获取页面总数
    getusercount() {
      // return this.$axios.get(this.$api.usercountUrl);
      return this.$axios.get(this.$api.usercountUrl);
    },
  },

  mounted() {
    //有两个请求--获取总页数+管理员列表信息----发送多个请求---axios.all（）方法

    //①-获取页面总数
    // this.$axios.get(this.$api.usercountUrl).then((res) => {
    //   this.total = res.data.list[0].total;
    // });

    //②-刷新页面--获取管理员列表信息
    // this.$axios
    //   .get(this.$api.userlistUrl, {
    //     params: {
    //       size: this.size,
    //       page: this.nowpage,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res.data.list[0]);
    //     this.users = res.data.list;
    //   });
    axios.all([this.getusers(), this.getusercount()]).then(
      axios.spread((users, usercount) => {
        this.users = users.data.list;
        this.total = usercount.data.list[0].total;
      })
    );
  },
  
};
</script>
