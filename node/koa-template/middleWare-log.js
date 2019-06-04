const koa = require('koa');

const app = new koa();
const admin = new koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  ctx.body = `hello koa`;
  const end = Date.now();
  // writeHead() 响应头 content-type
  ctx.set('X-Response-time', `${end - start}ms`);
  console.log('spend', `${end - start}ms`);
})
app.use(async (ctx) => {
  ctx.body = `hello koa`;
})
app.listen(8080, () => {
  console.log('server is success 8080')
})

