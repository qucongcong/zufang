import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home/home'], resolve)
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/login'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      component: resolve => require(['@/components/login/register'], resolve)
    },
    {
      path: '/changepw',
      name: 'changepw',
      component: resolve => require(['@/components/login/changepw'], resolve)
    }
  ]
})
