import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login.vue'
import Home from '@/pages/home/Home.vue'
import Search from '@/pages/search/Search.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ]
})
