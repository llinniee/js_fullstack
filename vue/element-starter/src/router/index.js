import Vue from 'vue'
import VueRouter from 'vue-router'

// this.$router this.$route
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name: 登录,
    hidden: true,
    component: login
  }
]
