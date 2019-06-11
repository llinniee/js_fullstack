const Koa = require('koa')

const app = new koa()
const { PORT } = require('./config/default.js')

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`)
})