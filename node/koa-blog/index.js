const koa = require('koa');
const path = require('path');
// 配置模板引擎 ejs
const views = reqiure('koa-views')

const app = new koa();
const signinRouter = require('./routers/signin.js')
const { PORT } = require('./config/default.js')

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))
app.use(signinRouter.routes());
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`)
})