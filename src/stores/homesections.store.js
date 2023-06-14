import { defineStore } from 'pinia';

export const useHomeSectionsStore = defineStore({
  id: 'homeSections',
  state() {
    return {
      homeSections: [
        {
          image: 'home/model3.webp',
          title: 'Model 3',
          text: 'Order Online for Touchless Delivery',
          buttons: ['custom order', 'existing inventory'],
        },
        {
          image: 'home/modely.webp',
          title: 'Model Y',
          text: 'Order Online for Touchless Delivery',
          buttons: ['custom order', 'existing inventory'],
        },
        {
          image: 'home/models.webp',
          title: 'Model S',
          text: 'Order Online for Touchless Delivery',
          buttons: ['custom order', 'existing inventory'],
        },
        {
          image: 'home/modelx.webp',
          title: 'Model X',
          text: 'Order Online for Touchless Delivery',
          buttons: ['custom order', 'existing inventory'],
        },
        {
          image: 'home/solarpanels.webp',
          title: 'Solar Panels',
          text: 'Lowest Cost Solar Panels in America',
          buttons: ['order now', 'learn more'],
        },
        {
          image: 'home/solarroof.webp',
          title: 'Solar Roof',
          text: 'Produce Clean Energy From Your Roof',
          buttons: ['order now', 'learn more'],
        },
        {
          image: 'home/accessories.webp',
          title: 'Accessories',
          text: '',
          buttons: ['shop now'],
        },
      ],
    };
  },
});
