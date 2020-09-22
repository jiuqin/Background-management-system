<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/seckill' }"
        >活动列表</el-breadcrumb-item
      >
      <el-breadcrumb-item>活动{{ tip }}</el-breadcrumb-item>
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
      <el-form-item label="活动名称" prop="title">
        <el-input v-model="info.title" class="resetW"></el-input>
      </el-form-item>

      <el-form-item label="活动期限">
        <div class="block">
          <el-date-picker
            v-model="dataval"
            value-format="timestamp"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="timechange"
          >
          </el-date-picker>
        </div>
      </el-form-item>

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
          @change="goodschange"
        >
          <el-option
            v-for="item in secondarr"
            :key="item.id"
            :label="item.catename"
            :value="item.id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品">
        <el-select v-model="info.goodsid" placeholder="请选择">
          <el-option
            v-for="(item, index) in goodsnamearr"
            :key="index"
            :label="item.goodsname"
            :value="item.id"
          ></el-option>
        </el-select>
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
import E from "wangeditor"; //导入富文本
export default {
  data() {
    return {
      dataval: [], //默认日期时间
      tip: "添加",
      firstarr: [],
      secondarr: [],
      specsarr: [], //商品规格
      specsattrarr: [], //规格属性
      goodsnamearr: [],
      info: {
        begintime: "",
        endtime: "",
        first_cateid: "",
        second_cateid: "",
        title: "", //活动名称
        goodsid: "",
        status: false,
      },
      rules: {
        first_cateid: [
          { required: true, message: "请选择一级分类", trigger: "change" },
        ],
        title: [
          { required: true, message: "请输入活动名称", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    //时间改变触发--获取时间
    timechange(e) {
      //  console.log(e);获取到开始-结束的时间戳
      this.info.begintime = e[0];
      this.info.endtime = e[1];
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
          console.log(this.info, "info");

          // 验证规则都满足时，会执行这里
          //不管是添加还是修改都在这里操作
          // json序列化，防止数据变化，上面的数据跟着变化
          let data = JSON.parse(JSON.stringify(this.info));

          //默认为添加页面
          let url = this.$api.seckilladdUrl;
          if (this.$route.params.id) {
            url = this.$api.seckilleditUrl;
            data.id = Number(this.$route.params.id);
          }
          data.status = data.status ? 1 : 2;
          console.log(data, "设置id的data");

          //发送请求
          this.$axios.post(url, data).then((res) => {
            console.log(res, "发送请求的res");
            if (res.data.code == 200) {
              this.$router.push("/seckill");
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
          console.log(res.data.list, "切换一级分类下拉信息");
          this.secondarr = res.data.list;
        });
    },
     goodschange(val) {
       this.goodsnamearr=[];
      console.log(val);
      //获取一级分类商品内容
      this.$axios
        .get(this.$api.goodslistUrl)
        .then((res) => {
          console.log(res.data.list, "切换二级级分类下拉信息");
          res.data.list.forEach(item=>{
            if(val==item.second_cateid){//看数据库中的字段名关联
                this.goodsnamearr.push(item);
                console.log(this.goodsnamearr,'goodnamearr');
            }
            
          })
          
        });
    },
  },
  created() {
    //获取一级下拉商品内容
    this.$axios
      .get(this.$api.catelistUrl, {
        params: {
          pid: 0, //0为一级分类
        },
      })
      .then((res) => {
        console.log(res.data.list, "获取一级商品分类下拉内容");
        this.firstarr = res.data.list;
      });

    // 页面刷新  需要数据--若有动态路由则是为--编辑页面
    let seckillid = this.$route.params.id;
    if (seckillid) {
      this.tip = "修改";
      // 根据id获取id对应的该条数据 赋值给info
      this.$axios
        .get(this.$api.seckillinfoUrl, {
          params: {
            id: seckillid,
          },
        })
        .then((res) => {
          console.log(res.data.list, "限时秒杀");
          this.info = res.data.list;

          this.dataval = [this.info.begintime, this.info.endtime]; //时间戳--将数据库中日期时间显示出来
          this.catechange(this.info.first_cateid); //将一级分类传入--让二级分类的内容显示
          this.goodschange(this.info.second_cateid);

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
