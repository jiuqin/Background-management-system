<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    </el-breadcrumb>
    <p>
      <el-button type="primary" @click="tzadd()">添加</el-button>
    </p>
    <!-- 表格 -->
    <el-table
      :data="seckilllist"
      style="width: 100%; margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="title" label="活动名称" sortable width="180" style=" text-align: center;">
      </el-table-column>
     
      <el-table-column prop="status" label="状态">
        <template slot-scope="item">
          <el-tag effect="dark" v-if="item.row.status == 1">启用</el-tag>
          <el-tag effect="dark" v-else type="danger">禁用</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="操作">
        <template slot-scope="item">
          <el-button type="primary" @click="edit(item.row.id)">编辑</el-button>
          <el-button type="danger" @click="del(item.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      seckilllist: [],
    };
  },
  methods: {
    ...mapActions(["seckillAsyncAdd"]),
    tzadd() {
      //添加按钮 跳转到添加页面
      this.$router.push("/seckill/add");
    },
    edit(id) {
      //编辑
      this.$router.push("/seckill/" + id);
    },
    del(id) {
      // 1出现提示信息
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios.post(this.$api.seckilldeleteUrl, { id }).then((res) => {
            if (res.data.code == 200) {
              this.seckilllist = res.data.list;//更新页面上的数据
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
  },
  created() {
    // 返回promise实例   数据库中菜单列表结果返回到这里
    this.seckillAsyncAdd().then((res) => {
      this.seckilllist = res.data.list;
    });
  },
};
</script>
<style></style>
el-table-column
{
  text-align: center;
}
</style>
