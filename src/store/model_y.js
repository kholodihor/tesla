import { defineStore } from 'pinia';

export const useModelYStore = defineStore({
  id: 'model-y',
  state() {
    return {
      intro: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/0cf18940-c0bf-45f7-b2d8-46c3bc693c65/bvlatuR/std/0x0/model-y_R1@2',
        title: 'Model Y',
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
      dualmotor: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/48b20b9d-9322-4cf9-b079-44797fc32600/bvlatuR/std/0x0/AWD_hero@2',
        title: 'Dual Motor',
        subtitle: 'All wheel drive',
        text: 'Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control. ',
        characteristics: [
          {
            number: '360°',
            desc: 'Rear, side and forward-facing cameras provide maximum visibility',
          },
          {
            number: '250m',
            desc: 'Powerful visual processing at up to 250 meters of range',
          },
          {
            number: 'AWD',
            desc: 'Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking ',
          },
        ],
      },
      videoSection: {
        video:
          'https://tesla-cdn.thron.com/delivery/public/video/tesla/c63301a9-96bc-463d-9e5d-65f581cd87d6/bvlatuR/WEBHD/Range_Desktop',
        title: 'Go Anywhere',
        subtitle: 'Range',
        text: 'Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week. ',
      },
      built: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/09990998-39bc-450d-8bf1-04d8abdff9ca/bvlatuR/std/4096x2560/Model-Y-Interior-Hero-Desktop-LHD',
        title: 'Built Around the Driver',
        subtitle: 'Interior',
        text: 'The inside of Model 3 is unlike any other car. You can use your smartphone as a key, and access all driver controls in the central 15-inch touchscreen. The all-glass roof extends from front to back, creating a sense of openness from every seat',
        characteristics: [
          {
            number: '360°',
            desc: 'Rear, side and forward-facing cameras provide maximum visibility',
          },
          {
            number: '250m',
            desc: 'Powerful visual processing at up to 250 meters of range',
          },
          {
            number: 'AWD',
            desc: 'Tesla Vision detects nearby cars, helps prevent potential collisions and assists with parking ',
          },
        ],
      },
      specs: [
        {
          tab: 'Model Y Plaid',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/c2f0eec0-e1ea-4cd6-9525-5579c6852a2f/bvlatuR/std/1800x1285/Model-Y-Specs-Hero-Desktop-LHD',
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
          tab: 'Model Y',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/c2f0eec0-e1ea-4cd6-9525-5579c6852a2f/bvlatuR/std/1800x1285/Model-Y-Specs-Hero-Desktop-LHD',
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
