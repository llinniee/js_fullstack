import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getter from './getters'

Vue.use(Vuex);

// 当进入/ 如果没有token 就去登录 ？

const store = new Vuex.Store({
  getters,
  modules: {
    user
  }
})

export default store