import Vue from 'vue'
import VueRouter from 'vue-router'
const Home=()=>import("../views/home/Home.vue")
const Mine=()=>import("../views/mine/Mine.vue")
const Search=()=>import("../views/search/Search.vue")
const Topic=()=>import("../views/topic/Topic.vue")

const musics=()=>import("../views/musics.vue")

const login=()=>import("../views/login/login.vue")
const chiidlogin=()=>import("../views/login/chiidlogin/chiidlogin.vue")
const childcreate=()=>import("../views/login/chiidlogin/childcreate.vue")
// 手机注册验证
const childldcreatephone=()=>import("../views/login/chiidlogin/childldcreatephone.vue")

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/musics'
   
  },
  {
    path: '/musics',
    name: 'musics',
    component: musics
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/chiidlogin',
    name: 'chiidlogin',
    component: chiidlogin
  },
  {
    path: '/childcreate',
    name: 'childcreate',
    component: childcreate
  },
  {
    path: '/childldcreatephone',
    name: 'childldcreatephone',
    component: childldcreatephone
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/mine',
    name: 'Mine',
    component: Mine
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/topic',
    name: 'Topic',
    component: Topic
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"active"
})

export default router
