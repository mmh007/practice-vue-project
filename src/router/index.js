import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/pages/404/index'
import HelloWorld from '@/components/HelloWorld'
import Hove from '@/components/pages/hove'
import Info from '@/components/pages/components/info'
import messageBox from '@/components/pages/messageBox'
import Xuexi from '@/components/xuexi'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'index'
      // component: index,
      // redirect: '/index'
    }, {
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
    }, {
      path: '/messageBox',
      name: 'messageBox',
      component: messageBox
    }, {
      path: '/xuexi',
      name: 'Xuexi',
      component: Xuexi
    }
  ]
})