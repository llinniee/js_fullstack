/**
 * 管理 router
 * cann't find modules
 */
const Router = require('koa-router');
const router = new Router();

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
router.get('/user',async (ctx) => {
  await ctx.render('user', {user});
})
router.get('/posts', async (ctx) => {
  const {id} = ctx.query;
  const post = postDetail.find(postItem => postItem.id == id);
  await ctx.render('post', {post});
})
// 浏览器地址栏 get
router.get('/create', async (ctx) => {
  await ctx.render('create');
})
// submit method='post'
router.post('/create', async (ctx) => {
  // console.log(ctx.request.body);
  const {title, content} = ctx.request.body;
  let id = Date.now();
  user.posts.push({
    id,
    title
  })
  postDetail.push({
    id,
    content
  })
  ctx.redirect('/user');
})
module.exports = router;