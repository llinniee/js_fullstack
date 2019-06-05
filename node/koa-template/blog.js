const koa = require('koa');

const path = require('path');
// 可以支持哪些模板引擎
const views = require('koa-views');
// 处理请求数据 
const koaBody = require('koa-body');
const ejs = require('ejs');
const app = new koa();
// 方便区分不同的路径
// const router = new Router();
const router = require('./router');

//  /user 个人主页面
//  /posts 文章详情

// 往ctx上面加东西
app.use(koaBody())
app.use(
  views(path.join(__dirname, './views'),{
    extension: 'ejs'
  })
)
// router.get('/user');
// router.get('/posts');
// .....
// app.use(async (ctx) => {
// //  区分 页面
//   // console.log(ctx.path)
//   // method
//   if (ctx.path === '/user') {
//     await ctx.render('user', {user});
//   } else if(ctx.path === '/posts') {
//     const {id} = ctx.query;
//     const post = postDetail.find(postItem => postItem.id == id);
//     await ctx.render('post', {post});
//   } else {
//     ctx.body =`无法处理该请求`;
//   }

// })
app.use(router.routes()).use(router.allowedMethods())
app.listen(8080, () => {
  console.log('server is success 8080')
})