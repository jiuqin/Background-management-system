<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/goods' }">商品列表</el-breadcrumb-item>
      <el-breadcrumb-item>商品{{ tip }}</el-breadcrumb-item>
    </el-breadcrumb>
    <p></p>
    <!-- 商品添加 -->
    <el-form
      :model="info"
      :rules="rules"
      ref="info"
      label-width="100px"
      class="demo-info"
    >
      <el-form-item label="一级分类" prop="first_cateid">
        <el-select
          v-model="info.first_cateid"
          placeholder="请选择"
          @change="catechange"
        >
          <el-option
            v-for="item in firstarr"
            :key="item.id"
            :label="item.catename"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="二级分类">
        <el-select
          v-model="info.second_cateid"
          placeholder="请选择"
          @change="specschange"
        >
          <el-option
            v-for="item in secondarr"
            :key="item.id"
            :label="item.catename"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品名称" prop="goodsname">
        <el-input v-model="info.goodsname" class="resetW"></el-input>
      </el-form-item>

      <el-form-item label="价格">
        <el-input v-model="info.price" class="resetW"></el-input>
      </el-form-item>
      <el-form-item label="市场价格">
        <el-input v-model="info.market_price" class="resetW"></el-input>
      </el-form-item>

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

      <!-- 商品规格 -->
      <el-form-item label="商品规格" prop="first_cateid">
        <el-select
          v-model="info.specsid"
          placeholder="请选择"
          @change="specschange"
        >
          <el-option
            v-for="item in specsarr"
            :key="item.id"
            :label="item.specsname"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="规格属性">
        <el-select v-model="info.specsattr" placeholder="请选择" multiple>
          <el-option
            v-for="(item, index) in specsattrarr"
            :key="index"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <!-- 是否新品--是否热卖 -->
      <el-form-item label="是否新品">
        <el-radio-group v-model="info.isnew">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="是否热卖">
        <el-radio-group v-model="info.ishot">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="2">否</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="状态" prop="status">
        <el-switch v-model="info.status"></el-switch>
      </el-form-item>

      <!-- 富文本 -->
      <el-form-item label="商品描述">
        <div id="desc"></div>
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
import E from "wangeditor"; //导入富文本
export default {
  data() {
    return {
      editor: null, //富文本
      tip: "添加",
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [], //关于图片--放图片数组
      img: "",
      firstarr: [],
      secondarr: [],
      specsarr: [], //商品规格
      specsattrarr: [], //规格属性
      info: {
        first_cateid: "",
        second_cateid: "",
        specsid: "", //商品规格
        specsattr: [], //属性为数组
        goodsname: "",
        price: "",
        market_price: "",
        isnew: true,
        ishot: true,
        status: false,
      },
      rules: {
        first_cateid: [
          { required: true, message: "请选择一级分类", trigger: "change" },
        ],
        goodsname: [
          { required: true, message: "请输入商品名称", trigger: "change" },
        ],
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
          this.info.description = this.editor.txt.html();
          // 验证规则都满足时，会执行这里
          //不管是添加还是修改都在这里操作
          // json序列化，防止数据变化，上面的数据跟着变化
          let data = JSON.parse(JSON.stringify(this.info));
          // data.description = this.editor.txt.html();
          //默认为添加页面
          let url = this.$api.goodsaddUrl;
          if (this.$route.params.id) {
            url = this.$api.goodseditUrl;
            data.id = Number(this.$route.params.id);
          }
          data.status = data.status ? 1 : 2;
          console.log(data, "设置id的data");
          data.specsattr = data.specsattr ? data.specsattr.join(",") : ""; //属性显示的是数组--但存入数据库是字符串类型
          console.log(data, "2222设置id的data");

          //获取图片
          let form = new FormData();
          for (let i in data) {
            form.append(i, data[i]); //把data中对象传给form
          }
          if (this.img) {
            form.append("img", this.img);
          }

          // //发送请求
          this.$axios.post(url, form).then((res) => {
            console.log(res, "发送请求的res");
            if (res.data.code == 200) {
              this.$router.push("/goods");
            } else {
              this.$message.error(res.data.msg);
            }
          });
        }
      });
    },
    //一级分类的内容改变id--再获取显示二级分类pid对应的内容
    //val--是下拉列表的value值--数据库中存的是id--所以:value:item.id
    catechange(val) {
      console.log(val);
      //获取一级分类商品内容
      this.$axios
        .get(this.$api.catelistUrl, {
          params: {
            pid: val,
          },
        })
        .then((res) => {
          console.log(res);
          this.secondarr = res.data.list;
        });
    },
    //根据一级分类的id--获取二级分类的内容
    specschange(val) {
      // this.info.specsattr = []; //将绑定的v-model='specsattr'属性清空，防止添加了颜色属性再添加尺寸属性颜色属性还在
      if (val == "") {
        return false;
      }
      //获取一级分类商品内容
      this.$axios
        .get(this.$api.specsinfoUrl, {
          params: {
            id: val,
          },
        })
        .then((res) => {
          if (res.data.code == 200) {
            // this.info.specsattr=[];
            // console.log(res.data.list[0].attrs, "获取商品属性");
            this.specsattrarr = res.data.list[0].attrs;
          }
        });
    },
  },
  computed: {
    ...mapGetters(["getmenulist"]),
  },
  created() {
    //获取一级分类商品内容
    this.$axios
      .get(this.$api.catelistUrl, {
        params: {
          pid: 0,
        },
      })
      .then((res) => {
        console.log(res);
        this.firstarr = res.data.list;
      });
    //获取一级商品规格内容
    this.$axios.get(this.$api.specslistUrl).then((res) => {
      console.log(res.data.list, "yanse");
      this.specsarr = res.data.list; //---根据规格去找对应的属性
    });

    // 页面刷新  需要数据--若有动态路由则是为--编辑页面
    let goodsid = this.$route.params.id;
    if (goodsid) {
      this.tip = "修改";
      // 根据id获取id对应的该条数据 赋值给info
      this.$axios
        .get(this.$api.goodsinfoUrl, {
          params: {
            id: goodsid,
          },
        })
        .then((res) => {
          console.log(res.data.list);
          this.info = res.data.list;
          this.catechange(this.info.first_cateid); //将一级分类传入--让二级分类的内容显示
          this.specschange(this.info.specsid); //--将商品规格id传入--显示对应规格属性

          console.log(this.info.specsattr, "specsattr"); //属性值为字符串
          this.info.specsattr = this.info.specsattr
            ? this.info.specsattr.split(",")
            : [];

          //把img--字符串转成filelist--数组格式
          console.log(this.info.img, "imginfo");
          this.fileList = this.info.img
            ? [{ url: this.$api.baseUrl + this.info.img }]
            : [];

          //给富文本--添加内容--显示出来
          this.editor.txt.html(this.info.description);
          // 修改status的值为true或者false
          this.info.status = this.info.status == 1 ? true : false;
        });
    }
  },
  //富文本
  mounted() {
    this.editor = new E("#desc");
    this.editor.create();
  },
};
</script>

<style>
.resetW {
  width: 60%;
}
</style>
