const http = require('http');
const fs = require('fs');
const path = require('path');
const staticDir = './static/'

http.createServer((req, res) => {
  // console.log(req.url)
  // koa-static public
  // static/a.png static/b.png 符合这也规则
  // ^以什么什么开头
  const reqUrl = req.url;
  if(/^\/static\//.test(reqUrl)) {
    staticServer(req, res);
    return false;
  }
  fs.readFile('./index1.html', 'binary', (err, file) => {
    res.write(file, 'binary')
    res.end();
  })
}).listen(9090, () => {
  console.log('server is running 9090')
})
function staticServer(req, res) {
  let url = req.url
  const fileName = path.basename(url);
  const filePath = path.join(__dirname, staticDir, fileName)
  fs.exists(filePath, exists => {
    if (!exists) {
      res.end('404');
    }
    fs.readFile(filePath, 'binary', (err, file) => {
      if(err) {
        res.end(err);
      }
      res.write(file, 'binary')
      res.end();
    })
  })
}