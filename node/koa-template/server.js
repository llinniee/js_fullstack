const koa = require('koa');

const app = new koa();
const admin = new koa();

// context req + res
app.use(async (ctx, next) => {
 console.log(1);
 await next();
 console.log(2);
})  
app.use(async (ctx, next) => {
  console.log(4);
 await next();
})
app.use(async (ctx) => {
  console.log(3);
  ctx.body = `
  <strong> tj np</strong>
  `
});
app.listen(8080, () => {
  console.log('server is success 8080')
})