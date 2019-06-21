import api from '../../api'
import * as types from '../types'

const state = {
  showSlidebar: false 
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSlidebar = status
  }
}

const actions = {
  setShowSlidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

const getters = {
  showSlidebar: state => state.showSlidebar
}

export default {
  state,
  mutations,
  getters,
  actions
}