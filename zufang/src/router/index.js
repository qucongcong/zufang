import Vue from 'vue'
import Router from 'vue-router'
import Message from '@/components/my/Message'
import Subsidy from '@/components/my/Subsidy'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home/home'], resolve)
    },
    {
      path:'/Message',
      name: 'Message',
      component: Message
    },
    {
      path:'/Subsidy',
      name: 'Subsidy',
      component: Subsidy
    }
  ]
})
