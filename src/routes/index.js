import CustomerHome from 'views/CustomerHome.vue'
import LawyerHome from 'views/LawyerHome.vue'

const routes = [
  {
    path: '/customer',
    component: CustomerHome,
  },
  {
    path: '/lawyer',
    component: LawyerHome,
  },
]
export default routes
