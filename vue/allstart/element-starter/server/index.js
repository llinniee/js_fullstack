const express = require('express');
const http = require('http');
const app = express();    //应用
const api = require('./api');   //这是楚河汉界 api 后端api 服务
app.use(api);

app.set('port', 3000);
http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
  console.log('Express server listening on port')
});
