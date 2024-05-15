import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main'
import AboutCompany from '../views/AboutCompany'
import Products from '@/views/Products.vue'
import Documents from '@/views/Documents.vue'
import Contacts from '@/views/Contacts.vue'
import ReinforcedConcreteProducts from '@/views/ReinforcedConcreteProducts.vue'
import UniversalHouseBuildingSystem from '@/views/UniversalHouseBuildingSystem.vue'
import DecorativeItems from '@/views/DecorativeItems.vue'
import InertMaterials from '@/views/InertMaterials.vue'
import ConcreteAndMortars from '@/views/ConcreteAndMortars.vue'
import SandConcrete from '@/views/SandConcrete.vue'
import PolystyreneConcrete from '@/views/PolystyreneConcrete.vue'
import History from '@/views/History.vue'
import Basket from '@/views/Basket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/aboutCompany',
    component: AboutCompany
  },
  {
    path: '/history',
    component: History
  },
  {
    path: '/products',
    component: Products,
    children: [
      {
        path: '',
        component: ReinforcedConcreteProducts
      },
      {
        path: 'reinforcedConcreteProducts',
        component: ReinforcedConcreteProducts
      },
      {
        path: 'universalHouseBuildingSystem',
        component: UniversalHouseBuildingSystem
      },
      {
        path: 'decorativeItems',
        component: DecorativeItems
      },
      {
        path: 'inertMaterials',
        component: InertMaterials
      },
      {
        path: 'concreteAndMortars',
        component: ConcreteAndMortars
      },
      {
        path: 'sandConcrete',
        component: SandConcrete
      },
      {
        path: 'polystyreneConcrete',
        component: PolystyreneConcrete
      }
    ]
  },
  {
    path: '/documents',
    component: Documents
  },
  {
    path: '/contacts',
    component: Contacts
  },
  {
    path: '/basket',
    component: Basket
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
