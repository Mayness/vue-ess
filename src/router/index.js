import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import children from './childRouter'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      // 若子路由中有默认路由，则父级不能有name属性，可移至子默认路由
      // name: 'Index',
      component: Index,
      children
    }
  ],
  mode: 'history'
})
// router.afterEach((to, from, next) => {
//   console.log(to, from)
// })
export default router
