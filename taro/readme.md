- 小程序为什么要框架
 原生写小程序 有组件化， 但是 语法好怪， vue, react 开发者学习成本高
 taro react mpvue 让开发者不用学小程序就可以写了
 命令行工具，可以安装一堆的npm 包，极大的扩展了小程序的功能
 complie src -> dist/

- JSX
  XML in JS , react tamplate 的新的语法
  JSX -> babel -> preset react ->js
  render() {
    return (

    )
  }

  react没有v-for v-if 指令
  原生写
  <view>
  {
    this.data.list.map((index, item) => {
      return (
        ...
      )
    })
  }
  </view>

