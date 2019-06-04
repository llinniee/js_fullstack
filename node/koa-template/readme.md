# koa 中间件 middleWare
app.use(middleWare)
next 下一个中间件
每一次 use 都会注册一个中间件
(middleWare1,，middleWare2)
1. async 函数
2. 洋葱模型： 一层层往里面执行，最后一个中间件执行完了，一层往外冒泡执行剩余的代码
3. 解耦：每一个中间价负责一间事

以X开头的：自定义响应头 
##koa 第三方中间件
koa ctx 就是req res 组成的对象
接着扩展ctx，接着往ctx上面塞东西

#
package.json 项目描述
依赖 npm install 下来的文件
-s 往dependencies 里面放东西

npm i  生成一个node_modules的目录
koa 压缩 -> 20 500m
不把node_modules放在压缩目录里面 5m ->
npm i 从json文件里面读取依赖安装
-s 

