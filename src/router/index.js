import Vue from 'vue'
import Router from 'vue-router'
import Hotel from '@/components/Hotel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hotel',
      component: Hotel
    }
  ]
})
