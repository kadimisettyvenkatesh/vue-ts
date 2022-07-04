import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue';
import LogIn from '@/components/LogIn.vue';
import SignUp from '@/components/SignUp.vue';
import { DASHBOARD_ROUTES } from '@/modules/dashboard/dashboard-routes';


const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: '/login' },
  {
    path:'/login',
    name:'login',
    alias: '/signin',
    component:LogIn
  },
  {
    path:'/signup',
    name:'signup',
    component:SignUp
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    children:[
      {
        path: '',
        name: 'home',
        component: HomeView
      }
    ]
  },
  {
    path: '',
    name: 'layout',
    component: () => import( '../views/LayOut.vue'),
    children:[
      {
        path: '/dashboard',
        name: 'dashboard',
        component: ()=>import(/* webpackChunkName: "dashboard" */ '../modules/dashboard/DashBoard.vue'),
        children:DASHBOARD_ROUTES
      }
    ],
    beforeEnter: (to, from) => {
      // reject the navigation
      return true;
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
