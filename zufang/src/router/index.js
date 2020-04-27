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
    //申请成为租赁顾问
    {
      path: '/ApplyToBecomeLeasingConsultant',
      name: 'ApplyToBecomeLeasingConsultant',
      component: resolve => require(['@/components/home/ApplyToBecomeLeasingConsultant'], resolve)
    },
    //手机号验证
    {
      path: '/PhoneNumberVerification',
      name: 'PhoneNumberVerification',
      component: resolve => require(['@/components/home/PhoneNumberVerification'], resolve)
    },
    //申请已提交
    {
      path: '/ApplyToBecomeLeasingConsultantPay',
      name: 'ApplyToBecomeLeasingConsultantPay',
      component: resolve => require(['@/components/home/ApplyToBecomeLeasingConsultantPay'], resolve)
    }
  ]
})
