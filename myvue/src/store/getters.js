export default {
  getmenulist: (state) => state.menulist,//获取菜单列表信息
  getrolelist: (state) => state.roles,//获取角色列表信息

  getuserinfo: (state) => state.userinfo,//getter--用于取store中的值

  getcatelist: (state) => state.catelist, //获取商品分类列表信息

  getspecslist: (state) => state.specslist,//获取商品规格列表信息

}
