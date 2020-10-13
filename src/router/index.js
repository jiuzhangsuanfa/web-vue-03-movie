import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Hot from '../views/Hot.vue'
import Soon from '../views/Soon.vue'
import Movie from '../views/Movie.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hot',
    name: 'hot',
    component: Hot
  },
  {
    path: '/soon',
    name: 'soon',
    component: Soon
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie
  },
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router
