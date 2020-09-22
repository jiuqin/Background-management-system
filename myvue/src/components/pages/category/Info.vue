<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/category' }"
        >商品分类列表</el-breadcrumb-item
      >
      <el-breadcrumb-item>商品分类{{ tip }}</el-breadcrumb-item>
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
      <el-form-item label="上级菜单" prop="pid">
        <el-select v-model="info.pid" placeholder="请选择">
          <el-option
            v-for="item in getcatelist"
            :key="item.id"
            :label="item.catename"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="分类名称" prop="catename">
        <el-input v-model="info.catename" class="resetW"></el-input>
      </el-form-item>
      <!-- :on-preview点击文件列表中已上传的文件时的钩子
             on-remove	文件列表移除文件时的钩子
             auto-upload	是否在选取文件后立即进行上传
             on-change	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
             file-list	上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]
        -->
      <el-form-item label="图片">
        <el-upload
          action="#"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :auto-upload="false"
          :on-change="filechange"
          :file-list="fileList"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
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
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [], //关于图片--放图片数组
      img: "",
      tip: "添加",
      info: {
        catename: "",//商品分类名称
        pid: "",
        status: false,
      },
      cates: [],
      rules: {
        catename: [
          { required: true, message: "请输入分类名称", trigger: "blur" },
        ],
        pid: [{ required: true, message: "请选择上级菜单", trigger: "change" }],
      },
    };
  },
  methods: {
    handleRemove(file, fileList) {},
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    filechange(file) {
      console.log(file);
      this.img = file.raw; //把图片信息存于img
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log(this.info, "info");

          //   验证规则都满足时，会执行这里
          //    不管是添加还是修改都在这里操作
          // json序列化，防止数据变化，上面的数据跟着变化
          let data = JSON.parse(JSON.stringify(this.info));
          //如果现在访问的是动态路由，则执行修改操作，否则执行添加操作
          let url = this.$api.cateaddUrl;
          if (this.$route.params.id) {
            url = this.$api.cateeditUrl;
            data.id = Number(this.$route.params.id); //执行修改接口时的必要条件
          }
          //数据库中的status字段不是布尔值，所以要自行转换一下
          data.status = data.status ? 1 : 2;

          //获取图片
          let form = new FormData();
          for (let i in data) {
            form.append(i, data[i]); //把data中对象传给form
          }
          if (this.img) {
            form.append("img", this.img);
          }
          console.log(form,'h')
         console.log(data,'d')
          //发起post请求，请求接口项目中的菜单添加接口，完成数据的保存
          this.$axios.post(url, form).then((res) => {
            if (res.data.code == 200) {
              this.$router.push("/category");
            } else {
              this.$message.error(res.data.msg);
            }
            console.log(form,'form添加提交');
          });
        }
      });
    },
  },
  computed: {
    ...mapGetters(["getcatelist"]),
  },
  created() {
     // 页面刷新  需要数据
     this.$axios.get(this.$api.catelistUrl).then((res) => {
      // console.log(res,"123")
      this.cates = res.data.list;
    });
    // 页面刷新  需要数据
    let cateid = this.$route.params.id;
    if (cateid) {
      this.tip = "修改";
      // 根据id获取id对应的该条数据 赋值给info
      this.$axios
        .get(this.$api.cateinfoUrl, {
          params: {
            id: cateid,
          },
        })
        .then((res) => {
          console.log(res.data, "cateinfo");
          this.info = res.data.list;
          //把img--字符串转成filelist--数组格式
          console.log(this.info.img, "imginfo");
          this.fileList = this.info.img
            ? [{ url: this.$api.baseUrl + this.info.img }]
            : [];
          //处理和数据库中不一样的数据类型 修改status的值为true或者false
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
