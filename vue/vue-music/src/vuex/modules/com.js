import api from '../../api'
import * as types from '../types'

const state = {
  showSlidebar: false,
  fullScreen: false
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSlidebar = status
  },
  [types.SET_FULL_SCREEN] (state, status) {
    state.fullScreen = status
  }
}

const actions = {
  setShowSlidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  selectPlaySong ({commit}, status) {
    // let palylist = state.palylist.slice()
    commit(types.SET_FULL_SCREEN, status)
  }
}

const getters = {
  showSlidebar: state => state.showSlidebar,
  fullScreen: state => state.fullScreen
}

export default {
  state,
  mutations,
  getters,
  actions
}