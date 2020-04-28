import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/consult',
      name: 'consult',
      component: resolve => require(['@/components/my/consult'], resolve)
    },
    {
      path: '/pay',
      name: 'pay',
      component: resolve => require(['@/components/my/pay'], resolve)
    },{
      path: '/audit',
      name: 'audit',
      component: resolve => require(['@/components/my/audit'], resolve)
    }
  ]
})
