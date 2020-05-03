import Vue from 'vue'
import Router from 'vue-router'
import LinePage from '@/views/Line'
import FunctionPage from '@/views/Function'
import FunctionABCPage from '@/views/FunctionABC'
import GooglemapPage from '@/views/GoogleMap'
import PortfolioPage from '@/views/Portfolio'
import MainLayout from '@/layouts/main/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '',
      component: MainLayout,
      children: [
        {
          path: '/',
          redirect: '/DOSCG/portfolio'
        },
        {
          path: '/DOSCG/function',
          name: 'function',
          component: FunctionPage
        },
        {
          path: '/DOSCG/functionabc',
          name: 'functionabc',
          component: FunctionABCPage
        },
        {
          path: '/DOSCG/googlemap',
          name: 'googlemap',
          component: GooglemapPage
        },
        {
          path: '/DOSCG/line',
          name: 'line',
          component: LinePage
        },
        {
          path: '/DOSCG/portfolio',
          name: 'portfolio',
          component: PortfolioPage
        }
      ]
    }
  ]
})
