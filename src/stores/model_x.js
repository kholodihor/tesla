import { defineStore } from 'pinia';

export const useModelXStore = defineStore({
  id: 'model-x',
  state() {
    return {
      intro: {
        image: 'https://tesla-cdn.thron.com/delivery/public/image/tesla/8c26f779-11e5-4cfc-bd7c-dcd03b18ff88/bvlatuR/std/4096x2561/Model-X-Main-Hero-Desktop-LHD',
        title: 'Model X',
        characteristics: [
          {
            number: '3.1s',
            desc: '0-60 mph*',
          },
          {
            number: '200mph',
            desc: 'Top Speed',
          },
          {
            number: 'AWD',
            desc: 'dual motor',
          },
        ],
      },
      ludicrous: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/10accb74-6710-4826-ba35-926846c140b5/bvlatuR/std/4096x2560/Model-X-Performance-Hero-Desktop-LHD',
        title: 'Beyond Ludicrous',
        subtitle: 'Plaid',
        text: 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. ',
        characteristics: [
          {
            number: '1,020hp',
            desc: 'peak power',
          },
          {
            number: '9.23s',
            desc: '155 mph 1/4 mile',
          },
          {
            number: '1.99s',
            desc: '0-60 mph*',
          },
        ],
      },
      evenmore: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/60c191f4-fffa-4da0-b385-bdcea4ac36b3/bvlatuR/std/4096x2560/Model-X-Utility-Hero-Desktop-LHD',
        title:
          'Even More Capable',
        subtitle: 'Utility',
        text: 'With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.',
      },
      designed: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/1ec08222-1f8a-41fc-9c4d-93c129d8344c/bvlatuR/std/4096x2559/Model-X-Exterior-Hero-Desktop-LHD',
        title:
          'Designed for Efficiency',
        subtitle: 'Exterior',
        text: 'With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.',
      },
      grid2: [
        {
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/26fc0cd9-d8f0-4af3-b8ce-dec63390f279/bvlatuR/std/3949x2218/Model-X-Exterior-Grid-A-Desktop-Global',
          title:
            'Relentless Performance',
          text: 'Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.',
        },
        {
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/d4fb7781-ec21-4823-b489-bde0a25e102b/bvlatuR/std/3949x2218/Model-X-Exterior-Grid-B-Desktop-Global',
          title:
            'Optimized Aerodynamics',
          text: 'Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.',
        },
        {
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/7166c24e-9516-46b2-82af-ffd8cb3c721e/bvlatuR/std/3536x1985/Model-X-Exterior-Grid-C-Desktop-Global',
          title: 'Refined Styling',
          text: 'An iconic silhouette meets refreshed, elegant proportions.',
        },
      ],
      anywhere: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/8410774a-2d2c-4867-805d-9a549b9eac30/bvlatuR/std/4096x2561/Model-X-Range-Hero-Desktop-LHD',
        title: 'Go Anywhere',
        subtitle: 'Range',
        text: 'Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week.  ',
      },
      specs: [
        {
          tab: 'Model X Plaid',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/256d1141-44e7-4bd3-8fdc-20852283c645/bvlatuR/std/4096x3072/Model-X-Specs-Hero-Desktop-LHD',
          specs: [
            {
              desc: 'Range(EPA est.)',
              number: '396mi',
            },
            {
              desc: '1/4mi',
              number: '9.23@155 mph trap speed',
            },
            {
              desc: 'Peak Power',
              number: '1,020 hp',
            },
            {
              desc: 'Wheels',
              number: '19" or 21"',
            },
            {
              desc: 'Cargo',
              number: '28 cu ft',
            },
            {
              desc: 'Weigth',
              number: '4,766 lbs',
            },
            {
              desc: 'Acceleration',
              number: '1.99 s 0-60 mph',
            },
            {
              desc: 'Top Speed',
              number: '200mph',
            },
            {
              desc: 'Drag Coefficient',
              number: '0.208 Cd',
            },
            {
              desc: 'Powertrain',
              number: 'Tri Motor',
            },
            {
              desc: 'Supercharging max',
              number: '250kW',
            },
          ],
        },
        {
          tab: 'Model X',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/256d1141-44e7-4bd3-8fdc-20852283c645/bvlatuR/std/4096x3072/Model-X-Specs-Hero-Desktop-LHD',
          specs: [
            {
              desc: 'Supercharging max',
              number: '250kW',
            },
            {
              desc: 'Range(EPA est.)',
              number: '396mi',
            },
            {
              desc: '1/4mi',
              number: '9.23@155 mph trap speed',
            },
            {
              desc: 'Peak Power',
              number: '1,020 hp',
            },
            {
              desc: 'Wheels',
              number: '19" or 21"',
            },

            {
              desc: 'Weigth',
              number: '4,766 lbs',
            },
            {
              desc: 'Acceleration',
              number: '1.99 s 0-60 mph',
            },
            {
              desc: 'Top Speed',
              number: '200mph',
            },
            {
              desc: 'Cargo',
              number: '28 cu ft',
            },
            {
              desc: 'Drag Coefficient',
              number: '0.208 Cd',
            },
            {
              desc: 'Powertrain',
              number: 'Tri Motor',
            },
          ],
        },
      ],
    };
  },
});