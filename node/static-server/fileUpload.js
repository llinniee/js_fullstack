const http = require('http');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable'); //这是一个解析请求的包

http.createServer((req, res) => {
  console.log(req.url);
  if(req.url === '/upload' && req.method.toLowerCase() == 'post') {
    //上传文件的请求
    const form = new formidable.IncomingForm();
    form.uploadDir = './static/';
    form.parse(req, (err, fields, files) => {
      console.log(fields, files);
      const oldPath = files.upload.path;
      const fileName = files.upload.name;
      const newPath = path.join(path.dirname(oldPath), fileName);
      // 重命名
      fs.rename(oldPath, newPath, (err) => {
        if(!err) {
          res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
          })
        }
        res.end('上传完毕')
      })
    })
    return false
  }
  // 让浏览器知道这是一段html
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  })
  res.end(
    `
    <form action="/upload" enctype="multipart/form-data" method="POST">
      <input type="text" name="nickName">
      <input type="file" name="upload">
      <input type="submit" value="upload">
    </form>
    `
  )
}).listen(8080, () => {
  console.log('server is running 8080')
})