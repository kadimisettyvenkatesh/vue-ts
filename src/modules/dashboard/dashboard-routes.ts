import { RouteRecordRaw } from "vue-router";
import DefaultDashboard from './DefaultDashboard.vue';

export const DASHBOARD_ROUTES: Array<RouteRecordRaw> = [
    // { path: '', redirect: '/' },
    {
      path:'',
      name:'default dashboard',
      alias: '/',
      component:DefaultDashboard
    }
]