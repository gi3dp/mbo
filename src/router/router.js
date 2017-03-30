import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const completionRate = r => require.ensure([], () => r(require('../page/completionRate/completionRate')), 'completionRate')
const kpi = r => require.ensure([], () => r(require('../page/kpi/kpi')), 'kpi')
const message = r => require.ensure([], () => r(require('../page/message/message')), 'message')
const newObj = r => require.ensure([], () => r(require('../page/newObj/newObj')), 'newObj')

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
  ]
}]
