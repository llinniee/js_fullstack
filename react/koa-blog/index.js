const Koa = require('koa');
const path = require('path')
const bodyParser = require('koa-bodyparser');
const ejs = require('ejs');


app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(bodyParser({
  formLimit: '1mb'
})) 
app.listen(config.port)

console.log(`listening on port ${config.port}`)

app.use(staticCache(path.join(__dirname, './public'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))
app.use(staticCache(path.join(__dirname, './images'), { dynamic: true }, {
  maxAge: 365 * 24 * 60 * 60
}))

