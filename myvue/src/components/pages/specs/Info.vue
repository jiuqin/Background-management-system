<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator=">">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>
        <a href="/specs">商品规格列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>商品规格{{ tip }}</el-breadcrumb-item>
    </el-breadcrumb>
    <p></p>
    <!-- 商品规格添加 -->
    <el-form
      :model="info"
      :rules="rules"
      ref="info"
      label-width="100px"
      class="demo-info"
    >
      <el-form-item label="规格名称" prop="specsname">
        <el-input v-model="info.specsname" class="resetW"></el-input>
      </el-form-item>

      <!-- 新增域名 -->
      <el-form-item
        v-for="(domain, index) in specsAttrs"
        :label="'规格属性'"
        :key="domain.key"
      >
        <el-input v-model="domain.value" class="resetW"></el-input>
        <el-button @click="addDomain" v-if="index == 0" type="primary"
          >新增域名</el-button
        ><el-button @click.prevent="removeDomain(domain)" v-else type="danger"
          >删除</el-button
        >
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
      specsAttrs: [{ value: "" }],
      info: {
        specsname: "",
        attrs: "",
        status: false,
      },
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
      },
      rules: {
        specsname: [
          { required: true, message: "请输入菜单名称", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          // json序列化，防止数据变化，上面的数据跟着变化
          //深拷贝this.info
          let data = JSON.parse(JSON.stringify(this.info));
          //specsAttrs:[{value:''},{},{}]---遍历数组，将每个value值单独拿出来存到一个新数组
          let url = this.$api.specsaddUrl; //默认先设为添加的Url
          if (this.$route.params.id) {
            //若有动态id则为编辑
            url = this.$api.specseditUrl;
            data.id = this.$route.params.id; //执行修改接口时的必要条件
          }
          //数据库中的status字段不是布尔值，所以要自行转换一下
          data.status = data.status ? 1 : 2;
          let arr = [];
          this.specsAttrs.forEach((item) => {
            arr.push(item.value); //arr存储商品属性
          });
          data.attrs = arr ? arr.join(",") : ""; //将数组的值--连接成字符串

          //发起post请求，请求接口项目中的菜单添加接口，完成数据的保存
          //提交--商品规格添加
          this.$axios.post(url, data).then((res) => {
            console.log(res.data);
            if (res.data.code == 200) {
              this.$router.push("/specs");
            } else {
              this.$message.error(res.data.msg);
            }
            console.log(data, "提交");
          });
        }
      });
    },
    removeDomain(item) {
      var index = this.specsAttrs.indexOf(item);
      if (index !== -1) {
        this.info.domains.splice(index, 1);
      }
    },
    addDomain() {
      if (this.specsAttrs.length <= 5) {
        //新增域名不能超过5个
        this.specsAttrs.push({
          value: "",
          key: Date.now(),
        });
      }
    },
  },
  created() {
    // 页面刷新  需要数据
    let specsid = this.$route.params.id;
    if (specsid) {
      this.tip = "修改";
      // 根据id获取id对应的该条数据 赋值给info
      this.$axios
        .get(this.$api.specsinfoUrl, {
          params: {
            id: specsid,
          },
        })
        .then((res) => {
         //处理和数据库中不一样的数据类型
          this.info.status = this.info.status == 1 ? true : false;
          this.info = res.data.list[0];
          //获取商品属性attrs:['白色','黑色']
          this.info.attrs.map((item, index) => {
            if (index == 0) {
              this.specsAttrs[0].value = item; //让第一个属性固定
            } else {
              this.specsAttrs.push({ value: item }); //再显示剩余的属性值
            }
          });

        
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
