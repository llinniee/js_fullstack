{/* <script src="./fs.js"></script> */}
// require 进来 COMMJS 模块化方案
// live-server
const http = require('http');
const https = require('https');
let i = 0;
http.createServer(function(request, response){
    i++;
    response.end(`HELLO WORLD ${i}`);
}).listen(8000);

// web服务在软件上理解就是HTTP访问的服务