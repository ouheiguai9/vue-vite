import HomeView from 'views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      noAuth: true,
    },
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('views/MyView.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/LoginView.vue'),
    meta: {
      noAuth: true,
    },
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('views/ServiceView.vue'),
  },
]
export default routes
