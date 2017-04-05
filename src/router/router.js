import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const completionRate = r => require.ensure([], () => r(require('../page/completionRate/completionRate')), 'completionRate')
const kpi = r => require.ensure([], () => r(require('../page/kpi/kpi')), 'kpi')
const message = r => require.ensure([], () => r(require('../page/message/message')), 'message')
const newObj = r => require.ensure([], () => r(require('../page/obj/newObj')), 'newObj')
const objDetail = r => require.ensure([], () => r(require('../page/obj/objDetail')), 'objDetail')
const data = r => require.ensure([], () => r(require('../api/data.vue')), 'data')

export default [{
  path:'/',
  component:App,
  children: [

    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path: '/completion-rate',
      component:completionRate
    },
    {
      path:'/kpi',
      component:kpi
    },
    {
      path:'/message',
      component:message
    },
    {
      path:'/newObj',
      component:newObj
    },
    {
      path:'/objects/:detail', component:objDetail, props:true, name:'objDetail'
    },
    {
      path:'/api',
      component:data
    }
  ]
}]
