import Vue from 'vue'
import Vuex from 'vuex'
// 启用应用状态管理

Vue.use(Vuex);

const store = {
  count: 0
}
// 中央，state要改，actions是交给你调用的，
// increment 不能直接修改state.count, state.count++ mutation
// 只有actions 才可以触发mutation改变，只有mutations才可以修改state
const mutations = {
  increment (state) {
    state.count++;
  }
}
const actions = {
  increment: ({ commit }) => commit('increment')
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
