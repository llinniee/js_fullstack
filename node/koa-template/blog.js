const koa = require('koa');
const path = require('path');
// 可以支持哪些模板引擎
const views = require('koa-views');
const ejs = require('ejs');
const app = new Koa();

//  /user 个人主页面
//  /posts 文章详情
app.use(
  views(path.join(__dirname, './views')),{
    extension: 'ejs'
  }
)
app.use(async (ctx) => {
//  区分 页面
  // console.log(ctx.path)
  if (ctx.path === '/user') {

  } else if(ctx.path === '/user') {

  } else {
    ctx.body =`无法处理该请求`;
  }

})
app.listen(8080, () => {
  console.log('server is success 8080')
})