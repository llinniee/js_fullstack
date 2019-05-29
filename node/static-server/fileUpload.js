const http = require('http');

http.createServer((req, res) => {
  console.log(req.url);
  if(req.url === '/upload' && req.method.toLowerCase() == 'post') {
    //上传文件的请求
    
  }
  // 让浏览器知道这是一段html
  res.writeHead(200, {
    'Content-Type': 'text/html'
  })
  res.end(
    `
    <form action="/upload" enctype="multipart/form-data" method="POST">
      <input type="file" name="upload">
      <input type="submit" value="upload">
    </form>
    `
  )
}).listen(8080, () => {
  console.log('server is running 8080')
})