## redux 数据流
全局 
action 一个纯对象{}
reducer 纯函数 函数的返回值决定了store里面的值
 只依赖于入参(state, action),而且要返回一份新的数据， 不能在原来的数据上修改
 
dispatch dispatch(action) 修改数据
store 状态的集合
