## 为什么要有cookie
无状态

## cookie 
本地存储
怎么来存储cookie
1. js     document.cookie 可读可写
2. 服务端 通过set-cookie 响应头设置 cookie

内容： 
name:
value:
path: cookie 在哪个路径上生效
/             /所有路径
/user         /user user以及user下面的
/user/abc     /user/abc   user以及user下面的
domain:

httpOnly： true/false 如果设置为true 就不能通过js 获取cookie的值
maxAge: 在几秒之后 cookie 被删除
  在koa: ms 在js: s
secure: 只会在http 协议下传输



 有作用范围
 domain + path
 在什么域名什么路径下面生效
 浏览器检查存储的cookie,把当前符合的cookie 发送给服务端
 而且：http 传输 报文的大小
 放在cookie 请求头里面发送



用途：
状态管理，t
用户个性化设置，f

# session 
会话
靠后台语言自己实现的
很多个用户 产生很多个session
userId 
sessionId 用户有一个绘画的时候就可以通过自己的sessionId 查询自己的状态
cookie: sessionId=id 

