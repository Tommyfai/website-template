import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Main from '../views/layouts/main.vue'
import Login from '../views/layouts/login.vue'
import About from '../views/about.vue'
import Task from '../views/task.vue'
import Error404 from '../components/error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'admin',
    redirect: '/home',
    component: Main,
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home,
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/about.vue')
      },
      {
        path: 'css-transition',
        name: 'cssTransition',
        component: () => import('../views/css-transition.vue')
      }
    ]
  }, {
    path: '/l',
    name: 'l',
    redirect: '/login',
    component: Login,
    children: [
      {
        path: '/login',
        name: 'login',
        component: About
      },
      {
        path: '/task',
        name: 'task',
        component: Task,
      }
    ]
  }
  , {
    path: '*',
    name: '404',
    component: Error404
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
