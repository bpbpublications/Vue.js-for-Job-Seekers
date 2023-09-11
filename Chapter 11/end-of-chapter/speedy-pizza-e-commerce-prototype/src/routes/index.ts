import { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from "vue-router";

import MainLayoutComponent from '../components/layouts/page_wrappers/MainLayoutComponent.vue'
import SlimPageWrapper from '../components/layouts/page_wrappers/SlimPage.vue'
import ProfileWrapper from '../components/layouts/page_wrappers/ProfileWrapper.vue'

import LandingPage from "../components/pages/site/landing-page/LandingPage.vue";
import MenuPage from "../components/pages/site/menu-page/MenuPage.vue"
import ItemPage from "../components/pages/site/item-page/ItemPage.vue"
import CheckoutPage from "../components/pages/site/checkout-page/CheckoutPage.vue"

import LogInPage from '../components/pages/site/login-page/LogInPage.vue'
import LogOutPage from '../components/pages/site/login-page/LogOutPage.vue'
import RegistrationPage from '../components/pages/site/registration-page/RegistrationPage.vue'

import ProfileInfoPage from '../components/pages/profile/info-page/ProfileInfoPage.vue'
import ProfileOrdersPage from '../components/pages/profile/orders-page/ProfileOrdersPage.vue'
import { ref } from "vue";

const isAuthenticated = ref(false)

const routes: RouteRecordRaw[] = [
  {
    path: '/', component: MainLayoutComponent, children: [
      { path: '', name: 'home', component: LandingPage },
      { path: 'menu', name: 'menu', component: MenuPage },
      { path: 'item/:id', name: 'item', component: ItemPage },
      { path: 'checkout/:basket', name: 'checkout', component: CheckoutPage }
    ]
  },
  {
    path: '/', component: SlimPageWrapper, children: [
      { path: 'login', name: 'login', component: LogInPage },
      { path: 'logout', name: 'logout', component: LogOutPage },
      { path: 'register', name: 'register', component: RegistrationPage },
    ]
  },
  {
    path: '/profile', component: ProfileWrapper, children: [
      { path: '', name: 'profile_info', component: ProfileInfoPage },
      { path: 'orders', name: 'profile_orders', component: ProfileOrdersPage },
    ],
    beforeEnter: (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) => {
      if (to.name !== 'login' && !isAuthenticated.value) {
        next({ name: 'login' })
      } else {
        next()
      }
    }
  }

]

export default routes
