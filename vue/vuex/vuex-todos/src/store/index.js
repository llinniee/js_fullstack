import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: JSON.parse(window.locatStorage.getItem('STORAGE_KEY') || '[]')
  },
  actions,
  
})