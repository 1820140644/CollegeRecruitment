import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import JobFairList from '../components/JobFair/List.vue'
import JobFairDetail from '../components/JobFair/Detail.vue'
import JobFairAdd from '../components/JobFair/Add.vue'
import ApplicationList from '../components/Application/List.vue'
import ApplicationDetail from '../components/Application/Detail.vue'
import ApplicationAdd from '../components/Application/Add.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/JobFairList',
      component: JobFairList
    },
    {
      path: '/JobFairDetail',
      name: 'JobFairDetail',
      component: JobFairDetail
    },
    {
      path: '/JobFairAdd',
      component: JobFairAdd
    },
    {
      path: '/ApplicationList',
      component: ApplicationList
    },
    {
      path: '/ApplicationDetail',
      component: ApplicationDetail
    },
    {
      path: '/ApplicationAdd',
      component: ApplicationAdd
    }
  ]
})
