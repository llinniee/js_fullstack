const path = require('path')
const Koa = require('koa');  //node开发框架
// 静态资源 动态资源(数据库)
const server = require('koa-static');
const route = require('koa-route');
const main = server(path.join(__dirname, 'public'));
// 从前端思维到后端思维

const oauth = async ctx => {
  // 可以 await 数据库查询
  // await  请求
  console.log('----------')
  const str = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('等了三秒钟')
    }, 3000);
  })
  console.log(str);
  ctx.response.redirect('/welcome.html')
}
// public 让用户可以访问到 路由 网站是提供资源的，
const app = new Koa();    //后端应用
app.use(main);
app.use(route.get('/oauth/redirect', oauth));
app.listen(8080);