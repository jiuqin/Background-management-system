// mutations

export default {
  setmenulist(state, data) { //添加菜单列表
    state.menulist = data;
  },
  setrolelist(state, data) { //添加角色列表
    state.roles = data;
  },



  setuserinfo(state, data) {
    state.userinfo = data; //mutation--用来更改store中的数据
  },


  setcatelist(state, data) {
    state.catelist = data; //商品分类列表信息存储
  },

  setspecslist(state, data) {
    state.specslist = data; //商品规格列表信息存储
  },


  setgoodslist(state, data) {
    state.goodslist = data; //商品规格列表信息存储
  },

  setmemberlist(state, data) {
    state.memberlist = data; //会员列表信息存储
  },


  setbannerlist(state, data) {
    state.bannerlist = data; //banner列表信息存储
  },


  setseckilllist(state, data) {
    state.seckilllist = data; //限时活动秒杀列表
  },


  loginout(state) {
    state.userinfo = null; //退出--要清除用户信息
  }




}
