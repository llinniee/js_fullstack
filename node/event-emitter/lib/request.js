const request = require('request')

module.exports = (url) => new Promise((req, rej) => {
  req({url,json:true},(err, res, body) => {
    console.log('error', err)
    req(body);
  }
  )
})