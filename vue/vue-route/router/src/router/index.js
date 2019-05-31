import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Look from '@/components/Look'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/look',
      name: 'Look',
      component: Look,
      children: [
        {
          path: 'look-one',
          name: 'LookOne',
          component: LookOne
        },
        {
          path: 'look-two',
          name: 'LookTwo',
          component: LookTwo
        }
      ]
    }
    
  ]
})
