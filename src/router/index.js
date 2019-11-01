import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hove from '@/components/pages/hove'
import Info from '@/components/pages/components/info'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/hove',
      name: 'Hove',
      component: Hove
    }, {
      path: '/info',
      name: 'Info',
      component: Info
    }, 
  ]
})
