import { defineStore } from 'pinia'

export const useModelXStore = defineStore({
  id: 'model-x',
  state() {
    return {
      intro: {
        image: 'https://www.tesla.com/sites/default/files/images/model-x-five-star-rating-hero.jpg',
        title: 'Model X',
        characteristics: [
          {
            number: '3.1s',
            desc: '0-60 mph*'
          },
          {
            number: '200mph',
            desc: 'Top Speed'
          },
          {
            number: 'AWD',
            desc: 'dual motor'
          }
        ]
      },
      ludicrous: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Performance-Desktop.jpg',
        title: 'Beyond Ludicrous',
        subtitle: 'Plaid',
        text: 'Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. ',
        characteristics: [
          {
            number: '1,020hp',
            desc: 'peak power'
          },
          {
            number: '9.23s',
            desc: '155 mph 1/4 mile'
          },
          {
            number: '1.99s',
            desc: '0-60 mph*'
          }
        ]
      },
      evenmore: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-X-Utility-Hero-Desktop-LHD',
        title: 'Even More Capable',
        subtitle: 'Utility',
        text: 'With the most storage space and towing capacity of any electric SUV, and seating for up to seven adults, Model X delivers maximum utility. Front doors open and close automatically, Falcon Wing doors allow for easier loading and a standard trailer hitch lets you bring your gear anywhere you go.'
      },
      designed: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Model-X-Exterior-Hero-Desktop-Global',
        title: 'Designed for Efficiency',
        subtitle: 'Exterior',
        text: 'With a drag coefficient of just .208 Cd, the lowest on the planet, Model S is built for speed, endurance and range. Improved aerodynamics and a wider chassis offer more responsive performance so you can take corners quicker and with more confidence.'
      },
      grid2: [
        {
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-X-Exterior-Grid-A-Desktop-Mobile-Global',
          title: 'Relentless Performance',
          text: 'Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.'
        },
        {
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/h_1620,w_2880,c_fit,f_auto,q_auto:best/Model-X-Exterior-Grid-B-Desktop-Mobile-Global',
          title: 'Optimized Aerodynamics',
          text: 'Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.'
        },
        {
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Exterior-Grid-C-Desktop_Mobile-LHD.jpg',
          title: 'Refined Styling',
          text: 'An iconic silhouette meets refreshed, elegant proportions.'
        }
      ],
      anywhere: {
        image:
          'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Range_Desktop-LHD.jpg',
        title: 'Go Anywhere',
        subtitle: 'Range',
        text: 'Model 3 is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network. We currently have over 35,000 Superchargers worldwide, with six new locations opening every week.  '
      },
      specs: [
        {
          tab: 'Model X Plaid',
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Specs-Desktop_Mobile-Global.jpg',
          specs: [
            {
              desc: 'Range(EPA est.)',
              number: '396mi'
            },
            {
              desc: '1/4mi',
              number: '9.23@155 mph trap speed'
            },
            {
              desc: 'Peak Power',
              number: '1,020 hp'
            },
            {
              desc: 'Wheels',
              number: '19" or 21"'
            },
            {
              desc: 'Cargo',
              number: '28 cu ft'
            },
            {
              desc: 'Weigth',
              number: '4,766 lbs'
            },
            {
              desc: 'Acceleration',
              number: '1.99 s 0-60 mph'
            },
            {
              desc: 'Top Speed',
              number: '200mph'
            },
            {
              desc: 'Drag Coefficient',
              number: '0.208 Cd'
            },
            {
              desc: 'Powertrain',
              number: 'Tri Motor'
            },
            {
              desc: 'Supercharging max',
              number: '250kW'
            }
          ]
        },
        {
          tab: 'Model X',
          image:
            'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Specs-Desktop_Mobile-Global.jpg',
          specs: [
            {
              desc: 'Supercharging max',
              number: '250kW'
            },
            {
              desc: 'Range(EPA est.)',
              number: '396mi'
            },
            {
              desc: '1/4mi',
              number: '9.23@155 mph trap speed'
            },
            {
              desc: 'Peak Power',
              number: '1,020 hp'
            },
            {
              desc: 'Wheels',
              number: '19" or 21"'
            },

            {
              desc: 'Weigth',
              number: '4,766 lbs'
            },
            {
              desc: 'Acceleration',
              number: '1.99 s 0-60 mph'
            },
            {
              desc: 'Top Speed',
              number: '200mph'
            },
            {
              desc: 'Cargo',
              number: '28 cu ft'
            },
            {
              desc: 'Drag Coefficient',
              number: '0.208 Cd'
            },
            {
              desc: 'Powertrain',
              number: 'Tri Motor'
            }
          ]
        }
      ]
    }
  }
})
