const koa = require('koa');

const app = new koa();
const admin = new koa();

// context req + res
app.use(async (ctx) => {
  ctx.body = `
  <strong> tj np</strong>
  `
});
app.listen(8080, () => {
  console.log('server is success 8080')
})