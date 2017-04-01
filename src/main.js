// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/router'
import VueRouter from 'vue-router'
import './config/rem'
import VueFire from 'vuefire'
import {store} from './store/store'
import './getInfo'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueFire)

const router = new VueRouter({
  routes,
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
