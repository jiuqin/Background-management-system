<template>
  <el-container>
    <el-aside width="152px">
      <Asideel></Asideel>
    </el-aside>
    <el-container>
      <el-header>
        <!-- 下拉--退出 -->
        <div class="dropdown">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <span v-if="getuserinfo">{{ getuserinfo.username }}</span>
              <i class="el-icon-arrow-down el-icon-setting"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="loginout"
                ><div>退出</div></el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Asideel from "./view/Asideel";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Asideel,
  },
  computed: {
    ...mapGetters(["getuserinfo"]),
  },
  methods: {
    ...mapActions(["loginOutAsync"]),
    handleCommand(command) {
      this.loginOutAsync(); //调用异步方法
      this.$router.push("/login");
    },
    loginout() {
      //清空session、token、vuex中数据信息
      // this.loginOutAsync(); //调用异步方法
      // this.$router.push("/login");
    },
  },
};
</script>

<style>
/* 下拉--退出样式 */
.dropdown {
  width: 200px;
  height: 200px;
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #333;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-icon-setting {
  font-size: 16px;
  padding: 0 5px;
}
</style>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #444;
  color: white;
}

.el-main {
  background-color: white;
  color: #333;
  /* line-height: 160px; */
  line-height: 30px;
}

body > .app > .el-container {
  height: 100%;
}
</style>
