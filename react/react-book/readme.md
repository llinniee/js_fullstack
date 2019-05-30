- DOM 之后MVVM兴起
MVVM 封装了DOM 让其更高效
- 组件开发
  分为多个组件， 拼接组件
  是一个类
  只要实例化一下就可以用了 可以复用
- 组件是一颗种子， 里面有很多东西的
  template  是render
  css 
  js isLikeed
- React 和vue 都是MVVM的一种实现
  React用来做后台界面 Vue 用户界面
  挂载点 界面和组件的关系， 界面《组件《 -html DOM被封装进去了 组件类
  constructor this.state 数据部分
  模板部分 render
  setData setState({})

- 模板里数据的细化
  es6的字符串模板 每次编译 setDate之后就去执行this.render()
  状态和模板结合的地方在模板的编译里面插入数据
  setState驱动模板重新编译一下，数据驱动
  