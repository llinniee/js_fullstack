el: #root 根挂载节点
app  component + vue + vue-router 混合而一起的应用

new Vue({
  el:'#app',
  render: h => h(app)
})

-vue的难点是数据管理
组件状态，data() {},
两兄弟组件要共享状态时，props 传递过去