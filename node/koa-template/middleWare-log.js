const koa = require('koa');

const app = new koa();
const admin = new koa();

app.listen(8080, () => {
  console.log('server is success 8080')
})

app.use(async (ctx, next) => {
  
})