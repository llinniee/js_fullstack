var  express = require('express')
var app = express();
var cors = require('cors')

app.get('/product/:id')
app.listen(80, function() {
  console.log('web server listening on port 80')
})