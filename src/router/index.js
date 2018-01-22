import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Reatings from '@/components/reatings/reatings'
import Seller from '@/components/seller/seller'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },{
      path: '/reatings',
      name: 'Reatings',
      component: Reatings
    },{
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ],
  linkActiveClass:"active"
})
