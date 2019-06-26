import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'
import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/time-entries',
      name: 'TimeEntries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time',
          name: 'LogTime',
          component: LogTime
        }
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
