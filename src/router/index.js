import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/loginBMS'
  },
  {
    path: '/loginBMS',
    name: 'loginBMS',
    component: () => import('../views/login/loginBMS.vue')
  },
  {
    path: '/homeBMS',
    name: 'homeBMS',
    component: () => import('../views/home/homeBMS.vue')
  }
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to将要访问的路径，form代表从哪个路径跳转过来，next是一个函数，next()放行，next('url')强制跳转
  if (to.path === '/loginBMS') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/loginBMS')
  next()
})

export default router
