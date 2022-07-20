import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ModelS from '../views/ModelS.vue';
import Model3 from '../views/Model3.vue';
import ModelX from '../views/ModelX.vue';
import ModelY from '../views/ModelY.vue';
import SolarPanels from '../views/SolarPanels.vue';
import SolarRoof from '../views/SolarRoof.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/model-s',
      component: ModelS,
    },
    {
      path: '/model-3',
      component: Model3
    },
    {
      path: '/model-x',
      component: ModelX
    },
    {
      path: '/model-y',
      component: ModelY
    },
    {
      path: '/solar-panels',
      component: SolarPanels
    },
    {
      path: '/solar-roof',
      component: SolarRoof
    },
  ],
});

export default router;
