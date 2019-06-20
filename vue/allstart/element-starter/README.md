大前端全栈开发思路
在前端目录下，建一个server用来做mvc就好了

- 前后端分离
 后端负责提供api，在server目录下
 前端src/
后端就负责 API 服务

- 后端在3000端口， 未来等着ngnix 80 -> 3000
  /api API服务，等着前端调用   / vue打包好的dist 目录 index.html readFile返回
  前端一般在8080端口 负责vue-router vuex axios \
  前后端的合作需求就是api数据变成vue组件的data

  
- 跨域问题  前端面试的嘴重要的问题
  domain 域名
  端口 cross domain
  前端不允许 安全问题
  前端考虑，页面上显示的东西要安全
  后端要考虑 

- 在前端
  book.douban.com 
  www.douban.com  
  subdomain:domain:port 都一样
  js同源机制，相同的源是值得信赖的，
  前后端分离里面，一个在8080 一个在3000 这就跨域了
  先不跨域 fetch('api/user/login') 404
  3000端口的api提供一个proxy代理
  规则是匹配api
   target: http://localhost:3000/api,
   changeOrigin: ture
   发出去的请求也不跨域
