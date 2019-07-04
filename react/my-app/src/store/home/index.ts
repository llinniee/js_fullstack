import { State } from '@/store/interface'
import { Commit } from 'vuex'
import { getMovieList } from '@/api/movie'  

const getters = {

}

const state: State = {
  movieList: [
    {
      name: '张国荣',
      title: '霸王别姬',
      id: '1'
    }
  ]
}

const mutations = {

}

const actions = {
  //跟api的交流  前后端的分离点
  //commit mutations
  async movieList(context: {commit: Commit}, cate: string) {
    const res = await getMovieList(cate).then((response) => response)
    return res;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}