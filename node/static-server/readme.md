 ## static 
  koa-static
  为什么要配置
  静态资源： 图片 html css js
  不会随着服务器的运行改变内容
  assets 资源

## path
  path.join 将路径的各个部分拼接起来

## formidable
  fields 非type= file 最后提交的内容都会到fields
  files type = file

## 静态资源服务
  双击打开： file:// XXX 本地文件的读取
  在服务器上：http://localhost:9090/ 
  <!-- 访问图片的时候发了一个请求 -->
  html 里面的 引入的图片 js css 都会发出一个请求。 这些都是静态资源，所以 url和本地服务器磁盘一一对应。
  1. 有index.html 的时候，会自动打开 访问根目录的时候，自己加上index.html
  2. 没有的话 列出说有文件文件夹 fs.readDir()
  3. 用koa static的作用就是在HTML里面正确引用你资源指定目录下面的


  处理static的资源，隐射为请求路径
  /static/1.png 返回1.png
  /static/2.png 返回2.png
  (koa-static)
  业内有很多成熟的静态资源服务器： Nginx
