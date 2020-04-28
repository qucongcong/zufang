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
      path: '/leasemanagement',
      name: 'leasemanagement',
      component: resolve => require(['@/components/my/LeaseManagement'], resolve) //租赁管理的4个导航页面
    },
    {
      path: '/Informationmanagement',
      name: 'Informationmanagement',
      component: resolve => require(['@/components/my/InformationManagement'], resolve) //信息管理
    },
    {
      path: '/margin',
      name: 'margin',
      component: resolve => require(['@/components/my/Margin'], resolve) // 保证金
    },
    {
      path: '/withdrawal',
      name: 'withdrawal',
      component: resolve => require(['@/components/my/withdrawal'], resolve) //提现
    },
    {
      path: '/Withdrawalaudit',
      name: 'Withdrawalaudit',
      component: resolve => require(['@/components/my/Withdrawalaudit'], resolve) //提现审核
    }
  ]
})
