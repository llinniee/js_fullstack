const Koa = require('koa')
const Router = require('koa-router')
const koaSession = require('koa-session')
const koaStatic = require('koa-static')

const app = new Koa();
const router = new Router();

router.get('/',async (ctx) => {
  ctx.cookies.set('formserver1', 'formserver1', {
    // maxAge: 3000
  });
  ctx.cookies.set('user-abc', 'user-abc', {
    path: '/user/abc',
    httpOnly: false
  });
  ctx.cookies.set('post', 'post', {
    path: '/post'
  });
  ctx.type = 'html';
  ctx.body = `
  <a href="/user"> -> user</a>
  <a href="/post"> -> post</a>
  `
})
router.get('/user', async (ctx) => {
  ctx.type = 'user page';
})
router.get('/user/abc', async (ctx) => {
  ctx.type = 'user/abc page';
})
router.get('/post', async (ctx) => {
  ctx.type = 'post page';
})
app.use(router.routes())
app.listen(8080, () => {
  console.log('server is running 8080')
})