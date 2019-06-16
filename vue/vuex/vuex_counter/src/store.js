import vue from 'vue';
import vuex from 'vuex';

Vuex.use(Vuex);
// CEO
const state = {
  count: 0
}
// 相当于组件里的computed
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even':'odd'
}

// 改变 唯一修改状态
// 财务 
const mutation = {
  increment (state) {
    state.count++;
  },
  decrement (state) {
    state.count--;
  }
}

// 动作 部门 不能修改state
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }
  },
  incrementAsync () {
    // action axios 异步取数据
    setTimeout(() => {
      commit('increment');
      resolve();
    },2000)
  }
}

export default new Vuex.Store({
  state,
  mutation,
  actions,
  getters
})