const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
  console.log(req.url)
  fs.readFile('./static/index.html', 'binary', (err, file) => {
    res.write(file, 'binary')
    res.end();
  })
}).listen(9090, () => {
  console.log('server is running 9090')
})