var express = require('express')
var router = express.Router()

var mysql = require('mysql')

var data = {
  code: 200,
  msg: 'success'
}

var pool = mysql.createPool({
  host:'localhost',
  user: 'root',
  password: '123456',
  database: 'trip'
})

// 开始请求

router.post('/', function(req, res, next) {
  let userName = req.body.userName
  let password = req.body.password
  // 从数据库查找数据， 最后返回给前端
  pool.query(`SELECT * FROM user where userName = ${userName}`, 
  function(err, result, fields) {
    if (err) {
      data.code = 500
      data.msg = err
    }
    if (result[0].password === password) {
      
    }
  }
})
