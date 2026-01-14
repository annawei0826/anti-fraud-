if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import './assets/css/main.css'

// swiper
import { register } from 'swiper/element/bundle';

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import('./page/Home.vue')
  },
  {
    path: "/report",
    name: "Report",
    component: () => import('./page/Report.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/',
  }
]

const router = createRouter({
  history: createWebHashHistory('/anti-fraud/'),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return false
  },
})
const app = createApp(App);

app.use(register);
app.use(router);
app.mount('#app')