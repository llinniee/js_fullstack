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
  在服务器上：http://localhost:9090/ 访问图片的时候发了一个请求
  处理static的资源，隐射为请求路径
  /static/1.png 返回1.png
  /static/2.png 返回2.png
  (koa-static)
  业内有很多成熟的静态资源服务器： Nginx