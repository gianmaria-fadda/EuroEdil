import { createRouter, createWebHistory } from 'vue-router';
import ChiSiamo from '../components/sections/ChiSiamo.vue';
import Servizi from '../components/sections/Servizi.vue';
import Team from '../components/sections/Team.vue';
import Contatti from '../components/sections/Contatti.vue';


const routes = [
  {
    path: '/chi-siamo',
    name: 'Chi Siamo',
    component: ChiSiamo,
  },
  {
    path: '/servizi',
    name: 'Servizi',
    component: Servizi,
  },
  {
    path: '/team',
    name: 'Team',
    component: Team,
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: Contatti,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;