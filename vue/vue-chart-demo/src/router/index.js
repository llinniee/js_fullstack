import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/index')
    },
    {
      path: '/login',
      name: 'login',
      component: 
        () => import('@/pages/login')
    }
  ]
})
let token = false;
const whiteList = ['/login','/signup', 'auth-redirect']
router.beforeEach((to, from, next) => {
  if (token) {

  } else {
    console.log(to.path);
    if (whiteList.include(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
export default router;

// to from $router path

