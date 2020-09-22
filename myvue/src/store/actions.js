import $axios from '../http'
import $api from '../http/api'
export default {
  //菜单管理
  menuAsyncAdd(context) { //通过异步请求菜单列表
    return new Promise((resolve, reject) => {
      //  promise中异步获取菜单列表内容
      $axios.get($api.menulistUrl, {
          params: {
            istree: 1
          }
        })
        .then(res => {
          console.log(res.data.list);
          //  把获取到的数据存储到store中
          context.commit('setmenulist', res.data.list);
          //  异步请求成功把 结果返回出去
          resolve(res);
        })
    })
  },

  //角色管理
  roleAsyncAdd(context) { //通过异步请求角色列表
    return new Promise((resolve, reject) => {
      //  promise中异步获取菜单列表内容
      $axios.get($api.rolelistUrl)
        .then(res => {
          console.log(res.data.list)
          //  把获取到的数据存储到store中
          context.commit('setrolelist', res.data.list);
          //  异步请求成功把 结果返回出去
          resolve(res);
        })
    })
  },

  //用户信息
  userinfoAsyncAdd(context, data) {
    //异步请求用户信息
    return new Promise((resolve, reject) => {
      $axios.post($api.userloginUrl, data) //用户登录--发送请求--返回用户信息
        .then(res => {
          console.log(res, 'userinfores');
          context.commit('setuserinfo', res.data.list);
          resolve(res);

        })
    })
  },


  //商品分类
  cateAsyncAdd(context) { //通过异步请求商品分类列表
    return new Promise((resolve, reject) => {
      //  promise中异步获取菜单列表内容
      $axios.get($api.catelistUrl, {
          params: {
            istree: 1
          },
        })
        .then(res => {
          console.log(res.data.list)
          //  把获取到的数据存储到store中
          context.commit('setcatelist', res.data.list);
          //  异步请求成功把 结果返回出去
          resolve(res);
        })
    })
  },

  //商品规格
  specsAsyncAdd(context, data) { //通过异步请求商品规格列表信息
    return new Promise((resolve, reject) => {
      //  promise中异步获取菜单列表内容
      $axios.get($api.specslistUrl, data)
        .then(res => {
          console.log(res.data.list)
          //  把获取到的数据存储到store中
          context.commit('setspecslist', res.data.list);
          //  异步请求成功把 结果返回出去
          resolve(res);
        })
    })
  },



  //商品管理
  goodsAsyncAdd(context) { //通过异步请求商品列表信息
    return new Promise((resolve, reject) => {
      //  promise中异步获取菜单列表内容
      $axios.get($api.goodslistUrl)
        .then(res => {
          console.log(res.data.list)
          //  把获取到的数据存储到store中
          context.commit('setgoodslist', res.data.list);
          //  异步请求成功把 结果返回出去
          resolve(res);
        })
    })
  },

  //会员管理
  memberAsyncAdd(context) { //通过异步请求--会员列表信息
    return new Promise((resolve, reject) => {
      //  promise中异步获取菜单列表内容
      $axios.get($api.memberlistUrl)
        .then(res => {
          console.log(res.data.list)
          //  把获取到的数据存储到store中
          context.commit('setmemberlist', res.data.list);
          //  异步请求成功把 结果返回出去
          resolve(res);
        })
    })
  },

  //轮播图管理
  bannerAsyncAdd(context) { //通过异步请求--banner列表信息
    return new Promise((resolve, reject) => {
      //  promise中异步获取菜单列表内容
      $axios.get($api.bannerlistUrl)
        .then(res => {
          console.log(res.data.list)
          //  把获取到的数据存储到store中
          context.commit('setbannerlist', res.data.list);
          //  异步请求成功把 结果返回出去
          resolve(res);
        })
    })
  },




  //-限时秒杀
  seckillAsyncAdd(context) { //通过异步请求--限时秒杀列表信息
    return new Promise((resolve, reject) => {
      //  promise中异步获取菜单列表内容
      $axios.get($api.seckilllistUrl)
        .then(res => {
          console.log(res.data.list, '限时秒杀')
          //  把获取到的数据存储到store中
          context.commit('setseckilllist', res.data.list);
          //  异步请求成功把 结果返回出去
          resolve(res);
        })
    })
  },


  loginOutAsync(context) {
    context.commit('loginout');
    sessionStorage.removeItem('token');
  }
}
