import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
export default function configStore () {
  // cresteStore返回实例 单一状态树
  // vuex分为四部分
  // redux state reduce（函数，返回状态） 概念
  // action 返回新的状态 没有mutations
  const store = cresteStore(rootReducer)
  return store
}
