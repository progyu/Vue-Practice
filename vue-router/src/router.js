import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/\Home.vue'

Vue.use(Router);

const About = () => import(/* webpackChunkName: "about" */ './views/About.vue');
const Users = () => import(/* webpackChunkName: "about" */ './views/Users.vue');

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/users/:userId',
      name: 'users',
      component: Users
    }
  ]
})
