-理论支持
 spa 单页应用开发 nav 导航不动
 footer 也不动 中间body是切换的， 页面不需要刷新的
 传统web 开发中，空白（新的web请求）页(get)
 白一下 加载一下 这个体验很糟糕
 对应路由， 把响应组件切换出来，像app一样

-jquery on 事件api
$(docunment).on(event_type, child_nodes, fn)
-没有前端路由(组件)，但是可以通过后端路由(restful, mvc router) / xxx.html

-前端路由两种做法， hastag #
 history.pushState api url path 部分改变
 但是没有刷新页面
 state 这次跳转url对应的状态数据
 title,  url
 