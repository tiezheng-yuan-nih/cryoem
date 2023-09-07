import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import HomeStat from "../views/HomeStat";
import CreateSession from "../views/CreateSession";
import AutoScreening from "../views/AutoScreening";
import ProcessData from "../views/ProcessData";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeStat,
  },
  {
    path: '/session',
    name: 'session',
    component: CreateSession,
  },
  {
    path: '/autoscreening',
    name: 'autoscreening',
    component: AutoScreening,
  },
  {
    path: '/processing',
    name: 'processing',
    component: ProcessData,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
