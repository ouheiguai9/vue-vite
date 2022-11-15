import HomeView from 'views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('views/MyView.vue'),
  },
]
export default routes
