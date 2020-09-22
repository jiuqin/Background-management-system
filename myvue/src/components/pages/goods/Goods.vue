<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <p>
      <el-button type="primary" @click="tzadd()">添加</el-button>
    </p>
    <!-- 表格 -->
    <el-table 
      :data="goodslist"
      style="width: 100%; margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column  prop="id" label="商品编号" sortable width="130" style=" text-align: center;">
      </el-table-column>
      <el-table-column prop="goodsname" label="商品名称" sortable width="170">
      </el-table-column>
       <el-table-column prop="price" label="商品价格" sortable width="170" style=" text-align: center;">
      </el-table-column>
      <el-table-column prop="market_price" label="市场价格" sortable width="170">
      </el-table-column>
      <el-table-column prop="img" label="图片"  width="170">
        <template slot-scope="item">
                <img :src="$api.baseUrl+item.row.img" style="width:90px;heigth:100px">
        </template>
      </el-table-column>

      <el-table-column prop="status" label="状态"  width="170">
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
      goodslist: [],
      size: 2, //每页显示数据条数
      nowpage: 1, //当前是第几页
      total: 0, //总页数
    };
  },
  methods: {
    ...mapActions(["goodsAsyncAdd"]),
    tzadd() {
      //添加按钮 跳转到添加页面
      this.$router.push("/goods/add");
    },
    edit(id) {
      //编辑
      this.$router.push("/goods/" + id);
    },
    del(id) {
      // 1出现提示信息
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$axios.post(this.$api.goodsdeleteUrl, { id }).then((res) => {
            if (res.data.code == 200) {
              this.goodslist = res.data.list;//更新页面上的数据
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
    //页面刷新--渲染数据--多次使用---封装成函数调用
    getgoodslist() {
      //刷新页面--获取管理员列表信息--return--得到promise对象
      return this.$axios.get(this.$api.goodslistUrl, {
        params: {
          size: this.size,
          page: this.nowpage,
        },
      });
    },
    //获取页面总数
    getusercount() {
      return this.$axios.get(this.$api.goodscountUrl);
    },
     // current-change当前页数改变会被触发
     pagechange(n) {
      console.log(n); //当前点击的页数---再显示对应页数的数据
      this.nowpage = n;
      this.getgoodslist().then((res) => {
        if (res.data.code == 200) {
          this.goodslist = res.data.list;
        } else {
          this.$message({
            type: "error",
            message: res.data.msg,
          });
        }
      });
    },
  },
  created() {
    // 返回promise实例   数据库中商品管理goods列表结果返回到这里
    this.goodsAsyncAdd().then((res) => {
      console.log(res.data.list, "123");
      this.goodslist = res.data.list;
    });


  },
  mounted() {
    //有两个请求--获取总页数+管理员列表信息----发送多个请求---axios.all（）方法
    axios.all([this.getgoodslist(), this.getusercount()]).then(
      axios.spread((goodslist,goodscount) => {
        this.goodslist = goodslist.data.list;
        this.total =goodscount.data.list[0].total;
      })
    );
  },
  
};
</script>
<style></style>
el-table-column
{
  text-align: center;
}
</style>
