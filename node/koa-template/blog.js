const koa = require('koa');
const path = require('path');
// 可以支持哪些模板引擎
const views = require('koa-views');
const ejs = require('ejs');
const app = new koa();

//  /user 个人主页面
//  /posts 文章详情
const user = {
  name: 'linnie',
  posts: [
    {
      id: 0,
      title: '汽车骑行'
    },
    {
      id: 1,
      title: '拖拉机骑行'
    },
  ]
}
const postDetail = [
  {
    id: 0,
    content: '这款汽车可000'
  },
  {
    id: 1,
    content: '<strong>这款拖拉机比汽车使用寿命长</strong>'
  }
]
app.use(
  views(path.join(__dirname, './views'),{
    extension: 'ejs'
  })
)
app.use(async (ctx) => {
//  区分 页面
  // console.log(ctx.path)
  if (ctx.path === '/user') {
    await ctx.render('user', {user});
  } else if(ctx.path === '/posts') {
    const {id} = ctx.query;
    const post = postDetail.find(postItem => postItem.id == id);
    await ctx.render('post', {post});
  } else {
    ctx.body =`无法处理该请求`;
  }

})
app.listen(8080, () => {
  console.log('server is success 8080')
})