import Vue from 'vue'
//1: 导入vuex包
import Vuex from 'vuex'
Vue.use(Vuex)

// 引入每个模块
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
//cnpm install  vuex-persistedstate  --save
// 让vuex永久保存
import createPersistedstate from 'vuex-persistedstate'

// 2创建store对象
export default new Vuex.Store({
  //store数据源，提供唯一公共数据
  state,
  mutations,
  actions,
  getters,
  plugins:[createPersistedstate()]

})
