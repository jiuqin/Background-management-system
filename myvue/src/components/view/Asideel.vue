<template>
  <el-row>
    <el-col>
      <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        router
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <!-- 一级导航 -->
        <el-submenu
          :index="item.id.toString()"
          v-for="item in getuserinfo.menus"
          :key="item.id"
        >
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.title }}</span>
          </template>

          <el-menu-item
            :index="val.url"
            v-for="val in item.children"
            :key="val.id"
          >
            {{ val.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      defaultActive: "",
    };
  },
  computed: {
    ...mapGetters(["getuserinfo"]),
  },
  created() {
    console.log(this.getuserinfo, "getuserinfo");
    //  页面加载时，控制左边菜单选中效果
    this.defaultActive = this.$route.meta.select;
  },
};
</script>
