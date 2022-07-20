import { defineStore } from 'pinia';

export const useModel3Store = defineStore({
  id: 'model-3',
  state() {
    return {
      intro: {
        image: 'model_3/model-3.webp',
        title: 'Model 3',
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
      imageSection: {
        image: '/model_s/models-scheme.webp',
        title: 'Built for Safety',
        subtitle: 'Safety',
        text: 'Safety is the most important part of every Tesla. We design our vehicles to exceed safety standards. 5-Star Rating Model 3 achieved NHTSA 5-star safety ratings in every category and subcategory. Top Safety Pick+ Model 3 received the IIHS Top Safety Pick+ award, with top ratings in all crashworthiness and front crash prevention categories. ',
      },
      quickest: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/1a5ba4b1-efd8-40bc-8b6d-e81bf8223e37/bvlatuR/std/2560x1440/Model-3-Performance-Hero-Desktop-LHD',
        title: 'Quickest Acceleration',
        subtitle: 'Performance',
        text: 'Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes for total control in all weather conditions. A carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph* in as little as 3.1 seconds. ',
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
      dualmotor: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/a7d91e4d-ba1e-41f1-b996-36fb4c925f57/bvlatuR/std/2560x1600/Model-3-AWD-Hero-Desktop-LHD',
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
      anywhere: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/b314365b-e41d-4682-b890-608bdbdfa49e/bvlatuR/std/2560x2204/Model-3-Range-Hero-Desktop-LHD',
        title: 'Go Anywhere',
        subtitle: 'Range',
        text: 'Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week.  ',
      },
      built: {
        image:
          'https://tesla-cdn.thron.com/delivery/public/image/tesla/9a77958a-146d-40de-8a5f-0ba8af777fdf/bvlatuR/std/2560x1440/Model-3-Interior-Hero-Desktop-LHD',
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
          tab: 'Model 3 Plaid',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/cd8ca7c5-ae2e-457a-85e3-a672c37f606f/bvlatuR/std/1024x732/Model-3-Specs-Desktop-Mobile-LHD',
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
          tab: 'Model 3',
          image:
            'https://tesla-cdn.thron.com/delivery/public/image/tesla/cd8ca7c5-ae2e-457a-85e3-a672c37f606f/bvlatuR/std/1024x732/Model-3-Specs-Desktop-Mobile-LHD',
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
