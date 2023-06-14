import { defineStore } from 'pinia';

export const useSidebarLinksStore = defineStore({
  id: 'sidebarLinks',
  state() {
    return {
      sidebarLinks: [
        'existing inventory',
        'used inventory',
        'trade-in',
        'test-drive',
        'insurance',
        'cybertruck',
        'roadster',
        'semi',
        'charging',
        'powerwall',
        'commercial energy',
        'utilities',
        'find us',
        'support',
        'investor relations',
      ],
      mobilebarLinks: [
        {
          name: 'model S',
          to: '/model-s',
        },
        {
          name: 'model 3',
          to: '/model-3',
        },
        {
          name: 'model Y',
          to: '/model-y',
        },

        {
          name: 'model X',
          to: '/model-x',
        },
        {
          name: 'solar panels',
          to: '/solar-panels',
        },
        {
          name: 'solar roof',
          to: '/solar-roof',
        },
        {
          name: 'accesoires',
          to: '/',
        },
        {
          name: 'existing inventory',
          to: '/',
        },
        {
          name: 'used inventory',
          to: '/',
        },
        {
          name: 'trade-in',
          to: '/',
        },
        {
          name: 'test-drive',
          to: '/',
        },
        {
          name: 'insurance',
          to: '/',
        },
        {
          name: 'cybertruck',
          to: '/',
        },
        {
          name: 'roadster',
          to: '/',
        },
        {
          name: 'semi',
          to: '/',
        },
        {
          name: 'charging',
          to: '/',
        },
        {
          name: 'powerwall',
          to: '/',
        },
        {
          name: 'commercial energy',
          to: '/',
        },
        {
          name: 'utilities',
          to: '/',
        },
        {
          name: 'find us',
          to: '/',
        },
        {
          name: 'support',
          to: '/',
        },
        {
          name: 'investor relations',
          to: '/',
        },
      ],
    };
  },
});
